/* OBMusic v5 (quiet background mix: a short set at a soft level, then the DJ slowly turns it down to a quiet background; highs and lows gently rolled off, stays under the page): generative melodic techno / progressive electronic on the Web Audio API (no samples, no libraries).
   Saturated kick with a real side-chain pump, sub + filtered rolling bass, a detuned saw bank that plays both the pad
   and the chord stabs, a filter + FM plucked arpeggio through a ping-pong delay, a gliding lead that plays a written
   motif (pentatonic, long notes lean onto the chord, so it is always in key), hats / shaker / clap / fills, and a
   snare roll, noise riser, pitch riser and high-pass sweep into the drop.
   Arrangement: intro > groove > build > peak > break > groove ... Every cycle re-picks key, progression, bass line,
   arpeggio, gate masks, stab rhythm and motif. Almost every voice is a persistent node driven by parameter automation,
   so a step allocates next to nothing and the node count stays flat. The context sleeps a moment after stop().
   beat(), state() and levels() expose clock and spectrum so the page can animate to the music. */
window.OBMusic=(function(){
  "use strict";
  var AC=window.AudioContext||window.webkitAudioContext;
  if(!AC)return null;
  var VOL=0.026,BG=1,SET=7,FT=1.7,calm=false,startAt=0,BPM=124,riseG=null,sfxG=null,noiseBuf=null,windG=null,windF=null,windSrc=null,windT=0,lastFlick=0,SW=0.06,LOOK=0.18,TRIM=0.37;
  var ctx=null,on=false,nap=false,timer=null,nextT=0,step=0,bar=0,t0=0,volMul=0.25,live=0,busy=0,lvl=0.5,fx=null,fxG=null,fxNoise=null,fxOn=true;
  var master,duckG,an,anBuf,mix,hp,rv,dl,pump,pumpL,kSh,bank=[],padF,padG,stF,stG,bF,bG,bO1,bO2,bS,aF,aG,aO1,aO2,aO3,aO4,aMG,aRv,lF,lG,lO=[],rO,rOG,pcB,hh,oh,sh,cl,rl,rs,cr,kc;
  var KEYS=[{n:"A minor",r:57},{n:"F# minor",r:54},{n:"D minor",r:50},{n:"G minor",r:55},{n:"E minor",r:52},{n:"C minor",r:48},{n:"B minor",r:59}];
  var SC=[0,2,3,5,7,8,10],PEN=[0,2,3,4,6],ORDER={intro:"groove",groove:"build",build:"peak",peak:"break","break":"groove"};
  /* chord roots as scale degrees of natural minor, two bars each */
  var PROGS=[[0,5,2,6],[0,2,6,5],[5,6,0,0],[0,3,5,6],[0,6,5,4],[5,0,2,6]];
  /* bass lines: scale steps above the chord root (0 root, 4 fifth, 7 octave), "." rest; the kick owns the beat */
  var BASSG=["..0...0...0...07","..00..00..00..04",".0.0..07.0.0..04"],BASSP=[".000.000.000.007",".007.040.007.047",".00..007.00..704"],BINTRO="..0...0...0...0.";
  /* arpeggios: chord tones as scale steps above the root (base 36), and the gate masks that thin them out */
  var ARPS=["0247974202479b97","0472047204729472","7479747974727479","0204020702090b97"];
  var MASKS=["x..x..x.x..x..x.","x.xx.x.xx.xx.x.x","x..x.xx..x.x.xx.","..x.x.x...x.x.xx"];
  var STABS=["...x..x....x..x.","x..x..x...x..x..","..x..x..x..x..x.","..x...x...x..x.x"],PERCS=["...x.....x....x.","......x....x....",".x.....x..x....x"];
  /* lead motifs, four bars: step (0..63), note (index into the minor pentatonic of the key), length in steps */
  var MOTIFS=[[0,3,3,3,4,3,6,5,6,12,4,2,14,3,2,16,2,3,19,3,3,22,1,9,32,3,3,35,4,3,38,5,6,44,6,2,46,5,2,48,4,3,51,3,3,54,4,9],
    [0,5,6,6,4,2,8,3,7,20,2,2,22,3,2,24,4,7,32,5,6,38,6,2,40,5,7,52,4,2,54,3,2,56,2,7],
    [2,3,2,4,3,2,6,4,4,10,3,2,12,2,4,18,1,2,20,1,2,22,2,4,26,3,5,34,3,2,36,3,2,38,5,4,42,4,2,44,3,4,50,2,2,52,2,2,54,3,4,58,0,5]];
  var HV=[0.55,0.3,0.85,0.38],SV=[0.4,0.75,0.55,1];
  var key=KEYS[Math.floor(Math.random()*KEYS.length)],prog,bgP,bpP,arP,arM,arN,stP,pcP,mot,cyc=0,phase="intro",pb=-1,plen=4,skip=false;
  var kickOn=false,clapOn,ohOn,percOn,arpFull,hatV,shV,bpat,bCut,arpV,aCut,aDec,stabV,stCut,leadV,lCut,fill,roll;
  function SPB(){return 60/BPM/4}
  function mtof(m){return 440*Math.pow(2,(m-69)/12)}
  function rnd(a,b){return a+Math.random()*(b-a)}
  function pk(a,not){var x;do{x=a[Math.floor(Math.random()*a.length)]}while(a.length>1&&x===not);return x}
  function sd(d){var o=Math.floor(d/7);return key.r+12*o+SC[d-7*o]}
  function fold(m,lo){while(m<lo)m+=12;while(m>=lo+12)m-=12;return m}
  function newCycle(){prog=pk(PROGS,prog);bgP=pk(BASSG,bgP);bpP=pk(BASSP,bpP);arP=pk(ARPS,arP);arM=pk(MASKS,arM);arN=pk(MASKS,arM);stP=pk(STABS,stP);pcP=pk(PERCS,pcP);mot=pk(MOTIFS,mot)}
  /* ---- graph helpers ---- */
  function G(v,dest){var g=ctx.createGain();g.gain.value=v;if(dest)g.connect(dest);return g}
  function F(type,f,q,dest){var b=ctx.createBiquadFilter();b.type=type;b.frequency.value=f;if(q)b.Q.value=q;if(dest)b.connect(dest);return b}
  function P(p,dest){if(!ctx.createStereoPanner)return dest;var n=ctx.createStereoPanner();n.pan.value=p;n.connect(dest);return n}
  function O(type,dest,det){var o=ctx.createOscillator();o.type=type;if(det)o.detune.value=det;o.connect(dest);o.start(0);return o}
  function DC(th,kn,ra,at,re,dest){var c=ctx.createDynamicsCompressor();c.threshold.value=th;c.knee.value=kn;c.ratio.value=ra;c.attack.value=at;c.release.value=re;c.connect(dest);return c}
  function build(){
    ctx=new AC();var sr=ctx.sampleRate,i,ch,d,x,lp,o;
    /* master: mix > rumble/DJ high-pass > glue compressor > trim > volume > duck > limiter > out */
    duckG=G(1,DC(-3,0,20,0.002,0.1,ctx.destination));
    an=ctx.createAnalyser();an.fftSize=256;an.smoothingTimeConstant=0.72;anBuf=new Uint8Array(an.frequencyBinCount);var anG=ctx.createGain();anG.gain.value=0.3;anG.connect(an);sfxG=ctx.createGain();sfxG.gain.value=1;sfxG.connect(ctx.destination);
    var tone1=ctx.createBiquadFilter();tone1.type="highshelf";tone1.frequency.value=3200;tone1.gain.value=-7;var tone2=ctx.createBiquadFilter();tone2.type="lowshelf";tone2.frequency.value=90;tone2.gain.value=-3;tone1.connect(tone2);tone2.connect(duckG);riseG=G(1,tone1);master=G(0,riseG);
    hp=F("highpass",28,0.7,DC(-12,8,2.5,0.015,0.18,(function(){var pre=G(TRIM,master);pre.connect(anG);return pre})()));mix=G(1,hp);
    /* noise source shared by every noise voice */
    var nb=ctx.createBuffer(1,sr*2,sr);noiseBuf=nb;d=nb.getChannelData(0);for(i=0;i<d.length;i++)d[i]=Math.random()*2-1;
    var ns=ctx.createBufferSource();ns.buffer=nb;ns.loop=true;ns.start(0);
    /* reverb: generated impulse that darkens as it decays, fed through a high-pass so the low end stays dry */
    var L=Math.floor(sr*2.5),ir=ctx.createBuffer(2,L,sr),cv=ctx.createConvolver();
    for(ch=0;ch<2;ch++){d=ir.getChannelData(ch);lp=0;for(i=0;i<L;i++){x=i/L;lp+=((Math.random()*2-1)-lp)*(0.6-0.45*x);d[i]=lp*Math.pow(1-x,2.8)*Math.min(1,i/(sr*0.01))}}
    cv.buffer=ir;cv.connect(G(0.5,mix));rv=F("highpass",320,0.7,cv);
    /* ping-pong delay, dotted eighth */
    dl=G(1);var dA=ctx.createDelay(1),dB=ctx.createDelay(1),dW=G(0.34,mix);dA.delayTime.value=dB.delayTime.value=SPB()*3;
    dl.connect(dA);dA.connect(F("lowpass",3000,0.5,F("highpass",320,0.5,dB)));dB.connect(G(0.42,dA));dA.connect(P(-0.8,dW));dB.connect(P(0.8,dW));dW.connect(G(0.25,rv));
    /* side-chain buses: deep for bass / pad / stabs, light for arp / lead */
    pump=G(1,mix);pumpL=G(1,mix);
    /* kick bus with soft saturation */
    kSh=ctx.createWaveShaper();var cu=new Float32Array(257);for(i=0;i<257;i++)cu[i]=Math.tanh((i/128-1)*3)/Math.tanh(3);kSh.curve=cu;kSh.connect(G(0.7,mix));
    /* saw bank: four chord voices, two detuned saws each, spread in stereo; feeds pad and stabs */
    var bk=G(0.2);padF=F("lowpass",700,0.8);bk.connect(padF);padG=G(0,pump);padF.connect(padG);padG.connect(G(0.6,rv));
    stF=F("lowpass",1500,3.5);bk.connect(F("highpass",260,0.7,stF));stG=G(0,pump);stF.connect(stG);stG.connect(G(0.4,dl));stG.connect(G(0.35,rv));
    for(i=0;i<8;i++)bank.push(O("sawtooth",P((i%2?1:-1)*(0.3+0.12*(i>>1)),bk),(i%2?1:-1)*(7+(i>>1)*2.5)));
    /* bass: saw + square through a resonant low-pass, sine sub underneath */
    bF=F("lowpass",400,8);bG=G(0,G(0.3,pump));bF.connect(bG);bO1=O("sawtooth",bF);bO2=O("square",G(0.5,bF),-8);bS=O("sine",G(0.6,bG));
    /* pluck (arpeggio) */
    aF=F("lowpass",1200,7);aG=G(0,P(0.15,pumpL));aF.connect(aG);aG.connect(G(0.5,dl));aRv=G(0.25,rv);aG.connect(aRv);aO1=O("sawtooth",aF);aO2=O("square",G(0.35,aF),9);aMG=G(0);aO3=O("sine",G(0.3,aG));aMG.connect(aO3.frequency);aO4=O("sine",aMG);
    /* lead: two detuned saws left and right, square one octave down, slow vibrato, glide */
    lF=F("lowpass",1800,1.5);lG=G(0,pumpL);lF.connect(lG);lG.connect(G(0.4,dl));lG.connect(G(0.4,rv));
    lO=[O("sawtooth",P(-0.45,lF),-9),O("sawtooth",P(0.45,lF),9),O("square",G(0.4,lF))];
    var vb=G(5);o=O("sine",vb);o.frequency.value=5.3;vb.connect(lO[0].detune);vb.connect(lO[1].detune);
    /* pitch riser */
    rOG=G(0,F("lowpass",2600,1,mix));rOG.connect(G(0.5,rv));rO=O("sawtooth",rOG);
    /* tuned percussion bus */
    pcB=G(1,mix);pcB.connect(G(0.5,rv));
    /* noise voices: filter > gain (> pan) > soft top-end roll-off */
    var top=F("lowpass",11500,0.5,mix);
    function NC(type,f,q,pan,send){var fl=F(type,f,q),g=G(0,P(pan,top));ns.connect(fl);fl.connect(g);if(send)g.connect(G(send,rv));return{f:fl.frequency,g:g.gain}}
    hh=NC("highpass",8200,0.8,-0.25);oh=NC("highpass",6800,1.2,0.25,0.12);sh=NC("bandpass",6200,1.4,0.4);cl=NC("bandpass",1500,1.1,0,0.4);
    rl=NC("bandpass",1800,0.9,-0.1,0.25);rs=NC("bandpass",800,1.4,0,0.5);cr=NC("highpass",4500,0.5,0,0.5);kc=NC("bandpass",3200,0.8,0);
    newCycle();
  }
  /* ---- voices ---- */
  function hit(p,t,v,a,h,r){p.cancelScheduledValues(t);p.setTargetAtTime(v,t,a);p.setTargetAtTime(0,t+h,r)}
  /* one-shot oscillator with a pitch drop; cleans itself up */
  function ping(t,type,f0,f1,tf,v,h,tau,dest){if(live>24)return null;var o=ctx.createOscillator(),g=ctx.createGain();live++;o.type=type;
    o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+tf);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v,t+0.0015);g.gain.setTargetAtTime(0,t+0.0015+h,tau);
    o.connect(g);g.connect(dest);o.onended=function(){live--;o.disconnect();g.disconnect()};o.start(t);o.stop(t+h+tau*6+0.02);return o}
  function kick(t,v){var o=ping(t,"sine",230,112,0.04,v,0.06,0.07,kSh);if(o)o.frequency.exponentialRampToValueAtTime(50,t+0.2);
    hit(kc.g,t,0.45*v,0.0005,0.003,0.005);
    pump.gain.cancelScheduledValues(t);pump.gain.setTargetAtTime(0.16,t,0.005);pump.gain.setTargetAtTime(1,t+0.045,0.085);
    pumpL.gain.cancelScheduledValues(t);pumpL.gain.setTargetAtTime(0.6,t,0.005);pumpL.gain.setTargetAtTime(1,t+0.045,0.085)}
  function clap(t,v){var g=cl.g,i;g.cancelScheduledValues(t);for(i=0;i<3;i++){g.setValueAtTime(v*(i<2?0.6:1),t+i*0.011);g.setTargetAtTime(0,t+i*0.011,i<2?0.004:0.05)}}
  function snr(t,v,f){rl.f.setValueAtTime(f||1900,t);hit(rl.g,t,v,0.001,0.008,0.028)}
  function crash(t,v){cr.g.cancelScheduledValues(t);cr.g.setValueAtTime(0.2*v,t);cr.g.setTargetAtTime(0,t,0.45)}
  function sweep(t,d,f0,f1,g0,g1){rs.f.setValueAtTime(f0,t);rs.f.exponentialRampToValueAtTime(f1,t+d-0.006);rs.g.setValueAtTime(g0,t);rs.g.exponentialRampToValueAtTime(g1,t+d-0.006)}
  function bass(t,m,m0,v,acc,sl,len){var f=mtof(m);
    if(sl){bO1.frequency.setTargetAtTime(f*2,t,0.02);bO2.frequency.setTargetAtTime(f,t,0.02)}else{bO1.frequency.setValueAtTime(f*2,t);bO2.frequency.setValueAtTime(f,t)}
    bS.frequency.setValueAtTime(mtof(m0),t);
    bF.frequency.cancelScheduledValues(t);bF.frequency.setTargetAtTime(Math.min(5000,bCut*(acc?3.4:2.2)),t,0.002);bF.frequency.setTargetAtTime(bCut*0.5,t+0.008,acc?0.06:0.04);
    hit(bG.gain,t,v,0.004,len,0.025)}
  function pluck(t,m,v){var f=mtof(m);aO1.frequency.setValueAtTime(f,t);aO2.frequency.setValueAtTime(f,t);aO3.frequency.setValueAtTime(f,t);aO4.frequency.setValueAtTime(f*2,t);hit(aMG.gain,t,f*(1.5+2.5*v),0.001,0.004,aDec*0.8);
    aF.frequency.cancelScheduledValues(t);aF.frequency.setTargetAtTime(Math.min(9000,aCut*3.2),t,0.0015);aF.frequency.setTargetAtTime(aCut*0.7,t+0.006,aDec);
    hit(aG.gain,t,0.32*v,0.002,0.02,aDec*1.3)}
  function stab(t,v){stF.frequency.cancelScheduledValues(t);stF.frequency.setTargetAtTime(Math.min(8000,stCut*2.4),t,0.002);stF.frequency.setTargetAtTime(stCut*0.5,t+0.008,0.07);hit(stG.gain,t,0.8*v,0.003,0.05,0.06)}
  function lead(t,m,dur,v){var f=mtof(m),i;for(i=0;i<3;i++)lO[i].frequency.setTargetAtTime(i===2?f/2:f,t,0.014);
    lF.frequency.cancelScheduledValues(t);lF.frequency.setTargetAtTime(lCut*2,t,0.006);lF.frequency.setTargetAtTime(lCut,t+0.03,0.16);
    hit(lG.gain,t,0.155*v,0.007,Math.max(0.05,dur-0.03),0.07)}
  function chord(t,c){var tn=[c,c+2,c+4,c+(c===6?8:6)],i;for(i=0;i<8;i++)bank[i].frequency.setTargetAtTime(mtof(fold(sd(tn[i>>1]),i>5?66:57)),t,0.015)}
  /* ---- arrangement: runs at the top of every bar ---- */
  function barStart(t){
    var sp=SPB(),bl=sp*16,k,q,padL,pCut;
    pb++;
    /* the DJ's short show is over: the track drops into its quiet break at the next bar */
    if(calm&&t>=startAt+SET-0.02){calm=false;if(phase==='peak')skip=true}
    if(pb>=plen||skip){skip=false;phase=ORDER[phase];pb=0;plen=phase==="peak"?16:phase==="groove"&&cyc&&Math.random()<0.5?16:8;
      hp.frequency.setTargetAtTime(28,t,0.012);rs.g.setTargetAtTime(0,t,0.02);rOG.gain.setTargetAtTime(0,t,0.02);
      if(phase==="break"){cyc++;if(Math.random()<0.7)key=pk(KEYS,key);newCycle();crash(t,0.5);sweep(t,bl,6500,350,0.09,0.0005)}
      else if(phase==="peak"){crash(t,1);ping(t,"sine",110,36,0.6,0.45,0.25,0.3,mix)}
      else if(phase==="groove")crash(t,0.6)}
    var last=pb===plen-1,half=pb>=plen/2,w1=Math.sin(bar*0.37),w2=Math.sin(bar*0.23+1);
    fill=0;roll=0;kickOn=clapOn=ohOn=percOn=true;arpFull=false;hatV=1;shV=0;bpat=bgP;bCut=520+130*w1;arpV=0.75;aCut=1200+450*w2;aDec=0.05;stabV=0;stCut=1300+300*w2;leadV=0;lCut=1900;padL=0.5;pCut=850+250*w1;
    if(phase==="intro"){kickOn=ohOn=pb>1;clapOn=percOn=false;bpat=pb>1?BINTRO:"";bCut=300;aCut=550+pb*380;pCut=450+pb*220;padL=0.8;hatV=0.7;if(last){fill=1;sweep(t,bl,700,5000,0.002,0.1)}}
    else if(phase==="groove"){if(half||cyc)stabV=0.6;if(half)shV=0.5;if(last){fill=1;sweep(t,bl,700,5000,0.002,0.1)}else if(pb%4===3)fill=3}
    else if(phase==="build"){k=pb/plen;arpFull=true;arpV=0.75+0.25*k;aCut=900+2600*k;bCut=420+900*k;pCut=700+1900*k;padL=0.5+0.3*k;stabV=0.5+0.4*k;stCut=1200+2200*k;shV=0.5+0.5*k;
      if(pb>=plen-4){roll=1;q=(pb-plen+4)/4;sweep(t,bl,500*Math.pow(14,q),500*Math.pow(14,q+0.25),0.004+0.13*q*q,0.004+0.13*(q+0.25)*(q+0.25));
        hp.frequency.setValueAtTime(28*Math.pow(15,q),t);hp.frequency.exponentialRampToValueAtTime(28*Math.pow(15,q+0.25),t+bl-sp*1.2);if(last)hp.frequency.setTargetAtTime(28,t+bl-sp*1.1,0.02);
        if(q>=0.5){k=mtof(fold(key.r,57))*(q>0.6?2:1);rO.frequency.setValueAtTime(k,t);rO.frequency.exponentialRampToValueAtTime(k*2,t+bl-0.006);rOG.gain.setValueAtTime(q>0.6?0.045:0.004,t);rOG.gain.linearRampToValueAtTime(q>0.6?0.09:0.045,t+bl-0.006)}}
      if(last){kickOn=clapOn=false;bpat=""}}
    else if(phase==="peak"){bpat=bpP;bCut=950+350*w1;arpV=0.6;aCut=2200+700*w2;stabV=1;stCut=2300+900*w1;leadV=half?1:pb>5?0:0.85;if(pb===8)crash(t,0.5);lCut=half?2700:1900;shV=1;padL=0.4;pCut=1400+400*w1;
      if(pb%8===7)fill=last?2:1;if(last)sweep(t,bl,900,6000,0.002,0.1)}
    else{kickOn=clapOn=ohOn=percOn=false;hatV=0;bpat="";bCut=170;padL=0.7;pCut=1100+900*pb/plen;aCut=1700+250*pb;aDec=0.12;arpV=0.75;
      if(pb>3){shV=0.6;leadV=0.6;lCut=1100}if(last){fill=1;sweep(t,bl,600,5000,0.002,0.11)}}
    padF.frequency.setTargetAtTime(pCut,t,0.7);padG.gain.setTargetAtTime(padL*0.45,t,0.5);aRv.gain.setTargetAtTime(phase==="break"?0.7:0.25,t,0.3);
    chord(t,prog[(pb>>1)%4]);
  }
  /* ---- one sixteenth ---- */
  function sched(tt){
    var s=step%16,sp=SPB(),t=tt+(s%2?sp*SW:0),c,m,ch,i,e,d,r,q;t0=tt-step*sp;
    if(s===0)barStart(tt);
    c=prog[(pb>>1)%4];var cut=fill===2&&s>7,rc=fold(sd(c),31);
    if(kickOn&&s%4===0&&!cut)kick(t,s?0.95:1);
    if(clapOn&&(s===4||s===12)&&!cut){clap(t,1.1);if(phase==="peak")ping(t,"triangle",215,150,0.04,0.14,0.02,0.02,mix)}
    if(hatV){if(ohOn&&s%4===2)hit(oh.g,t,0.2*hatV,0.001,0.03,0.055);else hit(hh.g,t,0.23*HV[s%4]*hatV*rnd(0.8,1),0.0008,0.004,0.014)}
    if(shV)hit(sh.g,t,0.18*SV[s%4]*shV*rnd(0.8,1),0.005,0.012,0.026);
    if(percOn&&pcP.charAt(s)==="x"){m=mtof(fold(sd(c+(s%3?4:0)),57));ping(t,"sine",m*1.6,m,0.03,0.08,0.01,0.03,pcB)}
    /* fills and the build's snare roll (quarters > eighths > sixteenths > thirty-seconds) */
    if(roll){q=(pb-plen+4)*16+s;i=q<16?4:q<32?2:1;e=q/64;
      if(s%i===0){snr(t,0.05+0.2*e,1500+1700*e);if(q>55)snr(t+sp/2,0.04+0.2*e,1600+1700*e)}}
    else if((fill===1&&s>11)||cut)snr(t,0.07+0.012*s,1500+50*s);
    else if(fill===3&&(s===13||s===15))snr(t,0.07);
    /* bass */
    if(bpat){ch=bpat.charAt(s);if(ch!=="."&&!cut)bass(t,rc+sd(c+ +ch)-sd(c),rc,ch==="0"&&s%4!==2?0.8:1,ch!=="0"||s%4===2,ch==="7"&&s&&bpat.charAt(s-1)!==".",sp*0.7)}
    else if(phase==="break"&&s===0&&pb%2===0)bass(t,rc+12,rc,0.24,0,0,sp*30);
    /* stabs from the saw bank */
    if(stabV&&(stP.charAt(s)==="x"||(roll&&pb>plen-3&&(s%2===0||pb===plen-1)))&&!cut)stab(t,stabV*(s%4===3?1:0.8));
    /* arpeggio */
    e=(pb&4?arN:arM).charAt(s)==="x";
    if(e||arpFull||phase==="peak"){m=fold(sd(c),57)+sd(c+parseInt(arP.charAt(s),36))-sd(c);
      if((pb%4===3&&s>7)||(phase==="build"&&pb>=plen-2))m+=12;if(m>86)m-=12;
      pluck(t,m,arpV*(e?1:0.5))}
    /* lead motif: long notes lean onto the chord */
    if(leadV&&mot){q=(pb%4)*16+s;for(i=0;i<mot.length;i+=3)if(mot[i]===q){e=mot[i+1];d=PEN[(e%5+5)%5]+7*Math.floor(e/5);r=((d-c)%7+7)%7;
      if(mot[i+2]>4&&(r===3||r===5||(r===1&&c===4)))d--;
      lead(t,fold(key.r,58)+sd(d)-key.r,mot[i+2]*sp,leadV)}}
    step++;if(step%16===0)bar++;
  }
  function loop(){var n=ctx.currentTime;if(nextT<n-0.3)nextT=n+0.05;while(nextT<n+LOOK){sched(nextT);nextT+=SPB()}}
  function idle(){if(!ctx||on||!nap)return;if(ctx.currentTime<busy){setTimeout(idle,400);return}try{ctx.suspend()}catch(e){}}
  function start(){try{if(!ctx)build();if(ctx.state!=="running")ctx.resume();if(on)return;on=true;nap=false;nextT=ctx.currentTime+0.06;
    master.gain.cancelScheduledValues(ctx.currentTime);master.gain.setValueAtTime(master.gain.value,ctx.currentTime);/* the set: about seven seconds at a clear but soft level, then the DJ slowly brings it down to a quiet background */
    master.gain.linearRampToValueAtTime(VOL*volMul,ctx.currentTime+1.4);var rt=ctx.currentTime;startAt=rt;riseG.gain.cancelScheduledValues(rt);riseG.gain.setValueAtTime(1,rt);
    clearInterval(timer);timer=setInterval(loop,25)}catch(e){on=false}}
  function stop(){if(!ctx||!on){on=false;return}on=false;nap=true;var t=ctx.currentTime;master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(master.gain.value,t);master.gain.linearRampToValueAtTime(0,t+0.6);
    setTimeout(function(){if(!on){clearInterval(timer);timer=null;idle()}},900)}
  function duck(x){if(!ctx)return;var t=ctx.currentTime;duckG.gain.cancelScheduledValues(t);duckG.gain.setValueAtTime(duckG.gain.value,t);duckG.gain.linearRampToValueAtTime(x?0:1,t+0.5)}
  function next(){if(!ctx||!on)return;skip=true}
  function setLevel(p){lvl=Math.max(0,Math.min(1,p));setVolume(lvl*lvl)}
  function setVolume(f){volMul=Math.max(0,Math.min(1,f));if(ctx&&on){var t=ctx.currentTime;master.gain.cancelScheduledValues(t);master.gain.setTargetAtTime(VOL*volMul,t,0.12)}}
  function blip(f,d,type,v){try{prime();var t=ctx.currentTime,o=ctx.createOscillator(),g=ctx.createGain();d=d||0.14;o.type=type||"triangle";o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime((v||0.08)*0.5*volMul,t+0.012);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g);g.connect(ctx.destination);
    o.onended=function(){o.disconnect();g.disconnect()};o.start(t);o.stop(t+d+0.05);busy=t+d+0.2}catch(e){}}
  /* quiet extras for the photo roller: a soft card-like flick, and a faint wind that follows how fast it is moved */
  function rnd2(a,b){return a+Math.random()*(b-a)}
  /* the flick and the wind have their own small audio context: they are heard with the music low or off */
  function fxInit(){if(fx)return;try{fx=new AC();fxG=fx.createGain();fxG.gain.value=1;fxG.connect(fx.destination);var sr=fx.sampleRate;fxNoise=fx.createBuffer(1,sr,sr);var d=fxNoise.getChannelData(0);for(var i=0;i<d.length;i++)d[i]=Math.random()*2-1}catch(e){fx=null}}
  function fxWake(){if(!fxOn)return;fxInit();if(fx&&fx.state!=="running"){try{var p=fx.resume();if(p&&p.catch)p.catch(function(){})}catch(e){}}}
  function flick(v){try{if(!fxOn||!fx)return;if(fx.state!=="running"){fxWake();return}var ctx=fx,noiseBuf=fxNoise,sfxG=fxG,volMul=1;var t=ctx.currentTime;if(t-lastFlick<0.05)return;lastFlick=t;v=Math.max(0.25,Math.min(1,v||0.5));
    var s=ctx.createBufferSource();s.buffer=noiseBuf;var f=ctx.createBiquadFilter();f.type="bandpass";f.Q.value=1.1;f.frequency.setValueAtTime(rnd2(2600,3600),t);f.frequency.exponentialRampToValueAtTime(rnd2(1200,1700),t+0.05);
    var g=ctx.createGain();g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.085*v*volMul,t+0.004);g.gain.exponentialRampToValueAtTime(0.0001,t+0.06);s.connect(f);f.connect(g);g.connect(sfxG);s.onended=function(){s.disconnect();f.disconnect();g.disconnect()};s.start(t,Math.random());s.stop(t+0.09);
    var o=ctx.createOscillator(),og=ctx.createGain();o.type="triangle";o.frequency.setValueAtTime(rnd2(1500,1900),t+0.012);o.frequency.exponentialRampToValueAtTime(700,t+0.035);og.gain.setValueAtTime(0.0001,t+0.012);og.gain.exponentialRampToValueAtTime(0.03*v*volMul,t+0.015);og.gain.exponentialRampToValueAtTime(0.0001,t+0.05);o.connect(og);og.connect(sfxG);o.onended=function(){o.disconnect();og.disconnect()};o.start(t+0.012);o.stop(t+0.07)}catch(e){}}
  /* the entrance: a bell arpeggio for the wand, then one long warp whoosh while the photos fly past */
  function bell(f,t,v,d){var c=fx,o=c.createOscillator(),o2=c.createOscillator(),g=c.createGain();o.type="sine";o2.type="sine";o.frequency.value=f;o2.frequency.value=f*2.76;var g2=c.createGain();g2.gain.value=0.22;
    g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(v,t+0.006);g.gain.exponentialRampToValueAtTime(0.0001,t+d);o.connect(g);o2.connect(g2);g2.connect(g);g.connect(fxG);o.start(t);o2.start(t);o.stop(t+d+0.05);o2.stop(t+d+0.05);o.onended=function(){o.disconnect();o2.disconnect();g2.disconnect();g.disconnect()}}
  /* the entrance wind: a gusting body of air, a low rumble under it and a thin whistle over it, drifting from ear to ear;
     plus a short swish for every picture that flies past the viewer */
  var ST=null,fxBrown=null;
  function brown(){if(fxBrown)return fxBrown;var sr=fx.sampleRate,b=fx.createBuffer(2,sr*3,sr);for(var ch=0;ch<2;ch++){var d=b.getChannelData(ch),l=0;for(var i=0;i<d.length;i++){l=(l+0.02*(Math.random()*2-1))/1.02;d[i]=l*3.5}}fxBrown=b;return b}
  function storm(){if(ST)return ST;var c=fx,t=c.currentTime,o={};
    o.n=c.createBufferSource();o.n.buffer=fxNoise;o.n.loop=true;o.b=c.createBufferSource();o.b.buffer=brown();o.b.loop=true;
    o.bp=c.createBiquadFilter();o.bp.type="bandpass";o.bp.Q.value=0.55;o.bp.frequency.value=420;o.g1=c.createGain();o.g1.gain.value=0;
    o.hs=c.createBiquadFilter();o.hs.type="highshelf";o.hs.frequency.value=3000;o.hs.gain.value=-8;
    o.wh=c.createBiquadFilter();o.wh.type="bandpass";o.wh.Q.value=16;o.wh.frequency.value=1100;o.g2=c.createGain();o.g2.gain.value=0;
    o.wh2=c.createBiquadFilter();o.wh2.type="bandpass";o.wh2.Q.value=22;o.wh2.frequency.value=1700;o.g2b=c.createGain();o.g2b.gain.value=0;
    o.lp=c.createBiquadFilter();o.lp.type="lowpass";o.lp.frequency.value=160;o.g3=c.createGain();o.g3.gain.value=0;
    function L(f,amt,dest){var x=c.createOscillator(),g=c.createGain();x.type="sine";x.frequency.value=f;g.gain.value=amt;x.connect(g);g.connect(dest);x.start(t);return [x,g]}
    o.l1=L(0.55,180,o.bp.frequency);o.l2=L(0.21,260,o.wh.frequency);o.l2b=L(0.33,340,o.wh2.frequency);
    /* gusts: the level of the body breathes */
    o.gust=c.createGain();o.gust.gain.value=1;o.l4=L(0.9,0.35,o.gust.gain);
    o.out=c.createGain();o.out.gain.value=1;
    o.pan=c.createStereoPanner?c.createStereoPanner():null;if(o.pan)o.l3=L(0.27,0.55,o.pan.pan);
    o.n.connect(o.bp);o.bp.connect(o.hs);o.hs.connect(o.g1);o.g1.connect(o.gust);
    o.n.connect(o.wh);o.wh.connect(o.g2);o.g2.connect(o.gust);o.n.connect(o.wh2);o.wh2.connect(o.g2b);o.g2b.connect(o.gust);
    o.b.connect(o.lp);o.lp.connect(o.g3);o.g3.connect(o.out);o.gust.connect(o.out);
    if(o.pan){o.out.connect(o.pan);o.pan.connect(fxG)}else o.out.connect(fxG);
    o.n.start(t,Math.random());o.b.start(t,Math.random()*2);ST=o;return o}
  function windTo(x,tc){x=Math.max(0,Math.min(1.2,x));var o=storm(),t=fx.currentTime;tc=tc||0.3;
    o.g1.gain.setTargetAtTime(0.16*x,t,tc);o.g3.gain.setTargetAtTime(0.22*x,t,tc);o.g2.gain.setTargetAtTime(0.05*x*x,t,tc*1.4);o.g2b.gain.setTargetAtTime(0.035*x*x*x,t,tc*1.6);
    o.bp.frequency.setTargetAtTime(330+1500*x,t,tc);o.wh.frequency.setTargetAtTime(850+1100*x,t,tc*1.5);o.wh2.frequency.setTargetAtTime(1300+1600*x,t,tc*1.5);
    o.l1[0].frequency.setTargetAtTime(0.5+2.6*x,t,tc);o.l4[0].frequency.setTargetAtTime(0.7+2.2*x,t,tc);o.l3&&o.l3[0].frequency.setTargetAtTime(0.25+1.1*x,t,tc)}
  function windEnd(fade){if(!ST)return;var o=ST,t=fx.currentTime;ST=null;fade=fade||0.5;
    [o.g1,o.g2,o.g2b,o.g3].forEach(function(g){g.gain.cancelScheduledValues(t);g.gain.setValueAtTime(g.gain.value,t);g.gain.linearRampToValueAtTime(0,t+fade)});
    setTimeout(function(){try{[o.n,o.b,o.l1[0],o.l2[0],o.l2b[0],o.l4[0]].concat(o.l3?[o.l3[0]]:[]).forEach(function(x){try{x.stop()}catch(_){}});o.out.disconnect()}catch(_){}},fade*1000+200)}
  /* the drone's own sound: four motors a few hertz apart (the beating is what makes it sound real), the blade-pass flutter,
     and the rush of air under the props; pitch and level follow the throttle, the stereo position follows the aircraft */
  var MO=null;
  function motorOn(){if(MO)return MO;var c=fx,t=c.currentTime,o={osc:[]};o.f=c.createBiquadFilter();o.f.type="lowpass";o.f.frequency.value=1400;o.f.Q.value=0.7;
    o.pk=c.createBiquadFilter();o.pk.type="peaking";o.pk.frequency.value=480;o.pk.Q.value=1.2;o.pk.gain.value=5;
    o.am=c.createGain();o.am.gain.value=0.75;o.g=c.createGain();o.g.gain.value=0;
    [0,6.5,13,19.5].forEach(function(d,i){var x=c.createOscillator();x.type=i%2?"sawtooth":"triangle";x.frequency.value=200+d;x.connect(o.f);x.start(t);o.osc.push(x)});
    o.flut=c.createOscillator();o.flut.frequency.value=420;var fg=c.createGain();fg.gain.value=0.25;o.flut.connect(fg);fg.connect(o.am.gain);o.flut.start(t);o.fg=fg;
    o.n=c.createBufferSource();o.n.buffer=fxNoise;o.n.loop=true;o.nf=c.createBiquadFilter();o.nf.type="bandpass";o.nf.frequency.value=700;o.nf.Q.value=0.7;o.ng=c.createGain();o.ng.gain.value=0.5;o.n.connect(o.nf);o.nf.connect(o.ng);o.ng.connect(o.am);o.n.start(t,Math.random());
    o.f.connect(o.pk);o.pk.connect(o.am);o.am.connect(o.g);o.p=c.createStereoPanner?c.createStereoPanner():null;if(o.p){o.g.connect(o.p);o.p.connect(fxG)}else o.g.connect(fxG);MO=o;return o}
  function motorTo(x,pan,tc){var o=motorOn(),t=fx.currentTime;x=Math.max(0,Math.min(1.3,x));tc=tc||0.15;
    o.g.gain.setTargetAtTime(0.045*Math.min(1,x*1.4),t,tc);o.osc.forEach(function(v,i){v.frequency.setTargetAtTime((170+[0,6.5,13,19.5][i])*(1+x*0.75),t,tc*1.4)});
    o.flut.frequency.setTargetAtTime(340*(1+x*0.75)*2,t,tc*1.4);o.f.frequency.setTargetAtTime(900+1400*x,t,tc);o.nf.frequency.setTargetAtTime(500+900*x,t,tc);
    if(o.p&&pan!=null)o.p.pan.setTargetAtTime(Math.max(-1,Math.min(1,pan)),t,0.08)}
  function motorEnd(fade){if(!MO)return;var o=MO,t=fx.currentTime;MO=null;fade=fade||0.4;o.g.gain.cancelScheduledValues(t);o.g.gain.setValueAtTime(o.g.gain.value,t);o.g.gain.linearRampToValueAtTime(0,t+fade);
    o.osc.forEach(function(v){v.frequency.setTargetAtTime(v.frequency.value*0.55,t,fade*0.6)});
    setTimeout(function(){try{o.osc.concat([o.flut,o.n]).forEach(function(v){try{v.stop()}catch(_){}});o.g.disconnect()}catch(_){}},fade*1000+200)}
  var lastSw=0;
  function swish(pan,v){var c=fx,t=c.currentTime;if(t-lastSw<0.06)return;lastSw=t;v=Math.max(0.2,Math.min(1,v||0.6));
    var s=c.createBufferSource();s.buffer=fxNoise;var f=c.createBiquadFilter();f.type="bandpass";f.Q.value=1.4;var f0=2600+Math.random()*1200;f.frequency.setValueAtTime(f0,t);f.frequency.exponentialRampToValueAtTime(f0*0.22,t+0.32);
    var g=c.createGain();g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.07*v,t+0.05);g.gain.exponentialRampToValueAtTime(0.0001,t+0.34);
    var p=c.createStereoPanner?c.createStereoPanner():null;s.connect(f);f.connect(g);if(p){p.pan.setValueAtTime(Math.max(-1,Math.min(1,pan||0)),t);p.pan.linearRampToValueAtTime(Math.max(-1,Math.min(1,(pan||0)*1.6)),t+0.3);g.connect(p);p.connect(fxG)}else g.connect(fxG);
    s.onended=function(){s.disconnect();f.disconnect();g.disconnect();if(p)p.disconnect()};s.start(t,Math.random()*0.5);s.stop(t+0.4)}
  function magic(k,a1,a2){try{if(!fxOn)return;fxInit();if(!fx)return;if(fx.state!=="running")fx.resume();var t=fx.currentTime+0.02;
    if(k==="motor"){motorTo(a1,a2);return}if(k==="motorEnd"){motorEnd(a1);return}if(k==="wind"){windTo(a1,a2);return}if(k==="windEnd"){windEnd(a1);return}if(k==="swish"){swish(a1,a2);return}
    if(k==="wand"){[1318.5,1568,1975.5,2349.3,2637,3136].forEach(function(f,i){bell(f,t+i*0.07,0.05-i*0.004,1.1)})}
    else if(k==="tap"){bell(523.25,t,0.06,1.6);bell(784,t+0.02,0.045,1.5);bell(1046.5,t+0.04,0.03,1.4)}
    else if(k==="warp"){var s=fx.createBufferSource();s.buffer=fxNoise;s.loop=true;var f=fx.createBiquadFilter();f.type="bandpass";f.Q.value=0.9;f.frequency.setValueAtTime(260,t);f.frequency.exponentialRampToValueAtTime(3200,t+1.6);f.frequency.exponentialRampToValueAtTime(900,t+2.1);
      var g=fx.createGain();g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(0.07,t+1.1);g.gain.exponentialRampToValueAtTime(0.0001,t+2.2);s.connect(f);f.connect(g);g.connect(fxG);s.start(t);s.stop(t+2.3);s.onended=function(){s.disconnect();f.disconnect();g.disconnect()}}
    else if(k==="land"){bell(392,t,0.05,1.8);bell(587.3,t+0.05,0.04,1.8);bell(784,t+0.1,0.035,1.9);bell(1174.7,t+0.15,0.025,2)}}catch(e){}}
  function wind(x){try{if(!fxOn||!fx||fx.state!=="running")return;var ctx=fx,noiseBuf=fxNoise,sfxG=fxG,volMul=1;x=Math.max(0,Math.min(1,x||0));var t=ctx.currentTime;
    if(!windSrc){if(x<0.05)return;windSrc=ctx.createBufferSource();windSrc.buffer=noiseBuf;windSrc.loop=true;windF=ctx.createBiquadFilter();windF.type="bandpass";windF.Q.value=0.7;windF.frequency.value=500;windG=ctx.createGain();windG.gain.value=0;windSrc.connect(windF);windF.connect(windG);windG.connect(sfxG);windSrc.start()}
    windG.gain.setTargetAtTime(0.018*x*x*volMul,t,0.12);windF.frequency.setTargetAtTime(380+x*1100,t,0.15);
    clearTimeout(windT);windT=setTimeout(function(){if(windG&&ctx)windG.gain.setTargetAtTime(0,ctx.currentTime,0.25)},180)}catch(e){}}
  function prime(){try{if(!ctx)build();if(ctx.state!=="running")ctx.resume();if(nap)setTimeout(idle,1500)}catch(e){}}
  function beat(){if(!ctx||!on)return -1;return Math.max(0,(ctx.currentTime-t0)/(60/BPM))}
  function levels(n){n=n||8;var out=[],i,k,b,hi,sum,lo=1,bins;if(!an||!on){for(i=0;i<n;i++)out.push(0);return out}an.getByteFrequencyData(anBuf);bins=anBuf.length*0.72;
    for(k=0;k<n;k++){hi=Math.max(lo+1,Math.round(Math.pow(bins,(k+1)/n)));sum=0;for(b=lo;b<hi;b++)sum+=anBuf[b];out.push(Math.min(1,Math.pow(sum/(hi-lo)/255,1.7)*(1.05+k*0.3)));lo=hi}return out}
  /* iPhone: the audio clock only runs once it has been started inside a real tap or key press, and the system can pause it at any time
     (a call, the app switcher, the lock screen: state "interrupted"). Any later tap anywhere wakes it up again. */
  function wake(){if(ctx&&on&&ctx.state!=="running"){try{var p=ctx.resume();if(p&&p.catch)p.catch(function(){})}catch(e){}}}
  ["touchend","pointerup","click","keydown"].forEach(function(ev){document.addEventListener(ev,function(){wake();fxWake()},{capture:true,passive:true})});
  /* leaving the page (another tab, the home screen, closing it): every voice is brought to silence within a few milliseconds
     before the audio is stopped. Stopping it mid-note, or the page being frozen while a note holds, is what leaves a long beep. */
  function hush(){try{if(ctx&&master){var t=ctx.currentTime;master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(master.gain.value,t);master.gain.linearRampToValueAtTime(0,t+0.012)}}catch(e){}
    try{if(fx&&fxG){var u=fx.currentTime;fxG.gain.cancelScheduledValues(u);fxG.gain.setValueAtTime(fxG.gain.value,u);fxG.gain.linearRampToValueAtTime(0,u+0.012)}if(windSrc){try{windSrc.stop()}catch(_){}windSrc=null}}catch(e){}
    try{if(ST)windEnd(0.01);if(MO)motorEnd(0.01)}catch(_){}clearInterval(timer);timer=null;
    setTimeout(function(){try{if(ctx&&ctx.state==="running")ctx.suspend()}catch(e){}try{if(fx&&fx.state==="running")fx.suspend()}catch(e){}},30)}
  function unhush(){try{if(fx&&fxG&&fxOn){fx.resume();fxG.gain.cancelScheduledValues(fx.currentTime);fxG.gain.setValueAtTime(1,fx.currentTime)}}catch(e){}
    if(!ctx||!on)return;try{ctx.resume();var t=ctx.currentTime;nextT=Math.max(nextT,t+0.08);master.gain.cancelScheduledValues(t);master.gain.setValueAtTime(0,t);master.gain.linearRampToValueAtTime(VOL*volMul,t+0.6);clearInterval(timer);timer=setInterval(loop,25)}catch(e){}}
  document.addEventListener("visibilitychange",function(){if(document.hidden)hush();else unhush()});
  window.addEventListener("pagehide",hush);window.addEventListener("pageshow",function(e){if(e.persisted&&!document.hidden)unhush()});
  window.addEventListener("freeze",hush,{capture:true});
  return {start:start,stop:stop,duck:duck,next:next,isOn:function(){return on},mood:function(){return phase+" \u00b7 "+key.n},beat:beat,levels:levels,prime:prime,blip:blip,flick:flick,wind:wind,setVolume:setVolume,volume:function(){return volMul},setLevel:setLevel,level:function(){return lvl},
    magic:magic,fx:function(v){fxOn=!!v;if(fxOn)fxWake();else if(fx){try{fx.suspend()}catch(e){}}},fxOn:function(){return fxOn},
    /* the DJ calls this the moment he comes on: seven seconds at full level counted from now, then a quick fade to the quiet background */
    stage:function(){if(!on||!ctx||!riseG)return;var rt=ctx.currentTime;try{
      /* the bar is restarted on the last bar of a build (snare roll, riser, no kick), so the drop lands exactly four beats later, when he hits the decks */
      step=0;bar=0;nextT=rt+0.06;startAt=nextT;t0=nextT;phase="build";plen=8;pb=6;skip=false;calm=true;
      if(riseG.gain.cancelAndHoldAtTime)riseG.gain.cancelAndHoldAtTime(rt);else riseG.gain.cancelScheduledValues(rt);riseG.gain.setTargetAtTime(1,rt,0.12);riseG.gain.setValueAtTime(1,startAt+SET);riseG.gain.setTargetAtTime(BG,startAt+SET,FT)}catch(_){}},
    state:function(){var f=0,tt=-1;if(on&&ctx){tt=ctx.currentTime-startAt;var e=tt-SET;f=e<=0?0:Math.min(1,1-Math.exp(-e/FT))}return{on:on,phase:phase,kick:kickOn,bpm:BPM,bar:bar,fade:f,t:tt,set:SET}}};
})();
/* ---------- the first page: a small, fast entrance. The gallery itself (styles, markup, script) is fetched in the background and
   switched on when the visitor reaches for the button, so the first paint never waits for it. ---------- */
(function(){
"use strict";
var $=function(s,r){return (r||document).querySelector(s)};
var canHover=window.matchMedia&&matchMedia("(hover:hover) and (pointer:fine)").matches;
function visit(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){return null}}
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function remember(){var t=String(Date.now());visit("og-in",t);store("og-in",t);try{if(!window.name||/^og-in:/.test(window.name))window.name="og-in:"+t}catch(e){}}
function lockScroll(on){var v=on?"hidden":"";document.documentElement.style.overflow=v;if(document.body)document.body.style.overflow=v}
var G=window.__GATE={gone:false,subs:[],app:false,hero:null,paint:null,onGone:function(f){G.subs.push(f)}};
var loadP=null,assetsP=null;
G.load=function(){
  if(loadP)return loadP;
  loadP=new Promise(function(res,rej){
    performance.mark("g:start");var cssP=new Promise(function(r){var l=document.createElement("link");l.rel="stylesheet";l.href="app.css";l.onload=function(){performance.mark("g:css");r()};l.onerror=function(){rej(new Error("css"))};document.head.appendChild(l)});
    var htmlP=fetch("app.html").then(function(r){if(!r.ok)throw new Error("html");return r.text()});
    Promise.all([cssP,htmlP]).then(function(a){
      performance.mark("g:fetched");intro.insertAdjacentHTML("afterend",a[1]);performance.mark("g:inserted");
      var ab=document.getElementById("a11yBtn");if(ab)ab.setAttribute("aria-label","Accessibility options");
      var s=document.createElement("script");s.src="app.js";s.async=false;
      s.onload=function(){performance.mark("g:js");G.app=true;res()};s.onerror=function(){rej(new Error("js"))};
      document.body.appendChild(s);
    },rej);
  });
  loadP.then(null,function(){loadP=null;var l=document.querySelector('link[href="app.css"]');if(l)l.remove()});
  return loadP;
};
/* the files for the page are fetched quietly once the first paint is long done, and at once when a finger or a mouse arrives */
function prefetch(){
  var list=["app.css","app.html","app.js"],i=0;
  G.assets();
  (function nx(){if(i>=list.length)return;fetch(list[i++]).then(function(r){return r.arrayBuffer()}).then(nx,nx)})();
}
function arm(){
  setTimeout(function(){
    var c=navigator.connection;if(c&&(c.saveData||/(^|-)2g$/.test(c.effectiveType||"")))return;
    (window.requestIdleCallback||function(f){return setTimeout(f,200)})(prefetch,{timeout:4000});
  },2500);
}
if(document.readyState==="complete")arm();else window.addEventListener("load",arm);
function warm(){G.assets();G.load().then(null,function(){})}
["pointerdown","touchstart","keydown","wheel","mousemove"].forEach(function(ev){window.addEventListener(ev,warm,{once:true,passive:true,capture:true})});

/* the accessibility button is on the first page; its panel belongs to the gallery, so the first press fetches it and then opens it */
(function(){
  var ab=document.getElementById("a11yBtn");if(!ab)return;
  function need(){return !G.app||(G.pending&&G.pending("a11y"))}
  function open(){G.load().then(function(){if(G.runLater)G.runLater("a11y");ab.classList.remove("hi");ab.click()},function(){ab.classList.remove("hi")})}
  ab.addEventListener("click",function(e){if(!need())return;e.stopImmediatePropagation();e.preventDefault();ab.classList.add("hi");open()},true);
  document.addEventListener("keydown",function(e){if(e.altKey&&(e.key==="a"||e.key==="A"||e.code==="KeyA")&&need()){e.preventDefault();e.stopImmediatePropagation();ab.classList.add("hi");open()}},true);
})();

/* ---------- entrance: "take me to Or's gallery" -> the arrow becomes Or's own drone -> it flies a lap and draws a ring of light ->
   it dives at the screen and leads the visitor through Or's photos and films -> the ring opens onto the real site.
   Everything moving is drawn on one canvas from one small image sheet: a phone carries a single layer and a single picture. */
var intro=$("#intro"),entered=false,leaving=false,introGone=false,gateOn=true,finishIntro,enter;
(function(){
var cv=$("#ptFx"),g2=null,running=false,appear=1,dpr=Math.min(canHover?2:1.5,window.devicePixelRatio||1),W=0,H=0;
var flashEl=$("#ptFlash"),goBtn=$("#gateGo"),arrowEl=$("#ptArrow");
var AT={kinds:[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],tw:320,th:200,cols:4},atlas=new Image(),atlasOK=false;
atlas.decoding="async";atlas.onload=function(){atlasOK=true};
function measure(){W=intro.clientWidth||window.innerWidth;H=intro.clientHeight||window.innerHeight;cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);g2.setTransform(dpr,0,0,dpr,0,0)}
window.addEventListener("resize",function(){if(running&&!introGone)measure()});
/* every card sits on its own ray around the middle and travels towards the viewer; films pan slowly inside their frame */
var N=AT.kinds.length,cards=[],ZF=7.5,STARS=[],motes=[];
for(var ci=0;ci<N;ci++){cards.push({k:ci,a:ci*2.39996+0.4,r:0.5+0.32*((ci*0.618)%1),z:1.2+(ci/N)*ZF,rot:(((ci*37)%11)-5)*0.9,ph:Math.random()*6.283})}
for(var si=0;si<110;si++)STARS.push({a:Math.random()*6.283,r:0.06+Math.random()*0.95,z:0.3+Math.random()*6});
for(var mi=0;mi<46;mi++)motes.push({x:Math.random(),y:Math.random(),s:0.4+Math.random()*1.6,p:Math.random()*6.283,v:0.004+Math.random()*0.012});
var spark=[],t0=performance.now(),tLast=t0,castAt=0,speed=0.16,vis=0.22,ringP=0,ringA=0,portal=0,hole=0,fast=false,tipX=0,tipY=0,spin=0,welOn=false;
function ease(p){p=p<0?0:p>1?1:p;return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2}
function easeOut(p){p=p<0?0:p>1?1:p;return 1-Math.pow(1-p,3)}
function lerp(a,b,p){return a+(b-a)*p}
function emit(x,y,n,pw,col,life){for(var i=0;i<n;i++){var an=Math.random()*6.283,sp=(20+Math.random()*120)*pw;spark.push({x:x,y:y,vx:Math.cos(an)*sp,vy:Math.sin(an)*sp-10,l:0,L:(life||0.7)*(0.6+Math.random()*0.8),r:0.8+Math.random()*2.2,c:col||(Math.random()<0.75?"255,214,140":"255,248,230")})}}
var bgG=null,bgW=0,bgH=0;
function backdrop(){if(!bgG||bgW!==W||bgH!==H){bgW=W;bgH=H;bgG=g2.createRadialGradient(W/2,H*0.44,0,W/2,H*0.44,Math.max(W,H)*0.75);bgG.addColorStop(0,"#13202d");bgG.addColorStop(0.55,"#0a1118");bgG.addColorStop(1,"#03060a")}g2.fillStyle=bgG;g2.fillRect(0,0,W,H)}
function drawCards(dt,t){
  var cx=W/2,cy=H/2,M=Math.min(W,H),F=M*0.52,order=[];spin+=dt*speed*0.035;
  for(var i=0;i<N;i++){var c=cards[i];c.z-=speed*dt;if(c.z<0.12)c.z+=ZF+0.6;order.push(c)}
  order.sort(function(a,b){return b.z-a.z});
  for(var j=0;j<order.length;j++){var c2=order[j],s=1/c2.z,w=F*0.95*s,h=w*AT.th/AT.tw,rad=c2.r*M*0.62*s,ang=c2.a+spin;
    var x=cx+Math.cos(ang)*rad,y=cy+Math.sin(ang)*rad*0.86,al=Math.min(1,(ZF+1.2-c2.z)/2)*Math.min(1,(c2.z-0.12)/0.45)*vis*appear;
    if(al<=0.01||x+w<-40||x-w>W+40||y+h<-40||y-h>H+40)continue;
    if(castAt&&speed>1.2&&!c2.sw&&c2.z<0.7&&w>M*0.55){c2.sw=1;ptSnd("swish",(x-cx)/(W/2),Math.min(1,w/(M*1.2)))}if(c2.z>2)c2.sw=0;
    var film=AT.kinds[c2.k];
    g2.save();g2.globalAlpha=al;g2.translate(x,y);g2.rotate((c2.rot*0.0174+(1/c2.z)*0.05*Math.sin(c2.a))*(1-portal*0.5));
    if(atlasOK){var k=c2.k,sx=(k%AT.cols)*AT.tw,sy=Math.floor(k/AT.cols)*AT.th;
      /* a film is shown moving: the frame drifts slowly across the picture */
      if(film){var pz=0.84,pw=AT.tw*pz,ph=AT.th*pz,ox=(AT.tw-pw)*(0.5+0.5*Math.sin(t*0.9+c2.ph)),oy=(AT.th-ph)*(0.5+0.5*Math.cos(t*0.7+c2.ph));g2.drawImage(atlas,sx+ox,sy+oy,pw,ph,-w/2,-h/2,w,h)}
      else g2.drawImage(atlas,sx,sy,AT.tw,AT.th,-w/2,-h/2,w,h)}
    else{g2.fillStyle="rgba(40,58,76,.9)";g2.fillRect(-w/2,-h/2,w,h)}
    g2.strokeStyle=film?"rgba(240,180,94,"+(0.7*al).toFixed(3)+")":"rgba(255,236,200,"+(0.35*al).toFixed(3)+")";g2.lineWidth=Math.max(1,w*(film?0.01:0.006));g2.strokeRect(-w/2,-h/2,w,h);
    if(film&&w>46){var pr=Math.min(w,h)*0.13;g2.fillStyle="rgba(10,14,18,.55)";g2.beginPath();g2.arc(0,0,pr,0,6.283);g2.fill();g2.fillStyle="rgba(255,255,255,.92)";g2.beginPath();g2.moveTo(-pr*0.32,-pr*0.48);g2.lineTo(pr*0.55,0);g2.lineTo(-pr*0.32,pr*0.48);g2.closePath();g2.fill();
      /* REC and a running time code in the corner, like a camera screen */
      if(w>110){var fs=Math.max(8,w*0.045);g2.font="700 "+fs.toFixed(1)+"px ui-monospace,Menlo,monospace";g2.textBaseline="top";g2.fillStyle=Math.sin(t*6+c2.ph)>0?"rgba(255,80,70,.95)":"rgba(255,80,70,.35)";g2.beginPath();g2.arc(-w/2+fs*1.1,-h/2+fs*1.05,fs*0.32,0,6.283);g2.fill();
        g2.fillStyle="rgba(255,255,255,.88)";var sec=Math.floor(t+c2.ph*3)%60;g2.fillText("REC 00:"+(sec<10?"0":"")+sec,-w/2+fs*1.7,-h/2+fs*0.55)}}
    g2.restore()}
}
function drawStars(dt){
  var cx=W/2,cy=H/2,M=Math.max(W,H),k=Math.min(1,speed/5);if(k<0.02)return;
  g2.globalCompositeOperation="lighter";g2.lineCap="round";
  for(var i=0;i<STARS.length;i++){var s=STARS[i],z1=s.z;s.z-=speed*dt*0.9;if(s.z<0.08){s.z+=6;continue}
    var r1=s.r*M*0.5/z1,r2=s.r*M*0.5/s.z,a=Math.min(1,(6-s.z)/2)*k*0.85;
    g2.strokeStyle="rgba(255,"+(220+Math.round(35*s.r))+",190,"+a.toFixed(3)+")";g2.lineWidth=0.6+0.4/s.z;
    g2.beginPath();g2.moveTo(cx+Math.cos(s.a)*r1,cy+Math.sin(s.a)*r1);g2.lineTo(cx+Math.cos(s.a)*(r2+12*k),cy+Math.sin(s.a)*(r2+12*k));g2.stroke()}
  g2.globalCompositeOperation="source-over"}
function drawMotes(t){var f=1-portal;if(f<=0.01)return;g2.globalCompositeOperation="lighter";for(var i=0;i<motes.length;i++){var m=motes[i];m.y-=m.v*0.016;if(m.y<-0.02)m.y=1.02;var a=(0.25+0.25*Math.sin(t*1.7+m.p))*f;g2.fillStyle="rgba(255,214,140,"+a.toFixed(3)+")";g2.beginPath();g2.arc(m.x*W+Math.sin(t*0.6+m.p)*8,m.y*H,m.s,0,6.283);g2.fill()}g2.globalCompositeOperation="source-over"}
function drawSparks(dt){g2.globalCompositeOperation="lighter";var f=Math.pow(0.93,dt*60);
  for(var i=spark.length-1;i>=0;i--){var p=spark[i];p.l+=dt;if(p.l>=p.L){spark.splice(i,1);continue}p.vx*=f;p.vy=p.vy*f+30*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;var a=1-p.l/p.L;
    g2.fillStyle="rgba("+p.c+","+(a*0.95).toFixed(3)+")";g2.beginPath();g2.arc(p.x,p.y,p.r*(0.6+a*0.6),0,6.283);g2.fill()}
  if(spark.length>420)spark.splice(0,spark.length-420);
  g2.globalCompositeOperation="source-over"}
function drawRing(t){if(ringA<=0.01)return;var cx=W/2,cy=H/2,R=Math.min(W,H)*0.3*(1+portal*3.2),a0=-1.5708,a1=a0+ringP*6.283;
  g2.globalCompositeOperation="lighter";
  a0=1.5708;a1=a0+ringP*6.283;[[18,0.09],[9,0.2],[3.2,0.9]].forEach(function(l){g2.strokeStyle="rgba(255,214,140,"+(l[1]*ringA).toFixed(3)+")";g2.lineWidth=l[0]*(1+portal);g2.beginPath();g2.ellipse(cx,cy-Math.min(W,H)*0.02,R*1.05,R*0.62*(1+portal*0.6),0,a0,a1);g2.stroke()});
  if(ringP>=1){
    /* the finished ring: two bands of runes turning in opposite directions */
    g2.strokeStyle="rgba(159,210,238,"+(0.45*ringA).toFixed(3)+")";g2.lineWidth=1.3;g2.setLineDash([4,10]);g2.lineDashOffset=-t*40;g2.beginPath();g2.ellipse(cx,cy-Math.min(W,H)*0.02,R*0.9,R*0.53*(1+portal*0.6),0,0,6.283);g2.stroke();
    g2.setLineDash([1,14]);g2.lineDashOffset=t*60;g2.lineWidth=3;g2.strokeStyle="rgba(255,214,140,"+(0.6*ringA).toFixed(3)+")";g2.beginPath();g2.ellipse(cx,cy-Math.min(W,H)*0.02,R*1.18,R*0.72*(1+portal*0.6),0,0,6.283);g2.stroke();g2.setLineDash([])}
  g2.globalCompositeOperation="source-over"}
/* the ring opens onto the site itself: a hole in the canvas, with a golden rim */
function drawHole(){if(hole<=0)return;var cx=W/2,cy=H/2,R=hole*Math.hypot(W,H)*0.56,f=Math.max(8,R*0.12);
  g2.globalCompositeOperation="destination-out";var gr=g2.createRadialGradient(cx,cy,Math.max(0,R-f),cx,cy,R);gr.addColorStop(0,"rgba(0,0,0,1)");gr.addColorStop(1,"rgba(0,0,0,0)");g2.fillStyle=gr;g2.beginPath();g2.arc(cx,cy,R,0,6.283);g2.fill();
  g2.globalCompositeOperation="lighter";g2.strokeStyle="rgba(255,214,140,"+(0.8*(1-hole)).toFixed(3)+")";g2.lineWidth=4+10*(1-hole);g2.beginPath();g2.arc(cx,cy,R,0,6.283);g2.stroke();g2.globalCompositeOperation="source-over"}
/* Or's own aircraft (twelve real frames of it in flight) carries the visitor in */
var drImg=new Image(),drOK=false;drImg.onload=function(){drOK=true};
var DR={x:0,y:0,s:0,r:0,a:0,flip:1,fr:0},A0={x:0,y:0},cued={},lastX=0;
function drawDrone(t){if(DR.a<=0.01||DR.s<=0.01||!drOK)return;var M=Math.min(W,H),dw=Math.min(M*0.8,520)*DR.s,dh=dw/2,k=Math.floor(t*26)%22,f=k<12?k:22-k,sx=(f%4)*(drImg.naturalWidth/4),sy=Math.floor(f/4)*(drImg.naturalHeight/3);
  g2.save();g2.globalAlpha=DR.a*0.8;var sh=g2.createRadialGradient(DR.x,DR.y,0,DR.x,DR.y,dw*0.62);sh.addColorStop(0,"rgba(4,7,11,.75)");sh.addColorStop(1,"rgba(4,7,11,0)");g2.fillStyle=sh;g2.fillRect(DR.x-dw*0.7,DR.y-dh*1.2,dw*1.4,dh*2.4);g2.restore();
  g2.save();g2.globalAlpha=DR.a*0.6;g2.globalCompositeOperation="lighter";var gl=g2.createRadialGradient(DR.x,DR.y+dh*0.25,0,DR.x,DR.y+dh*0.25,dw*0.55);gl.addColorStop(0,"rgba(255,226,170,.8)");gl.addColorStop(1,"rgba(255,226,170,0)");g2.fillStyle=gl;g2.fillRect(DR.x-dw*0.6,DR.y-dh,dw*1.2,dh*2.2);g2.restore();
  g2.save();g2.globalAlpha=DR.a;g2.translate(DR.x,DR.y);g2.rotate(DR.r);g2.scale(DR.flip,1);g2.drawImage(drImg,sx,sy,drImg.naturalWidth/4,drImg.naturalHeight/3,-dw/2,-dh/2,dw,dh);
  /* navigation lights blinking under the arms */
  if(Math.sin(t*9)>0.2){g2.globalCompositeOperation="lighter";g2.fillStyle="rgba(255,70,60,.9)";g2.beginPath();g2.arc(-dw*0.36,dh*0.12,Math.max(1.5,dw*0.012),0,6.283);g2.fill();g2.fillStyle="rgba(80,255,140,.9)";g2.beginPath();g2.arc(dw*0.36,dh*0.1,Math.max(1.5,dw*0.012),0,6.283);g2.fill()}
  g2.restore()}
function cue(k,fn){if(!cued[k]){cued[k]=1;fn()}}
function ptSnd(k,a,b){if(window.OBMusic&&OBMusic.magic)OBMusic.magic(k,a,b)}
var TAP=2.0;
function frame(now){
  if(introGone)return;var dt=Math.min(0.05,(now-tLast)/1000);tLast=now;var t=(now-t0)/1000;appear=Math.min(1,t/0.45);
  g2.globalAlpha=1;backdrop();
  if(castAt){var T=(now-castAt)/1000,cx=W/2,cy=H/2,M=Math.min(W,H),R=M*0.3,px=DR.x;
    /* 0 - .7 s: the arrow becomes the aircraft: it spins up on the button and lifts off */
    if(T<0.7){var p=easeOut(T/0.7);DR.x=lerp(A0.x,cx,p);DR.y=lerp(A0.y,cy+R*0.62,p)-Math.sin(p*3.14)*M*0.12;DR.s=lerp(0.18,0.95,p);DR.a=Math.min(1,T*6);DR.r=Math.sin(T*9)*0.05*(1-p);
      if(T<0.25)emit(A0.x,A0.y,3,0.9,"159,210,238",0.6);cue("lift",function(){emit(A0.x,A0.y,46,1.6,null,0.9)})}
    /* .7 - 1.75 s: one lap around the middle, a ribbon of light streaming from under it */
    else if(T<1.75){var q=(T-0.7)/1.05,e=ease(q),th=1.5708+e*6.283;DR.x=cx+Math.cos(th)*R*1.05;DR.y=cy+Math.sin(th)*R*0.62-M*0.02;DR.s=0.72+0.26*Math.sin(th);DR.a=1;
      ringP=e;ringA=1;vis=lerp(0.22,0.45,e);emit(DR.x,DR.y+M*0.05*DR.s,4,0.45,null,1.1)}
    /* 1.75 - 2.0 s: it climbs, turns to the viewer and dives straight at the screen */
    else if(T<TAP){var r=(T-1.75)/(TAP-1.75),e2=r*r;DR.x=lerp(cx,cx,r);DR.y=lerp(cy+R*0.62-M*0.02,cy-M*0.04,easeOut(r));DR.s=lerp(0.98,3.4,e2);DR.a=1-Math.max(0,(r-0.7)/0.3);DR.r=0;ringP=1}
    /* the tunnel: far ahead in the middle, leading the way */
    else if(T<3.45){var u=(T-TAP)/(3.45-TAP);DR.x=cx+Math.sin(T*2.1)*M*0.03;DR.y=cy+M*0.2+Math.sin(T*3.3)*M*0.02;DR.s=lerp(0.85,0.62,u);DR.a=Math.min(1,Math.max(0,(T-TAP-0.25)/0.35));DR.r=Math.sin(T*2.1)*0.08}
    /* into the opening ring and gone */
    else{var v=Math.min(1,(T-3.45)/0.45);DR.s=lerp(0.62,0.02,ease(v));DR.a=1-v;DR.y=lerp(cy+M*0.2,cy,ease(v))}
    var vx=DR.x-px;if(T>0.7&&T<1.75){if(Math.abs(vx)>0.3)DR.flip=vx>0?-1:1;DR.r=Math.max(-0.22,Math.min(0.22,vx*0.035))}else if(T>=TAP)DR.flip=1;
    /* sound: the motors follow the throttle and the side of the screen the aircraft is on */
    var pan=(DR.x-cx)/(W/2);
    if(now-lastX>60){lastX=now;if(T<0.7)ptSnd("motor",0.25+0.55*T/0.7,pan);else if(T<1.75)ptSnd("motor",0.62+0.12*Math.sin((T-0.7)*6),pan);else if(T<TAP)ptSnd("motor",1.15,0);else if(T<3.45)ptSnd("motor",0.85,pan*0.5);}
    if(T>TAP){cue("tap",function(){emit(cx,cy,110,2.6,null,1.2);emit(cx,cy,40,1.2,"159,210,238",0.9);flashEl.style.transition="none";flashEl.style.opacity="0.95";requestAnimationFrame(function(){flashEl.style.transition="opacity .8s ease";flashEl.style.opacity="0"});cv.classList.remove("shake");void cv.offsetWidth;cv.classList.add("shake");ptSnd("tap");ptSnd("wind",0.6,0.25)})}
    /* the ring widens and the photos and films rush past, faster and faster */
    var w2=Math.max(0,Math.min(1,(T-TAP)/1.75));if(T>TAP){portal=ease(Math.min(1,w2*1.4));speed=lerp(0.5,10,Math.pow(w2,1.5));vis=lerp(0.45,1,Math.min(1,w2*3));ringA=Math.max(0,1-w2*1.7)}
    if(T>TAP+0.3&&!welOn){welOn=true;intro.classList.add("wel")}
    if(T>TAP+0.55)cue("gale",function(){ptSnd("wind",1.05,0.45)});if(T>0.7&&T<TAP)cue("breeze",function(){ptSnd("wind",0.22,0.5)});
    /* the ring opens onto the gallery itself */
    if(T>3.45){hole=ease(Math.min(1,(T-3.45)/0.85));cue("land",function(){ptSnd("land");ptSnd("motorEnd",0.6);ptSnd("wind",0.35,0.22);setTimeout(function(){ptSnd("windEnd",0.7)},420);intro.classList.remove("wel")})}
    if(T>4.3&&!leaving){leaving=true;finishIntro()}
  }else speed+=(0.16-speed)*Math.min(1,dt*2);
  var behind=castAt&&(now-castAt)/1000<1.75&&(now-castAt)/1000>0.7&&DR.s<0.72;
  drawCards(dt,t);drawStars(dt);drawMotes(t);if(behind)drawDrone(t);drawRing(t);drawSparks(dt);if(!behind)drawDrone(t);drawHole();
  requestAnimationFrame(frame);
}
finishIntro=function(){if(introGone)return;ptSnd("windEnd",0.4);ptSnd("motorEnd",0.3);introGone=true;gateOn=false;intro.classList.add("gone");intro.setAttribute("aria-hidden","true");try{cv.width=cv.height=1}catch(_){}atlas.src="";drImg.src="";spark.length=0;lockScroll(false);G.gone=true;for(var gi=0;gi<G.subs.length;gi++){try{G.subs[gi]()}catch(_){}}};
lockScroll(true);
var still=(function(){try{return localStorage.getItem("og-still")==="1"}catch(e){return false}})();
intro.classList.add("ready");
/* the show: nothing is drawn until the visitor taps */
function start(){
  if(running||still)return;running=true;g2=cv.getContext("2d");measure();
  t0=performance.now();tLast=t0;backdrop();intro.classList.add("cvbg");requestAnimationFrame(frame);
}
/* the picture sheets for the show (cards and Or's drone) */
G.assets=function(){
  if(assetsP)return assetsP;
  assetsP=new Promise(function(res){
    if(still){res();return}
    var n=2,tm=setTimeout(res,3500);
    function one(){if(--n===0){clearTimeout(tm);res()}}
    function ld(im,src){var o=im.onload;im.onload=function(){if(o)o();one()};im.onerror=one;if(!im.getAttribute("src")){im.src=src}else if(im.complete){im.onload()}}
    ld(atlas,"media/intro.webp");ld(drImg,"media/mini.webp");
  });
  return assetsP;
};
function play(){
  intro.classList.remove("pt-wait");goBtn.removeAttribute("aria-busy");
  if(G.hero)G.hero();
  if(still||introGone){intro.style.transition="opacity .35s";intro.style.opacity="0";setTimeout(finishIntro,380);return}
  start();
  /* the aircraft starts exactly where the arrow is */
  var ar=arrowEl.getBoundingClientRect(),ir=intro.getBoundingClientRect();A0.x=ar.left-ir.left+ar.width/2;A0.y=ar.top-ir.top+ar.height/2;DR.x=A0.x;DR.y=A0.y;
  intro.classList.add("cast");castAt=performance.now();
  ptSnd("motor",0.2,(A0.x-W/2)/(W/2));
  setTimeout(function(){if(!introGone)finishIntro()},7500);
}
enter=function(withMusic){
  if(entered){if(castAt&&!fast){fast=true;if(performance.now()-castAt<3450)castAt=performance.now()-3450}return}
  entered=true;remember();
  /* sound has to start inside the tap itself */
  if(withMusic&&window.OBMusic&&store("og-music")!=="off"){try{OBMusic.start();if(G.paint)G.paint()}catch(_){}}
  intro.classList.add("pt-wait");goBtn.setAttribute("aria-busy","true");
  Promise.all([G.load(),G.assets()]).then(play,function(){
    /* the page files did not arrive: the button works again */
    intro.classList.remove("pt-wait");goBtn.removeAttribute("aria-busy");entered=false;
  });
};
G.enter=enter;G.finish=finishIntro;
goBtn.addEventListener("click",function(e){e.stopPropagation();enter(true)});
intro.addEventListener("click",function(e){if(e.target.closest&&e.target.closest(".lang,a"))return;enter(true)});
document.addEventListener("keydown",function(e){if(introGone)return;if(e.key==="Escape"){enter(false);return}if(!entered&&(e.key==="Enter"||e.key===" ")&&!(e.target.closest&&e.target.closest(".lang,a,.a11y,.a11y-btn"))){e.preventDefault();enter(true)}});
if(canHover)setTimeout(function(){if(!entered&&!introGone)try{goBtn.focus({preventScroll:true})}catch(_){}},1400);
/* the language switch works on the first page before the gallery exists; the gallery then follows the saved choice */
intro.addEventListener("click",function(e){
  var b=e.target.closest&&e.target.closest(".lang button");if(!b||G.app)return;
  var l=b.getAttribute("data-lang")==="en"?"en":"he";store("og-lang",l);if(window.__gateLang)window.__gateLang(l);
});
})();

})();

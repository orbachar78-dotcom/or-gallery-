
(function(){
"use strict";
var PHOTOS=[{"id":"m0105","c":"mc","W":2400,"H":1809,"w":900,"h":678,"alt":54,"pitch":-12,"time":"17:45","date":"01.06.2026","bg":"#6A7A8B","lq":"UklGRrIAAABXRUJQVlA4IKYAAADQBACdASoYABIAPulmrU+pJaQiKAqpIB0JQBkTAeHcEqH7dwwS8mDcz0LhEUZJwADaXt4Wm5rBjFZ9HzX3IRPw7K8jV7pG07nFnnl6YU7MD5MZrlM/nym8/8w8m+ts8UeIk6jJUStfOP0l8wLpqrZGl7P6prECt7s8LL86Z+l7F5G1yGzK250Zsr2lLhaUk8xqpyiIcrUFhNvise9yK0YM0iZuDwAA"},{"id":"e0001","c":"e","W":2400,"H":1350,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":"25.08.2026","bg":"#62676C","lq":"UklGRnQAAABXRUJQVlA4IGgAAACwAwCdASoYAA0APulep00pJSOiMAgBIB0JQBOgA3BBZR+19pL0gAD3rGfr+79gBNwXMPTsXxdiVUDoDv2eJKOqBLGn+l4sZ3dQamz/oJP8jVa733beNnMLUv35VlCZvxxQHnj1AXigAA=="},{"id":"m0098","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":6,"pitch":3,"time":"17:42","date":"01.06.2026","bg":"#7B7A7C","lq":"UklGRpAAAABXRUJQVlA4IIQAAABQBACdASoYAA0APuliqU2pJaQiMAgBIB0JYwBTAAfZ96hRya7oVNw/B1UAAP5Kaj7WirAg1tC2acjBzr03fRjEGFktH3PXo8sq4UBqb4Mevh9lOAs0rozVy+pCpvgmlZ/3iTQDocK44OxJIEuQLI9YtCxPDgHcW4YrbKkoaRAx5uEjIAA="},{"id":"w0003","c":"w","W":2160,"H":1214,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":null,"bg":"#4E4E3B","lq":"UklGRngAAABXRUJQVlA4IGwAAACwAwCdASoYAA0APulgqE0pJaQiMAgBIB0JQAALf8n/ILkUEtbBoAD+7suA1uK/JPBd5tA42C2/Lsz7r35cM5dXYfwPfTc614QAMDIuZ/BRD/5rM4mOKEo6Tqn/VGeWBi/wjsM8CDxkACZLAAA="},{"id":"g0131","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":113,"pitch":-30,"time":"13:35","date":"17.09.2026","bg":"#6D665F","lq":"UklGRnQAAABXRUJQVlA4IGgAAAAQBACdASoYAA0APuleqE0pJSQiMAgBIB0JQBYdg23zyNvGYTY4Nm7QAADpWLr/Iqt5TaL1wF17AHFtcldhsFjrzaoXXOf87URC2WMHxeHo/JjCVW4cFTyrCCnm62SY65qaUcy0nwGgAA=="},{"id":"r0092","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":6,"pitch":2,"time":"14:38","date":"09.09.2026","bg":"#67635B","lq":"UklGRpQAAABXRUJQVlA4IIgAAAAQBACdASoYAA0APulgqE2pJaQiMAgBIB0JQBWHf9gNk3PelAU/re5XgAD+FNVu4ZMMf9HJ7Nc8ZR9hDNKlU0VvOHORi48t59IFoeGnujWos0cXjY/Au0iJOd6Lnj/xhnFXOzJkuv187y7qiS4/90YwKYpYk9kLWmLRcMHaIWtZI0jTfysEB0AA"},{"id":"b0005","c":"b","W":1280,"H":720,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":null,"bg":"#606362","lq":"UklGRpQAAABXRUJQVlA4IIgAAADQAwCdASoYAA0APulgqE0pJaOiMAgBIB0JYwCdIFzChiU211iWCUwA/lXhSvriSFdq5UpDDa8gs63GRYAO3ER1djdb1DoG5vJZC29s/XEPlQq0sQsjhhvZSDyDJMrMUgF99shUF2CYx1PBOTIdYyxnAMqD8KX6c9H+TH9iI4IWCOxjPkqT+wAA"},{"id":"s0005","c":"s","W":2400,"H":1350,"w":900,"h":506,"alt":45,"pitch":-13,"time":"18:27","date":"21.09.2026","bg":"#42607B","lq":"UklGRnIAAABXRUJQVlA4IGYAAABQBACdASoYAA0APulgqE2pJaQiMAgBIB0JZACdLwDs/wG2G78sS+l/5MOYAPyO7rFvxcfdqAM08fJL14rppr0YV46VepU7tdLnX7CujXUSvorRiGZqEbMkguZcVIrlOe7ExAAAAAA="},{"id":"m0053","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":19,"pitch":-57,"time":"16:43","date":"01.06.2026","bg":"#7E7C78","lq":"UklGRpYAAABXRUJQVlA4IIoAAABwAwCdASoYAA0APulgqE0pJaOiMAgBIB0JZQDImywBo1QprHwA/s8TRclLBMS9ios88VMu00ocHZVbJ73pLDE4KdkABhpxBXXKpTRrydWYXtTWssVZy8q4pgjmd6nmqAqbiyGnMzEAphlearLxdO22bz9seyF6VXXSLfgHopkn82v4XH8f/HqK6AA="},{"id":"c0003","c":"c","W":1280,"H":720,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":null,"bg":"#828488","lq":"UklGRoIAAABXRUJQVlA4IHYAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JZQC7ACB/9qzCTFk1xSAA/q+YJzgJ9Eevtk/bHjeqMEvda8rOuMpx1TginxgrNzDZvkY5tSRzOL9C3XEYzXIFbPGCEQVY295CSjQpExLnBNPRCxvheXiKg0LsAAAA"},{"id":"a0223","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":49,"pitch":-16,"time":"15:22","date":"17.09.2026","bg":"#777974","lq":"UklGRnAAAABXRUJQVlA4IGQAAADQAwCdASoYAA0APulgqE2pJaQiMAgBIB0JYwC06B6Ccl6yhFcwZIAAzIhp4aCYPnyoBkEH1MOKTPsB56xrpL53rLRnWegJ0LxljDhF6BVYIqkuSZX+fDHpzF4ASkWIKJhtkAAA"},{"id":"r0148","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":4,"pitch":11,"time":"15:19","date":"09.09.2026","bg":"#6D6D6E","lq":"UklGRowAAABXRUJQVlA4IIAAAADQAwCdASoYAA0APulgqU2pJaQiMAgBIB0JZgCdAAqajD20rFJ17QAAzinxNhz89uwi7ZqcrT9pCdWaOcWX1i6Z3OQiKU3z/FaEsZj3Chd/bFrh4wqQPuei+ZEwgsjaFNLdcohDMF717sABm043KEq3xrdRZiFqVEqP8nkzqnoAAA=="},{"id":"pano1","c":"pano","W":3200,"H":2253,"w":900,"h":634,"alt":null,"pitch":null,"time":"10:56","date":"08.02.2026","city":true,"bg":"#7C8182","lq":"UklGRq4AAABXRUJQVlA4IKIAAADQBACdASoYABEAPulqqVCpJaOiqAqpIB0JZQDMHywAvsta25rplwqPUVoDbNBWqgD+tafAYvCcAaj5I85j6OFpz//7wQj1As/Gy8BG3modaKpAIDpZioUpsaytH7HilgUxWvuxDIyUIBrz36hRHv593ET5NjQJf5WaJLZbipgieDlaYFaBZamn8lkD+yXf4ZV4Yf4wCh8CqRcFn71T7wEKoAA="},{"id":"e0002","c":"e","W":2400,"H":1350,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":"25.08.2026","bg":"#4C5F77","lq":"UklGRmwAAABXRUJQVlA4IGAAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JQBYi9/jgAw6Yz8T9tAAA/uVeR//3O480B/x5iq6f+rnJYWEJ4FKZeOCLClpknyku1HnfUDSa0BYVF/Q8gp17uppCScgYAAA="},{"id":"m0041","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":14,"pitch":-8,"time":"16:39","date":"01.06.2026","bg":"#6B6B6E","lq":"UklGRpAAAABXRUJQVlA4IIQAAAAQBACdASoYAA0APulep00pJSOiMAgBIB0JZwDDNCDVdO949YZIcB2gAAD2oop3CC3bTXGYwBTCcBEBpD05AEgQ2AwTnpu3NyMe44MHI+VFL45p05ICXjTG/XE2OKf5MMHV7MBpvFqOirNkktov7losYZWYcOvutCUC291p+Dji0LtIAAA="},{"id":"g0171","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":1,"pitch":-9,"time":"13:58","date":"17.09.2026","bg":"#7C7872","lq":"UklGRqgAAABXRUJQVlA4IJwAAAAQBACdASoYAA0APulgqE0pJaQiMAgBIB0JQBOmUABk8RjTbqR/OM8BwAD3SL9a9xzaRNvuvMLKp1AMN8Y85aJo+6CTc/qX6ka3RR1JSGGLPXTVIT4kCI5JfS3yqdk7vweauN1iPpBIciQqqM7RXQ6NuIhaws53Yr8GN664CsvhKgiIxvl06TnRyWs2GF4zL89AgLQ4eeeVLb91KAA="},{"id":"s0003","c":"s","W":2400,"H":1350,"w":900,"h":506,"alt":29,"pitch":-8,"time":"18:24","date":"21.09.2026","bg":"#4C6B85","lq":"UklGRmgAAABXRUJQVlA4IFwAAAAQBACdASoYAA0APulgqE2pJaQiMAgBIB0JQBOmUI+PBTK4dchWwkZ6QAD8ZuU3clczK9lIo+4vXxsf/bTAUi56HklZmXLspx4KdjXX6CpwjOYuvAvwQIOPjAAAAA=="},{"id":"r0169","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":8,"pitch":0,"time":"16:05","date":"09.09.2026","bg":"#635D56","lq":"UklGRoYAAABXRUJQVlA4IHoAAAAQBACdASoYAA0APulgqE0pJaOiMAgBIB0JYwCuHCBYA0daXRV1QQxfAADLMKdaswUd4dNExBhn/xNe1oT0zC2nJJr/NTyUgD9F+wfVzLVJ8erQTkx8JA5VbGhnuiDEBbvNfcyZ/Yx6+mD4sRVqaSgoGdcv+LHJDAAAAA=="},{"id":"w0005","c":"w","W":2160,"H":1214,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":null,"bg":"#67696B","lq":"UklGRqAAAABXRUJQVlA4IJQAAACwAwCdASoYAA0APulgp00pJaOiMAgBIB0JQBWABA5JO7So7K4DAAD+5fpJjZHQLqO5REOVN78SNZEUsdQtYffzoQjTWm3XszJRS0lqWgmhaaOjErEY+mSP8OiwbpeVDZncw+5qLs3tudJ9qK/n6khMdaG0xK/o92q8UlpThFQQMS2KWTFIQrEvaQ+REkeiLflOAAAA"},{"id":"a0253","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":59,"pitch":-90,"time":"15:30","date":"17.09.2026","bg":"#857E74","lq":"UklGRoAAAABXRUJQVlA4IHQAAACwAwCdASoYAA0APulep00pJSOiMAgBIB0JZQCdABgt8gvB3oekAAD1x1lpk15SL1Hd/oOoRqdJYNLABkJpkcfEEaEU27mgQxXQiaQVDwmiXPvJOpo7XKP311DdWV/qAWw17gcK1fyd9nDr6ZkTMcI5liAAAA=="},{"id":"m0109","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":7,"pitch":-1,"time":"18:01","date":"01.06.2026","bg":"#68686D","lq":"UklGRpoAAABXRUJQVlA4II4AAAAwBACdASoYAA0APulgqE2pJaQiMAgBIB0JYwC7MoACwPaKaxs9ddJxKQAA/cC/ZztTxCIiTbUF4Z9lIfiZzVUYXOVmmr9ybzrv1bDAXx8K0gdtxe7bYt+5PojplFwaADZaWUGlW7jEcrQzVPS3OakER4r9gxfbxkhTuPjxsc2+lv/f5NsKMKL8rett8x4A"},{"id":"c0007","c":"c","W":1280,"H":720,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":null,"bg":"#8F8C8C","lq":"UklGRpgAAABXRUJQVlA4IIwAAADQAwCdASoYAA0APuleqE0pJSQiMAgBIB0JQBZwBDzm8bMy7KAUVQgA/pGouGpQhIH4KA+Ap/y3wrYBSaNu9XExhNEKoHRUuZXveSLW52KtmewSvK82XSBtk79OLvjtZyTGf9f2tkG4993BkrpI3rthHkDMP0Q8AR/4rLJ5enF9ogu0T5zRf4lnLGGQAA=="},{"id":"q0722","c":"h","W":2400,"H":1350,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":"11.02.2026","bg":"#798080","lq":"UklGRoIAAABXRUJQVlA4IHYAAAAQBACdASoYAA0APulgqU2pJaQiMAgBIB0JQBOkHPk/wIB9QhIKC2J0jAD+VJyICMNClhXK0V5sw6VcAdzBhcOTWTJbDQOBxXpkmab32AmXtBSLwJMssmjQYaoR8q49212QABXaZA+SBMcxvbiGDvnfl438GAAA"},{"id":"r0036","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":13,"pitch":-20,"time":"14:30","date":"09.09.2026","bg":"#6D695F","lq":"UklGRpIAAABXRUJQVlA4IIYAAADwAwCdASoYAA0APuleqE0pJSQiMAgBIB0JZQDA3BVYXdNjw91X0k6AAP7p6wdEZVP27I/tMskKWxH8S/LiZ0UC4L6/3osG5fYmUE0YnR+5ziz72Q4dpZYDhqVXSNY65aXwcbd7sE+3uInLZhf7fs3WuaEhYvtth5oyuh47PuBmANnwfAAAAA=="},{"id":"m0068","c":"mc","W":2400,"H":1350,"w":900,"h":506,"alt":47,"pitch":-20,"time":"17:06","date":"01.06.2026","bg":"#6A6A6D","lq":"UklGRpAAAABXRUJQVlA4IIQAAADQAwCdASoYAA0APulgqE2pJaOiMAgBIB0JZQAAUpg16glblDuMHyAA/h9Sd2XDndTWQtwI7ZgTOaLA5FlFwpuMbl+Az9997RcRf4M3V0J8kL4/tycVdWvJuRiWNOb7+gEEkbMphzNQcMln6/HnytBUrF40XhXDvx0Jv/Lc5UFAjvwAAAA="},{"id":"g0134","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":90,"pitch":-21,"time":"13:36","date":"17.09.2026","bg":"#6C675E","lq":"UklGRmoAAABXRUJQVlA4IF4AAADQAwCdASoYAA0APulgqE2pJaOiMAgBIB0JQBfnA86VyB01lpdoiIAA92k56pKaRUlDuWWHXdTDapp6nSwvyt2EpjLuHnzLwnEFwDyPYB9/SKCLH52wUNf55eWsQAAA"},{"id":"m0060","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":23,"pitch":-46,"time":"16:45","date":"01.06.2026","bg":"#74716E","lq":"UklGRpwAAABXRUJQVlA4IJAAAACQAwCdASoYAA0APuleqE0pJSQiMAgBIB0JZQDE2AL918KRSWEAAP3PZeY5deywwLN45lEjnYMttDVS16iwf6X8N1maJn7eyEEF3ZpC9VWuygzuYHgNrx+dulKjq601+ZKsRvpPtFd/QLvvghZluyWjiodbCHWcbsvwHl5iDZLyyxH9JBdJwwaCTa1a4lPQAAA="},{"id":"b0001","c":"b","W":1280,"H":720,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":null,"bg":"#4C4E54","lq":"UklGRnQAAABXRUJQVlA4IGgAAADQAwCdASoYAA0APulep00pJSOiMAgBIB0JZQAAYYN9/aYr/tHOioAA88qCJT3Scq7QuRUoWEknqfEeK9PEKXnGa6aLx+4GJe37+4rPrjT+zsllPat+aU62g0TGB/ocMlEeu0Ku0cAAAA=="},{"id":"a0271","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":5,"pitch":-29,"time":"15:33","date":"17.09.2026","bg":"#636667","lq":"UklGRnAAAABXRUJQVlA4IGQAAADQAwCdASoYAA0APulep00pJSOiMAgBIB0JZwAAXAQ2G92b/LhSigAAy0mCki25c/3VvjT3mTpHMx49IBmgaHv7pqZWUMW3NXSOHZS4YO0RwpDLx0p/NM/B2i3j63NEkzQcMCAA"},{"id":"r0126","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":4,"pitch":0,"time":"14:58","date":"09.09.2026","bg":"#6E6A67","lq":"UklGRo4AAABXRUJQVlA4IIIAAACwAwCdASoYAA0APuleqE0pJSQiMAgBIB0JYwCdABT0tzt0oQgfaAD7ot2IH1n20MqcQ+qmIeSyBsD0ccefkI6VdZ1PchNo2BjJcf0jFyF+kYHXVc250ex/LTDyuemyWEh3Wxl5rF0P+99DoxZrytFWBl5+NlbtuIB8BRqH79T0AAAA"},{"id":"s0039","c":"s","W":2400,"H":1350,"w":900,"h":506,"alt":35,"pitch":-12,"time":"18:35","date":"21.09.2026","bg":"#516778","lq":"UklGRnYAAABXRUJQVlA4IGoAAABwBACdASoYAA0APulgqE0pJaOiMAgBIB0JYgCdLwDs/wHmitVZ8+5euXfaAAD8Zbz3FCebIuk5mq0VdXBSbkgsEbjacPMOjz1TBoW+k9oCCjMh/p67JerA1wDcegY6yWN1GNtRcni/GiAA"},{"id":"m0023","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":4,"pitch":-14,"time":"16:27","date":"01.06.2026","bg":"#7A7470","lq":"UklGRsAAAABXRUJQVlA4ILQAAAAQBACdASoYAA0APuleqE0pJSQiMAgBIB0JYwDA3Yw62+ekdsQ7jweCQAD+0PseQonSGJCVtlykWOxZtBDo7eRfn1XUDE/5DuVFUtJBmNKAPFa103Ip6U3P4/3Zct2jhu3wfAV80xkAhlo3hfyWHn+fhpLKWkTHUtR6CUu7KIFhHjJ186rpReFo3mcnr+qSWQHsDr/q3r05XUXaXrJWfWL4E2YqkbsjiFmCzv5oiBR/OARcAAA="},{"id":"g0149","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":18,"pitch":-33,"time":"13:44","date":"17.09.2026","bg":"#7C7165","lq":"UklGRpgAAABXRUJQVlA4IIwAAADQBACdASoYAA0APulgqE0pJaOiMAgBIB0JYwCdMoSA28ABr6C2iJRDbjpOeivMkAD+ueD8nZkrbnyTgFs+bEPzWRRVn7vgtD08X+R8t4UJHUj9/N4oOBrzV5XJ4fi56gkSI5DJL189iKMsSt95osAoJJIpnwLffCnxSJwl5NG1uw3FbnLVQmR2mEjAAA=="},{"id":"r0157","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":4,"pitch":16,"time":"15:22","date":"09.09.2026","bg":"#606164","lq":"UklGRpIAAABXRUJQVlA4IIYAAADQAwCdASoYAA0APuliqE2pJaOiMAgBIB0JYgCdABqyMpdTsJoa5wAA7onRnDyBdfqz5jGp/u+3s1HkD9Au3tWhTXu0y0eLXeQ1ZwAtebjNBFmw9uW3ljzynU3ESBw6RMCofrfGL+1frLSUVjH0ipSwyWcNq+lDhp3b2iXxuewWsUT3FAAAAA=="},{"id":"m0070","c":"mc","W":2400,"H":922,"w":900,"h":346,"alt":45,"pitch":-3,"time":"17:07","date":"01.06.2026","bg":"#697C90","lq":"UklGRooAAABXRUJQVlA4IH4AAAAQBACdASoYAAkAPuliqk2pJaQiMAgBIB0JYgCdEf/gNfLdgWjfkUpxwAD3yYmrW2Sg88yC7aK6DTTcTQ1F/EzPwmGSuhoo0itaYUHjMcmwwVfaSAz19kpPlzsWJq5W3y+fXWuUdfWCqtvk6c9bLrMn2Uer4GZkHhck+h9wAAA="},{"id":"a0245","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":104,"pitch":-31,"time":"15:29","date":"17.09.2026","bg":"#706D63","lq":"UklGRn4AAABXRUJQVlA4IHIAAADwAwCdASoYAA0APulgqE2pJaQiMAgBIB0JQBYdhCiB3vRS0KATEKdAAM3nYJFEIGVQtS1GS4yZ515coEff5ffkLn4Ne/vlfdD2U4k1vYChuxJqI12uMyOm/ZdBlobUn0dnRCSWWkMVU4/DMXRb7XcwgAA="},{"id":"m0090","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":14,"pitch":-14,"time":"17:39","date":"01.06.2026","bg":"#7A7879","lq":"UklGRnYAAABXRUJQVlA4IGoAAABQAwCdASoYAA0APulgqE2pJaQiMAgBIB0JZwAAINSpbU/WiAD3GRw4nkNiAMu1S4E4sX70OxLmowv2/c5OMRx464qDL6f4iy7uVhuqXdUz3DGJhtMPzoTJss91U+6aF/Tgc6TDeAYqAAAA"},{"id":"g0141","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":13,"pitch":-40,"time":"13:39","date":"17.09.2026","bg":"#737270","lq":"UklGRrIAAABXRUJQVlA4IKYAAAAwBACdASoYAA0APulgqE0pJaOiMAgBIB0JQBbZZYTgAYGIfMvTn7MUTEgA/WzSl96C2I5C8+7wK1WS9v5D+3oxPgavpfedV1l7M67ZPW3n8ocCVkOfoJMgesW1OpLCK68Y1IhigJJzOaXAD8OL3RQHVh3gNuo1+yZRucjIZxPuIRkIAmI9HQv9KBxGqm1i+72FGiCw1YjFScWOFRJDl0bv1jmHEAAA"},{"id":"r0105","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":52,"pitch":-90,"time":"14:52","date":"09.09.2026","bg":"#6E6A59","lq":"UklGRpIAAABXRUJQVlA4IIYAAADQAwCdASoYAA0APulgqE2pJaQiMAgBIB0JYgC7ABUtC1k0J8X4hugA/rpCYSoADFN8g4zhUDuAN6H9Yh1LQQzRtfzQkSZiym5pksGIVXB/z28seGyge7Z5EtVXT4NpLMQ+K5CLhba7zXkHyImeD/OJsLZbb/eWbvFNKee54y8otxhuF7gAAA=="},{"id":"a0226","c":"a","W":2400,"H":925,"w":900,"h":347,"alt":78,"pitch":-3,"time":"15:23","date":"17.09.2026","bg":"#76878D","lq":"UklGRm4AAABXRUJQVlA4IGIAAADQAwCdASoYAAkAPuliqk2pJaQiMAgBIB0JQBOgBERxPay0rnmmeYgA+pPzWkyQCrazpZ2xsu3qTOGwBQSak/TWgM8rAcPW+UK9xxVUr/v0fveQkk3jeto8UmvLiC+UCe4AAA=="},{"id":"p0314","c":"p","W":2400,"H":1798,"w":900,"h":674,"alt":18,"pitch":null,"time":null,"date":"12.11.2025","bg":"#848682","lq":"UklGRqgAAABXRUJQVlA4IJwAAAAQBQCdASoYABIAPuloqFCpJaOiqAqpIB0JZQDPZBIqRLsF1t0who5GJE+iET0+z34gAP6yNQmHls6dj146z7ydIg0w8wwSSTRjFpWfmJmjfFtri6ac8QjvLRqIMf84Dmis/aHfylAA/gE4sqBiixLKWiAW7aRBdAvoydqDBMGPEXBpnN9wcT1hFL723fFIysKCPyx7Hg0V5E9AAAA="},{"id":"r0050","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":40,"pitch":-57,"time":"14:36","date":"09.09.2026","bg":"#6D6B5E","lq":"UklGRp4AAABXRUJQVlA4IJIAAAAwBACdASoYAA0APulgqE0pJaOiMAgBIB0JYgDCgYxiyVwN5GGmgYm64AAA+kNPj/DfiRITv68ndOcNK6Nk67eK8cNkk0CeGclIN9b/grVRnrAl8hjuIk3jlVCyjn3KuJHYdfwdnclKo9gJtimj00UGcaBFoRhtuPMqfWEjTxSBwsZEhD4WY4BU4qqCoKeRFjgAAA=="},{"id":"m0002","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":9,"pitch":-14,"time":"15:54","date":"01.06.2026","bg":"#73706A","lq":"UklGRp4AAABXRUJQVlA4IJIAAAAwBACdASoYAA0APulgqE0pJaQiMAgBIB0JYwC+SCLv/ie9aDliumEiAgAA+WV5TJp14mqn7KXuJYmE04lt27hl3nTFG1M5L4R500PqI/HD+5Jgw0feGWN93a08u/itDfgQLxTu6a3viVJILocznXxlwCs2kIQS68JhVCuEF2B/+knE/w6AJhnQR8a4lq1AksAAAA=="},{"id":"g0129","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":86,"pitch":-18,"time":"13:33","date":"17.09.2026","bg":"#6B6D6B","lq":"UklGRmoAAABXRUJQVlA4IF4AAADQAwCdASoYAA0APulgqU0pJaQiMAgBIB0JZQCdACHd15sZXm6eIAAA/rI9Cq8+BWo097+z4TZju2fsAGWMdOax6DWUAvlz9cyidL2k898gEPJsgY0Jo6FxBrxiqQAA"},{"id":"m0007","c":"mc","W":2400,"H":1814,"w":900,"h":680,"alt":52,"pitch":-10,"time":"15:57","date":"01.06.2026","bg":"#647380","lq":"UklGRr4AAABXRUJQVlA4ILIAAABwBACdASoYABIAPuloqlCpJaOiqAqpIB0JRjgAHEfBs/Te+xNPsXOXzNtT4AD+UtoL1W8w/P0WIjgNz9RJ0EOs+hDLC5QyryY/oTJbNUjDNrahcw8QoUxTzXLW13kiy1xruV0SQQ008+34DaljkHyI9J2E7xMeC5tnWmzX/+ahnf7/B6iqLT+zLxoI3ot3NDyyHK86qZpkSCkI64XDwbOynRiAMMQ3vvS85nbLIEBggAAA"},{"id":"r0164","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":5,"pitch":-9,"time":"16:04","date":"09.09.2026","bg":"#756D60","lq":"UklGRpIAAABXRUJQVlA4IIYAAACQAwCdASoYAA0APulep00pJSOiMAgBIB0JQBdgBCvk2k8Iv0E4AP6qToG4PKyRKhvwxiABBuXSHD9r3t20s+12ahJzNZEZ62UQibqgV4mXiq/HUtfMCWMqI+WTZEWOzInjymjQxx8io6vfD0oqnvarNbEUig8+dKBeOxIKTd7G7k9aXwoAAA=="},{"id":"e0003","c":"e","W":2400,"H":1350,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":"25.08.2026","bg":"#6F6960","lq":"UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoYAA0APulgqE0pJaOiMAgBIB0JZQC+SBbsOrFsOGipx3oAAP7N9bS2PQCGOMGT8vkY4zdMP/fFOZs0m+oi716LSpxDrTy9hZ/keoVmeUj+9jncFos6EIIJle4FnNJOGWLVCdWHelSwlLy9npGyBvRAAAA="},{"id":"a0291","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":46,"pitch":-20,"time":"15:39","date":"17.09.2026","bg":"#7B756A","lq":"UklGRngAAABXRUJQVlA4IGwAAADwAwCdASoYAA0APulgqU2pJaQiMAgBIB0JYwCw7B6vjwZt15ioQIqAAP1N7Qty7DAgh+BwoDg2zW76R663rPysk/hlFAQowKkM5jw+4c0MCBNc2Cbc/J1ClEUW6JhyII2bYfxBga1590QAAAA="},{"id":"m0056","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":19,"pitch":-32,"time":"16:44","date":"01.06.2026","bg":"#6F6C69","lq":"UklGRpwAAABXRUJQVlA4IJAAAABwAwCdASoYAA0APulgqE0pJaQiMAgBIB0JZwDKABE6R0kgw1AA/XdEV1aSbk/JLtXJRZOXtUvSR+Ius0+s49NruRUdBFg6ZmuPVQZV1EVisJAGRyjXgS/SljFm/dwlMy/L+J64A0hIEe6wjt2e8oASnHPCbQyEf3bOZY29sAU/dvSU3k9x6TNgx6aTg/JJgAA="},{"id":"g0162","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":24,"pitch":-90,"time":"13:51","date":"17.09.2026","bg":"#7C766E","lq":"UklGRp4AAABXRUJQVlA4IJIAAADwAwCdASoYAA0APulgqE0pJaQiMAgBIB0JQAALQTlxZ2aTVFZb8f2AAP7OBR89aMwReSwTIOF+AMvZxSnm11kWsAWg8BU02eMY8Z5ralVfOaCRRAIL9f76pk8v6NfLk6mO5dT1mdT8ZNzm7qMPAVNwQB2c3RgM9r/+1L4yaSNr+OOzYDF0gGbrpnOLNbQJzE24AA=="},{"id":"s0002","c":"s","W":2400,"H":1350,"w":900,"h":506,"alt":9,"pitch":-1,"time":"18:24","date":"21.09.2026","bg":"#4E6C8D","lq":"UklGRmQAAABXRUJQVlA4IFgAAADwAwCdASoYAA0APuliqE2pJaOiMAgBIB0JQBOmUABfaNugTz8zNeaAAMqjqxBEctlbKpFXdi2stR19U2rCSKP0HLoGL4bU/MupkoXep8KCAru+LXcB4oAA"},{"id":"r0026","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":7,"pitch":-13,"time":"14:23","date":"09.09.2026","bg":"#6C6252","lq":"UklGRpgAAABXRUJQVlA4IIwAAABwAwCdASoYAA0APuleqE0pJSQiMAgBIB0JQAADgYTkq3HjYsAA/oKGU3qC8/lln4OJO0xgQcwfrdKV/wgybMP7EodCvmHm5RYhb1U7b9E39T5el3bA+eQ5hm/+GoKP1OWazMrw66NXs3z8+JVyKZtq7QS2GsV4c31Pod+OUWL9svUaohbNLWfRScKAAA=="},{"id":"k0028","c":"k","W":2400,"H":1350,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":"11.02.2026","bg":"#68695E","lq":"UklGRoIAAABXRUJQVlA4IHYAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JQBUeg+h3BUm8TEJHspAAzXdNjq2ZXQIroV8ZnCm5cBEyTXIzikDMTDQa8hvReQo+zEY/gqfnB5UH9++c3hTLfPE/djpMeyud3FFaMBq+V0mtG+UKiM2i07KEwAAA"},{"id":"a0247","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":53,"pitch":-37,"time":"15:30","date":"17.09.2026","bg":"#848075","lq":"UklGRngAAABXRUJQVlA4IGwAAADwAwCdASoYAA0APulgqE2pJaQiMAgBIB0JYwCsABxN+4fO9obU4ZQAAPhTKwJS3lLXnd2SP003My2lAf6uY0pR4L8lJ5S91EBJIhb3HVLTyx0FuyOjo3NSkiZj+zsf0/l0uSa/Zfh8e96AAAA="},{"id":"m0078","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":18,"pitch":-51,"time":"17:37","date":"01.06.2026","bg":"#757374","lq":"UklGRooAAABXRUJQVlA4IH4AAAAwBACdASoYAA0APuleqE0pJSQiMAgBIB0JaQDMHCB4qLMq18Q6ReP0GQAA/qnmNN7XI7B0vlByoKY0WS9BaOKaecAGvojLfLlO9rfIurVY59Vg9jw9e3PEBeMt7FT/3LV2g5/WiTi8BhDVVyWo9DxzKpMbzr7nZM6/MLfAAAA="},{"id":"g0177","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":4,"pitch":-56,"time":"13:59","date":"17.09.2026","bg":"#64605F","lq":"UklGRooAAABXRUJQVlA4IH4AAADQAwCdASoYAA0ALq10ul0jKSkpCQCsSygAHyHgbABiQHd6H8HGzgAA/stbtjT+HRou2o5PKkXA7B4mFsrnWNLtQ/dEbqfV0+bZls5Qs34koRrV3n6gG7z0uq4fwOe1D66v0MQfjEI94B8RV33RW3JirY5b7V/2zolgDWOAAAA="},{"id":"m0009","c":"mc","W":2400,"H":1760,"w":900,"h":660,"alt":45,"pitch":-14,"time":"15:58","date":"01.06.2026","bg":"#687A88","lq":"UklGRrwAAABXRUJQVlA4ILAAAACQBACdASoYABIAPulorVApJaQiqAqpIB0JQBS1gfononeD8qv7jlwA4ET7F6wA/lkK/Jj3loI7vEEkBugG5DYJO0sxcyEvYKXbjtIMQgMivwZxHZvDuf4fUwJRgprQylKLiFDH9dcyTWMoRndYO2BY8+tZa1oSCx5ltmP21A1WvYe2KbRxE+AHpO8vshyBGnX1OqqG0zSgza1lFUNaZNDYg5d5LWcZFrzHjdCSG7QAAA=="},{"id":"r0110","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":17,"pitch":-33,"time":"14:56","date":"09.09.2026","bg":"#6D685D","lq":"UklGRpgAAABXRUJQVlA4IIwAAABQAwCdASoYAA0APulgp00pJaOiMAgBIB0JQAADeyFaF4WDYAD89Wi57fP1EClFniHXJrHzqKFemHT93LtbJvF3NPkunekkfTQ5n0YExsBt/l6suXMTJNM1L+nTc8j6zeIRNQtlhD5bKJ+JcoK13UDbNPQCYnyrv2BGSERrJbNLbnpARvJ348QI+LoAAA=="},{"id":"w0004","c":"w","W":2160,"H":1214,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":null,"bg":"#525E5A","lq":"UklGRpQAAABXRUJQVlA4IIgAAAAQBACdASoYAA0APulgqE0pJaQiMAgBIB0JagCdACHrNYMd3O0rZxdLSAD9769sdHn5nLdS8yRB2yqI9ftnful0KBCLBOKM/nnQWHZ7w+ka15y9nJ/uGrgDLHpriBgkNaU4eVDUZXnWp6v3qonFI9SFrGZ9utyMOriBfJBw9pWfm+Da5MeOdAAA"},{"id":"a0252","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":52,"pitch":-37,"time":"15:30","date":"17.09.2026","bg":"#817B6F","lq":"UklGRoIAAABXRUJQVlA4IHYAAADwAwCdASoYAA0APulgqE2pJaQiMAgBIB0JYwCsABVDWbxDKVDW8R4wAP0SY7cmGDiq/lTYtD/NyjInlY3Pncxf28KyBWeEA9VG5evxOLU7W/vEVF77BgaKx356+xp/sTdEHjzv/lDWI4Lu2avMMlss8sEqPAAA"},{"id":"m0019b","c":"m","W":2400,"H":1354,"w":900,"h":508,"alt":8,"pitch":-6,"time":"16:56","date":"01.06.2026","bg":"#6E6A67","lq":"UklGRowAAABXRUJQVlA4IIAAAADQAwCdASoYAA4APulgqE0pJaOiMAgBIB0JZwDLLBgf1doQEmFbwUAA/p3EkoFcNJbhxMw4MhAx8qILpC98jV6N74Jem/VAR+u1dwbmmVMfDGKvOhZRYF5b0VSxUHWn55xIsU24gxgFlw76eZjkiggh8EwiuJXTsq/t6d+raJAAAA=="},{"id":"g0137","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":93,"pitch":-17,"time":"13:38","date":"17.09.2026","bg":"#706E6B","lq":"UklGRn4AAABXRUJQVlA4IHIAAADQAwCdASoYAA0APulep00pJSOiMAgBIB0JQBOgBEAhYVmWNx45+SgA/I+SSRwRluzX5KiVE4Ra97X35cQ+f177SuYlAeEqmBmJ+128g1DDY7/9v3kbl4lOXd0bslWoegj0+GT5+sRMwVZgcsNE00iAAAA="},{"id":"r0046","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":6,"pitch":-5,"time":"14:31","date":"09.09.2026","bg":"#5C5A51","lq":"UklGRm4AAABXRUJQVlA4IGIAAACQAgCdASoYAA0AAwBWJYwAAvo1AAIT9fal2G2iAAD+8QA88o13NzX26L6ir8LFOPT9Qw9zWb276cA8j3r9r/cCIjo3cf51/IQGimERvLwAJgqUCE1NCqaW0JIdq92gzAAAAA=="},{"id":"q0006","c":"o","W":2400,"H":1350,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":"03.09.2026","bg":"#8492A0","lq":"UklGRpQAAABXRUJQVlA4IIgAAADwAwCdASoYAA0APulgqU2pJaQiMAgBIB0JZgCdACHhBBrZg9sy9O0AAP5ZRqrwQ8OnX2EgMnnr2eE78gMLodI+nlvNt9W9dlGtpieKS2Ok587azwwTdROs4Z3pV/NZJYkgLsDVnmGVpwnQ163xaor5qdgz+XdGa9LAfgz7HSD/ENc5JH0wH4AA"},{"id":"a0282","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":6,"pitch":-90,"time":"15:37","date":"17.09.2026","bg":"#5A656E","lq":"UklGRnoAAABXRUJQVlA4IG4AAAAwBACdASoYAA0APulgqE0pJaOiMAgBIB0JYwCsMoAC9nfv43x6veQPTUAA8d2Qgk92i8e9ZkD1pDi0ZAfJgiocio8J5wxd2y6zkbkQxTflntvx8rycFryNHEjLb2qwf5QrKeXNydxAisU9vUAAAA=="},{"id":"m0084","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":32,"pitch":-48,"time":"17:38","date":"01.06.2026","bg":"#6B696A","lq":"UklGRpQAAABXRUJQVlA4IIgAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JZwDLLB9g0vD8NantAjwA/iY7bnk9RgqrCn7qUBz97i6y7Trn7+TaB2IbGVZ1qMZIxD9pP0Q4Zb4aZyroqksYsrLs7NGW7cf+oP22aI6x2ybz+TZfudaEKPejXB5vH+O4O7ylfs/SeMhC0j13AgAA"},{"id":"g0152","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":50,"pitch":-90,"time":"13:46","date":"17.09.2026","bg":"#746A60","lq":"UklGRooAAABXRUJQVlA4IH4AAADwAwCdASoYAA0APulep00pJSOiMAgBIB0JYwCdABigefqP2Sw3uUEAAP6BuY5zajNzuMe4SRjuadUqbPd1zJUtMLLv9ud6gRUML1tesITtrb0ROSGCRG77XCu8HabuD5iS9CAuCgbHWehav48L63ixx1WmWLXhTFwPVgvo0AA="},{"id":"r0096","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":6,"pitch":2,"time":"14:38","date":"09.09.2026","bg":"#6B6D6A","lq":"UklGRnYAAABXRUJQVlA4IGoAAADwAwCdASoYAA0APulgqE2pJaQiMAgBIB0JYwC7IJPChGwgSzXHzPUwAPcJ2NDPOskqFXb2B4RmEw+0IzSHDTLJp3wJgzW1wPp5yCFAO7wYygHzmkJhdB3FW51A71/VtbuFb9YM0HFC0AAA"},{"id":"a0258","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":86,"pitch":-25,"time":"15:31","date":"17.09.2026","bg":"#7B756A","lq":"UklGRnIAAABXRUJQVlA4IGYAAADwAwCdASoYAA0APulgqE2pJaQiMAgBIB0JYwCdAB4J3wjyw1TLnGhiAO9s7Wtivj4mWjSZxg/4ChWkQN/STaem9uZY5l6P6hVcb8wAwwtEHkn8eQeAiIseOObzRivsiAVjEB/QAAA="},{"id":"m0075","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":38,"pitch":-90,"time":"17:37","date":"01.06.2026","bg":"#83807E","lq":"UklGRoQAAABXRUJQVlA4IHgAAADQAwCdASoYAA0APulgqE0pJaOiMAgBIB0JZQDCgCLgvTzeJa6gd4AA/umcDmwQ/CNKf61yqmxGa/Ha28/nPzchlc1NxM8l6lL8Z+hGkXrB1g3lcvK2baW6YoYqncZjA6pCJ83fqjLPBfl66vsuG74gc7bnMQIlXAA="},{"id":"g0185","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":4,"pitch":-45,"time":"14:00","date":"17.09.2026","bg":"#626464","lq":"UklGRn4AAABXRUJQVlA4IHIAAABwAwCdASoYAA0APulgqE0pJaQiMAgBIB0JZQCw7BKlu+paPwAA/pT9hLNCB+XxyWIvbE1MPvOiK0ZzKsBBxophA7Ayk19aXXxUApIWthGfkSy2vYYneIYR/gJeHm8rUNl1ZHUkGL/z//FwSkq/JhAAAAA="},{"id":"r0153","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":24,"pitch":-70,"time":"15:20","date":"09.09.2026","bg":"#7A7064","lq":"UklGRooAAABXRUJQVlA4IH4AAADwAwCdASoYAA0APulgqE0pJaOiMAgBIB0JYwC/OBnpeJt+kNjqf6yAAP7bpRRx6jBc9Vtr3PcrSQDbnmllFNmPWEp0aki5C5BRQMiDf70emOHsLlmnkw8w3mNnw3Z125Z/D7uHcYN1LCKtH0i/Fh3fZtoWFFQXTH35vDQAAAA="},{"id":"a0227","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":79,"pitch":-14,"time":"15:24","date":"17.09.2026","bg":"#6F726F","lq":"UklGRngAAABXRUJQVlA4IGwAAACwAwCdASoYAA0APulgqE0pJaQiMAgBIB0JYwCdACHVOE0Ou/8yAADeVjg6F7ru3xr5xVPNFkOj5TJbrSz6Y6eqLONUHRApxOkgs3weEr0FF4QqNmRUoKsZkJbO9oFZ71ZUhRQofGQLdpjwAAA="},{"id":"m0093","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":33,"pitch":-38,"time":"17:41","date":"01.06.2026","bg":"#6D6B6B","lq":"UklGRpQAAABXRUJQVlA4IIgAAAAwBACdASoYAA0APulgqE0pJaOiMAgBIB0JZwDDNBebYM3EQUrRvr2z+gAA/XTt8dAevsHLsiZP8+yVEz2uAeBwninZG5HZRxzUvt7QWxlfC6qKaQPatuDiaSRNuhW0TBpGy3nBWO0rV+WogsvimjAv4WcAm8YPAwYg2MnGniBnr3PA6XvSlwAA"},{"id":"g0156","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":33,"pitch":-29,"time":"13:47","date":"17.09.2026","bg":"#7A6D63","lq":"UklGRnQAAABXRUJQVlA4IGgAAAAwBACdASoYAA0APulgqU0pJaQiMAgBIB0JQBOkGQBG3NxHVazcaazDyYAA9UqJXrJWeaLsI0Vt0XumwsDuVFZNnJ6q9TNaU9Sn89jv0bwLWRa98O1jsL2znX11XuDjHsMWJGSx4gAAAA=="},{"id":"r0172","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":8,"pitch":-5,"time":"16:05","date":"09.09.2026","bg":"#65615B","lq":"UklGRoQAAABXRUJQVlA4IHgAAADwAwCdASoYAA0APulgqE2pJaOiMAgBIB0JYwC7ACFfJlL8JW0FIWoAAP4mOg+vBV/RE6ndOw+vRiD6kyimsY73lwceEzmXDM2+MPM+h6/gp8uoZ7HWX0a61ne/L9SnUsnm8jOxJofbtf3u3iJ72Aphi1MLyduEgAA="},{"id":"g0187","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":4,"pitch":-52,"time":"14:00","date":"17.09.2026","bg":"#747071","lq":"UklGRmYAAABXRUJQVlA4IFoAAAAQAwCdASoYAA0APulgqE2pJaQiMAgBIB0JZwAACG6CdAAAzbxFvsmjVKvK/80UQPpb/Cs27tWMk4AADaZ48WVA1ESdbvAVW2c0IzN+NRtNtlSIS3u2dbagAAA="},{"id":"m0045","c":"m","W":2400,"H":1350,"w":900,"h":506,"alt":22,"pitch":-14,"time":"16:40","date":"01.06.2026","bg":"#6A6D71","lq":"UklGRqgAAABXRUJQVlA4IJwAAAAQBACdASoYAA0APulgqE0pJaOiMAgBIB0JYwC7INiDMGasJ9MY9WaBAAD+zbgAhZA+Q2dHKQixRL8fDZRZIhm2QUFKnAu/jnpMn8fl46jVJuhjaiIs4ohsc6Gkj0FxZx5NniixbjoRmpG95qx1fjh6fkf5hGJzSZd31gbgBgofz14oranO4leHqxz6KZoWJYren8ETEJhoKP/gAAA="},{"id":"a0289","c":"a","W":2400,"H":1350,"w":900,"h":506,"alt":34,"pitch":-90,"time":"15:39","date":"17.09.2026","bg":"#7E766B","lq":"UklGRnoAAABXRUJQVlA4IG4AAABwAwCdASoYAA0APulkq04pJaQiMAgBIB0JQBOgAmSVRN2Y/AAA+gl05A8fW7j7My/MR1aGs8d4P/jGZzBir0O1ypRYmj0Q8WNneGkqIHDbh4Uvcf81DpmYCTrLKtENVtb5IlhRNcYr0yXwoXcgAA=="},{"id":"r0103","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":29,"pitch":-69,"time":"14:51","date":"09.09.2026","bg":"#71695C","lq":"UklGRoYAAABXRUJQVlA4IHoAAABQBACdASoYAA0APulgqE0pJaOiMAgBIB0JYwC7ACLvUvA1KHvrYsCzopFQAP67+gaqzug0CPApsMLmiyCTYvkC1WzpH7YZzpqbpxKaXOAifzT2FneaYbbmwZeDSWuj2T5XY6BmakbWEOu8JcuaOuQLFdFSu5CalQAAAA=="},{"id":"g0132","c":"g","W":2400,"H":1350,"w":900,"h":506,"alt":80,"pitch":-23,"time":"13:35","date":"17.09.2026","bg":"#71685C","lq":"UklGRnIAAABXRUJQVlA4IGYAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JQBOgApxZGRsbvlS+2AAA930ajGsmhpbmzIC0wgrm52JTSs83EVMN992LoaSp9BwVd7OJ6USGLNslZ1hSFKBfqsUGQxRwTczKFhX+wAA="},{"id":"r0133","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":7,"pitch":-23,"time":"15:01","date":"09.09.2026","bg":"#56524B","lq":"UklGRnYAAABXRUJQVlA4IGoAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JQBhQBD3w6yJ5gFsYnoAA/tzvtVPMrjilcO/SRYNcsNjK93OIeCw8ADcpp6Y5cqSqINKOuatTNhRZIN0fBX3veWB08E7JIUB0aJnDkf1wAAAA"},{"id":"q0015","c":"h","W":2400,"H":1350,"w":900,"h":506,"alt":null,"pitch":null,"time":null,"date":"11.02.2026","bg":"#706F6E","lq":"UklGRoYAAABXRUJQVlA4IHoAAAAwBACdASoYAA0APulgqE0pJaOiMAgBIB0JQBOmUGVsiFizyH01Gx5EyiAA/LAs5AIoBP6CGzQRY7+gDngI4q+E+hYGpBb4mZSWgy24hwCIvHpWFNa8iL5iWnFvu9N/JeIteMHKVPxPqsmiGl7MMEEztwdKVmzwmAAAAA=="},{"id":"r0060","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":41,"pitch":-51,"time":"14:36","date":"09.09.2026","bg":"#6F6C57","lq":"UklGRqAAAABXRUJQVlA4IJQAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JQBadMZANo9cmpA4OD8AA/tArfdTUDcxtaBssk6wn5LpkhDr3sbGBzqF0DAbMW71MFwgRmShccUaGWP6U8eF9t+GBGyv3yZkUcXjEbWNPnlx44g78n/qVghsO8wcUhM0XGfRtmyZMgA144vJjG4bE7JDgAfGPkFAaykAA"},{"id":"r0076","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":42,"pitch":-50,"time":"14:36","date":"09.09.2026","bg":"#6A6959","lq":"UklGRp4AAABXRUJQVlA4IJIAAADQAwCdASoYAA0APulgqE0pJaQiMAgBIB0JZAC/OA8RrCeX5naNYAAA/qp4EtLf1LtHqkL5+LkVYmGc3AwHZz/CqyGdYJukAO923Pl5GszXcpPPPlLjJiYf9pvMd83sbtXQSdg2HIx0a8cdYyJsdGjuECIXc7C8Pfe+MjtwhUj3zZX/zdSStZ9tm9k3SMAKGQAAAA=="},{"id":"r0116","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":21,"pitch":-29,"time":"14:56","date":"09.09.2026","bg":"#6E6C58","lq":"UklGRpgAAABXRUJQVlA4IIwAAAAQBACdASoYAA0APulgp00pJaOiMAgBIB0JYwC7AdwAt7XyMZnO27ixmAD+qdwFjY2lZaXxOGgz0auNmbxs050DyowpRvasSQyCJ5m3SoyDLAXXhFuC1gaxyeEo2pSzYc59zOWdpknqiseOv828iI5Tjjw9+dWVdUeSYkwWZTn2PVlhqpg5NMkCTUAAAA=="},{"id":"r0140","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":15,"pitch":-70,"time":"15:09","date":"09.09.2026","bg":"#5F524A","lq":"UklGRqIAAABXRUJQVlA4IJYAAAAQBACdASoYAA0APuleqE0pJSOiMAgBIB0JQBOgMX6M0PcrfMUkJLdyzAD0TKr31NHKo9/5UdB5Xn6ByBGdTNPyxRG8meJPviAnuL71fkAovBxXeM+ZzWs2wPemQ5imUFxq0dtloKPqD+GkSwf2U/tL6tvRTfhhD/S4T39iL0eLhsdMfkhoiEPdqLAvFpo6Bsgb9fSPSAA="},{"id":"r0024","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":63,"pitch":-67,"time":"14:22","date":"09.09.2026","bg":"#636452","lq":"UklGRqQAAABXRUJQVlA4IJgAAADwAwCdASoYAA0APuleqE0pJSQiMAgBIB0JQAB8tyT6xFeScSdAJgIAAP67ak8dETeOWtK+cqRomedi2i5bsg+oj0HsMM9dmhvB9u4kZxwTYlWnKTd8QSlcXQC60Cu+1/tnKF9zsLggr1lxsdKnS5wiDIuNnK/KTa0aMYCBBukStb2Gb/GjFZZOZxNY9plN1IOlM2auQroAAA=="},{"id":"r0145","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":43,"pitch":-28,"time":"15:18","date":"09.09.2026","bg":"#656551","lq":"UklGRpYAAABXRUJQVlA4IIoAAACwAwCdASoYAA0APuleqE0pJSOiMAgBIB0JYwAAN5e/a58+C3mkwAD+gbI31JOI7mmgZCam60Z4BwrDDbDJVmDKnE7JuUgFQihPpbfvs9vlLOqNgbz92b3pb7bOteNwEFFO43Z0MD677fN/2ym9a2T5qb86+imcoTAULAkR3jraMAEVP3BvYiTQAAA="},{"id":"r0001","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":31,"pitch":-17,"time":"14:18","date":"09.09.2026","bg":"#565C5A","lq":"UklGRoYAAABXRUJQVlA4IHoAAAAwBACdASoYAA0APulgqE0pJaQiMAgBIB0JZwDG9YvM3unHHtvchmGrtgAA/I/ImMI8gfsWSnO5WpktSnb1dqgDiRG967J8aDX7tXzchZnb9R2GfzWtsEmaMTTWNyPTPx2XfKDBMnyxmCo8rSpPmjwnitkLXhwXCfkoAA=="},{"id":"r0122","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":32,"pitch":-17,"time":"14:56","date":"09.09.2026","bg":"#67685A","lq":"UklGRpYAAABXRUJQVlA4IIoAAACwAwCdASoYAA0APulgqE0pJaOiMAgBIB0JYwCAAAe/jd35jym6sAD6mvPXA504nrtjwjG2tGdzLNYp6/MxTJwpnoL4JNe7Ze95aJKZkWMokLTbtro+jVoHrPdl2LHQ3DuwlYh/rlRntwi/9QBaB/50Cav0pDw/ScJjSYyUkTPUajQHZgG9VHVAAAA="},{"id":"r0014","c":"r","W":2400,"H":1350,"w":900,"h":506,"alt":40,"pitch":-15,"time":"14:19","date":"09.09.2026","bg":"#61645F","lq":"UklGRo4AAABXRUJQVlA4IIIAAADQAwCdASoYAA0APuleqE0pJSQiMAgBIB0JYwC7ACHRuDR5s/Wt44AA/rI67QvZQA/Gz11AzA/GrOVzCpZ4I2jMJaneFG3muwfgyfKBm4UllNQ7wKqGONwtjWkcFUgm8aX0VsnwyktZWyLsTHbMXt3g9U9RNDyzdqgNxxLJZyOjggAA"}];
var VIDEOS=[{"id":"e0782","k":"build","t":"Ferris wheel over Eilat's new amusement park","s":"Amusement park \u00b7 Eilat","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#4E5C6D","a":0},{"id":"p0015","k":"urban","t":"Excavator taking apart a red-roof building","s":"Urban renewal \u00b7 Petah Tikva","d":10.5,"w":1280,"h":720,"res":"1080p","bg":"#7D7977","a":0},{"id":"r0167","k":"urban","t":"Pull-back from the site to the whole neighborhood","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.0,"w":1280,"h":720,"res":"1080p","bg":"#716C60","a":0},{"id":"r0144","k":"urban","t":"Old apartment blocks before demolition","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#5A594D","a":0},{"id":"h0722","k":"solar","t":"Hyperlapse \u00b7 panels going up under the clouds","s":"Solar build \u00b7 Hyperlapse","d":8.8,"w":1280,"h":720,"res":"1080p","bg":"#6F7C81","a":0},{"id":"v0229","k":"solar","t":"Solar farm beside the village","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#7B756C","a":0},{"id":"g0133","k":"solar","t":"Solar farm between orchards and a reservoir","s":"Solar farm \u00b7 Northern Israel","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#786C62","a":0},{"id":"r0102","k":"urban","t":"Excavator tearing down the top floors","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#5F574D","a":0},{"id":"tABB5","k":"brand","t":"Vineyards and winery estate","s":"Brand film","d":32.4,"w":1280,"h":720,"res":"1080p","bg":"#494F51","a":1},{"id":"g0159","k":"solar","t":"Wide sweep over the finished solar field","s":"Solar farm \u00b7 Northern Israel","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#77726E","a":0},{"id":"h0015","k":"solar","t":"Hyperlapse \u00b7 solar frames rising on the hillside","s":"Solar build \u00b7 Hyperlapse","d":5.0,"w":1280,"h":720,"res":"1080p","bg":"#707771","a":0},{"id":"tF7EC","k":"brand","t":"Glass-walled clubhouse above the sea \u00b7 Haifa","s":"Brand film","d":40.2,"w":1280,"h":720,"res":"1080p","bg":"#65707D","a":1},{"id":"r0106","k":"urban","t":"Top-down: the roof is taken apart","s":"Urban renewal \u00b7 Ramat Ef'al","d":8.1,"w":1280,"h":720,"res":"1080p","bg":"#686258","a":0},{"id":"v0243","k":"solar","t":"Top-down over the panel rows","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#61605F","a":0},{"id":"t060A","k":"urban","t":"FPV through an empty building and out over the site","s":"FPV","d":9.9,"w":880,"h":494,"res":"494p","bg":"#644D3F","a":1},{"id":"g0125","k":"solar","t":"Endless panel rows to the horizon","s":"Solar farm \u00b7 Northern Israel","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#8D8783","a":0},{"id":"r0125","k":"urban","t":"From the roof down into the demolition","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#6B645A","a":0},{"id":"t854A","k":"brand","t":"Coastal skyline \u00b7 real-estate project film","s":"Real estate","d":74.5,"w":1280,"h":724,"res":"480p","bg":"#7D8A8B","a":1},{"id":"v0286","k":"solar","t":"Gliding over the panels toward the mountains","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#868D94","a":0},{"id":"g0140","k":"solar","t":"Transformer station between the panels","s":"Solar farm \u00b7 Northern Israel","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#636467","a":0},{"id":"r0045","k":"urban","t":"Excavator clearing a demolished wing","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#6C655B","a":0},{"id":"tEA67","k":"brand","t":"Glass office towers","s":"Real estate","d":36.4,"w":1280,"h":724,"res":"480p","bg":"#576372","a":1},{"id":"h0028","k":"build","t":"Hyperlapse \u00b7 earthworks beside the greenhouses","s":"Construction","d":2.6,"w":1280,"h":720,"res":"1080p","bg":"#67675C","a":0},{"id":"v0274","k":"solar","t":"Inverter stations across the solar field","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#707676","a":0},{"id":"r0129","k":"urban","t":"Close-up: the arm breaks through the walls","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#797267","a":0},{"id":"t090B","k":"build","t":"Residential towers under construction","s":"Construction progress","d":43.5,"w":1280,"h":720,"res":"720p","bg":"#7F8085","a":1},{"id":"g0190","k":"solar","t":"Low pass along a single panel row","s":"Solar farm \u00b7 Northern Israel","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#767A7D","a":0},{"id":"r0150","k":"urban","t":"The last section comes down","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#69635B","a":0},{"id":"t88B2","k":"brand","t":"Store opening at a shopping center \u00b7 vertical reel","s":"Brand film","d":28.5,"w":720,"h":1280,"res":"1080p","bg":"#6B6969","a":1},{"id":"v0275","k":"solar","t":"Crew laying cables at the inverter","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#6B6E72","a":0},{"id":"g0145","k":"solar","t":"Technician working inside the inverter station","s":"Solar farm \u00b7 Northern Israel","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#918B83","a":0},{"id":"r0137","k":"urban","t":"Water jets keeping the dust down","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#757169","a":0},{"id":"v0276","k":"solar","t":"Overhead: hands-on cable work","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#596067","a":0},{"id":"g0183","k":"solar","t":"Electricians wiring the station","s":"Solar farm \u00b7 Northern Israel","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#6C6A69","a":0},{"id":"r0161","k":"urban","t":"Ground-level orbit around the excavator","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#675F55","a":0},{"id":"v0279","k":"solar","t":"Telehandler moving materials on site","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":11.8,"w":1280,"h":720,"res":"1080p","bg":"#948B81","a":0},{"id":"g0147","k":"solar","t":"Battery storage containers","s":"Solar farm \u00b7 Northern Israel","d":5.1,"w":1280,"h":720,"res":"1080p","bg":"#7F7A70","a":0},{"id":"r0168","k":"urban","t":"From the neighborhood down to the demolition","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#716C5A","a":0},{"id":"r0100","k":"urban","t":"The facade comes off floor by floor","s":"Urban renewal \u00b7 Ramat Ef'al","d":7.0,"w":1280,"h":720,"res":"1080p","bg":"#8E857A","a":0},{"id":"g0126","k":"solar","t":"Long panel rows seen from above","s":"Solar farm \u00b7 Northern Israel","d":12.0,"w":1280,"h":720,"res":"1080p","bg":"#6F6B69","a":0},{"id":"r0149","k":"urban","t":"Dust and water as the wall comes down","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.0,"w":1280,"h":720,"res":"1080p","bg":"#666563","a":0},{"id":"g0139","k":"solar","t":"Orbit around the transformer station","s":"Solar farm \u00b7 Northern Israel","d":11.7,"w":1280,"h":720,"res":"1080p","bg":"#6C6460","a":0},{"id":"r0128","k":"urban","t":"Clearing rubble beside the open floors","s":"Urban renewal \u00b7 Ramat Ef'al","d":12.0,"w":1280,"h":720,"res":"1080p","bg":"#636360","a":0},{"id":"p0888","k":"urban","t":"Street closed for the demolition crew","s":"Urban renewal \u00b7 Petah Tikva","d":12.0,"w":1280,"h":720,"res":"720p","bg":"#616C77","a":0},{"id":"g0144","k":"solar","t":"Low flight over the panel surface","s":"Solar farm \u00b7 Northern Israel","d":11.9,"w":1280,"h":720,"res":"1080p","bg":"#74787B","a":0},{"id":"r0101","k":"urban","t":"The arm reaches the top floor","s":"Urban renewal \u00b7 Ramat Ef'al","d":6.8,"w":1280,"h":720,"res":"1080p","bg":"#686864","a":0},{"id":"v0280","k":"solar","t":"Top-down: connecting the cables","s":"Ashdot Ya'akov \u00b7 Jordan Valley","d":12.1,"w":1280,"h":720,"res":"1080p","bg":"#4F5559","a":0},{"id":"r0138","k":"urban","t":"The facade torn open, seen from the roofline","s":"Urban renewal \u00b7 Ramat Ef'al","d":5.6,"w":1280,"h":720,"res":"1080p","bg":"#736B5B","a":0},{"id":"g0148","k":"solar","t":"Cabling under the inverter station","s":"Solar farm \u00b7 Northern Israel","d":8.7,"w":1280,"h":720,"res":"1080p","bg":"#8B847B","a":0},{"id":"r0031","k":"urban","t":"Excavator opening the corner of the building","s":"Urban renewal \u00b7 Ramat Ef'al","d":3.9,"w":1280,"h":720,"res":"1080p","bg":"#696457","a":0},{"id":"g0174","k":"solar","t":"Overhead: pulling cables into the trench","s":"Solar farm \u00b7 Northern Israel","d":11.7,"w":1280,"h":720,"res":"1080p","bg":"#65605B","a":0},{"id":"g0189","k":"solar","t":"Cable and conduit work from above","s":"Solar farm \u00b7 Northern Israel","d":6.9,"w":1280,"h":720,"res":"1080p","bg":"#7C7674","a":0},{"id":"m0066","k":"urban","t":"Operator's hands on the machine remote","s":"Urban renewal \u00b7 On the ground","d":5.1,"w":1280,"h":720,"res":"1080p","bg":"#4C4843","a":0},{"id":"m0072","k":"urban","t":"Street-level view of the excavator at work","s":"Urban renewal \u00b7 On the ground","d":2.4,"w":1280,"h":720,"res":"1080p","bg":"#5B5A51","a":0},{"id":"o0001","k":"bts","t":"Behind the scenes \u00b7 Or Bahar filming a new house","s":"Behind the scenes","d":7.5,"w":1280,"h":720,"res":"1080p","bg":"#85807C","a":0},{"id":"o0006","k":"bts","t":"Behind the scenes \u00b7 Or Bahar flying on a residential street","s":"Behind the scenes","d":6.2,"w":1280,"h":720,"res":"1080p","bg":"#8896A4","a":0}];
var PLACE={"a": ["Ashdot Ya'akov", "Solar farm \u00b7 Jordan Valley"], "g": ["Sha'ar Golan project", "Solar farm \u00b7 Northern Israel"], "r": ["Ramat Ef'al", "Urban renewal \u00b7 Demolition"], "s": ["Santorini, Greece", "Coastline"], "e": ["Eilat", "Amusement park under construction"], "p": ["Petah Tikva", "Urban renewal \u00b7 Demolition"], "w": ["Vineyard estate", "Winery \u00b7 Brand film"], "b": ["Seafront towers", "Real estate"], "c": ["Residential project", "Construction progress"], "h": ["Hillside solar farm", "Solar farm under construction"], "k": ["Earthworks beside the greenhouses", "Construction"], "o": ["Behind the scenes", "Or Bahar flying on site"], "m": ["City-centre demolition", "Urban renewal \u00b7 Demolition"], "mc": ["City skyline", "Urban view"], "pano": ["Urban panorama", "Stitched panorama"]};
var $=function(s,r){return (r||document).querySelector(s)};
var state={type:"photos",list:[],cols:0};
var wall=$("#wall"),seg=$(".seg");
var canHover=window.matchMedia&&matchMedia("(hover:hover) and (pointer:fine)").matches;
var reduce=(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)||(function(){try{return localStorage.getItem("og-still")==="1"}catch(e){return false}})();
function visit(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){return null}}
var back=document.documentElement.classList.contains("back");
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function fmtDur(s){s=Math.round(s);return Math.floor(s/60)+":"+("0"+s%60).slice(-2)}
function el(tag,cls){var e=document.createElement(tag);if(cls)e.className=cls;return e}
function place(x){return PLACE[x.c]||["Aerial photography",""]}

/* ---------- tabs ---------- */
function setType(t,scroll){
  if(t!=="photos"&&t!=="videos")t="photos";
  state.type=t;seg.dataset.v=t;
  seg.querySelectorAll("[role=tab]").forEach(function(b){b.setAttribute("aria-selected",String(b.dataset.type===t))});
  wall.setAttribute("aria-labelledby","tab-"+t);
  ($("#gTitle .rvi")||$("#gTitle")).textContent=t==="photos"?"Photos":"Videos";
  render(scroll);
  try{history.replaceState(history.state,"","#"+t)}catch(_){}
  store("og-type",t);
}
seg.addEventListener("click",function(e){var b=e.target.closest("[role=tab]");if(b&&b.dataset.type!==state.type)setType(b.dataset.type,true)});
seg.addEventListener("keydown",function(e){if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;var t=state.type==="photos"?"videos":"photos";setType(t,false);$("#tab-"+t).focus();e.preventDefault()});

/* ---------- masonry ---------- */
function colCount(){var w=wall.clientWidth||window.innerWidth;if(state.type==="videos")return w<620?2:w<1100?3:4;return w<620?2:w<980?3:w<1500?4:5}
var io=("IntersectionObserver" in window)?new IntersectionObserver(function(ents){ents.forEach(function(en){if(en.isIntersecting){var im=en.target;if(im.dataset.src){im.src=im.dataset.src;im.removeAttribute("data-src")}io.unobserve(im)}})},{rootMargin:"700px 0px"}):null;
function lazy(img,url){if(io){img.dataset.src=url;io.observe(img)}else img.src=url}
function tileFor(x,i){
  var isV=state.type==="videos";
  var b=el("button","tile"+(isV?" v":""));b.type="button";b.dataset.i=i;b.style.setProperty("--i",Math.min(i,24));
  var r=el("div","ratio");r.style.paddingTop=(x.h/x.w*100).toFixed(3)+"%";r.style.background=x.bg||"";
  var img=el("img");img.alt=isV?x.t:place(x)[0];img.width=x.w;img.height=x.h;img.decoding="async";img.draggable=false;
  img.addEventListener("load",function(){img.classList.add("ok")});img.addEventListener("error",function(){img.classList.add("ok")});
  lazy(img,"media/t/"+x.id+".webp");r.appendChild(img);b.appendChild(r);
  var meta=el("span","meta");
  if(isV){
    b.insertAdjacentHTML("afterbegin",'<span class="play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></span>');
    var tt=el("span","tt");tt.textContent=x.t;var d=el("span","mono");d.textContent=fmtDur(x.d);meta.appendChild(tt);meta.appendChild(d);
    b.setAttribute("aria-label","Play video: "+x.t+", "+fmtDur(x.d));
  }else{
    var a=el("span");a.textContent=place(x)[0];var m=el("span","mono");m.textContent=x.alt!=null?("ALT "+x.alt+" M"):"PANO";meta.appendChild(a);meta.appendChild(m);
    b.setAttribute("aria-label","Open photo "+(i+1)+": "+place(x)[0]);
  }
  b.appendChild(meta);return b;
}
function render(scrollTop){
  stopPreview();
  state.list=state.type==="photos"?PHOTOS:VIDEOS;
  if(state.type==="videos"){Drum.hide();wall.hidden=true;wall.innerHTML="";state.cols=0;Cine.show()}
  else if(Drum){Cine.hide();wall.hidden=true;wall.innerHTML="";state.cols=0;Drum.show()}
  else{Cine.hide();wall.hidden=false;
  var n=colCount();state.cols=n;wall.innerHTML="";
  var cols=[],hs=[];for(var c=0;c<n;c++){var d=el("div","col");cols.push(d);hs.push(0);wall.appendChild(d)}
  state.list.forEach(function(x,i){var k=0;for(var c=1;c<n;c++)if(hs[c]<hs[k]-0.02)k=c;cols[k].appendChild(tileFor(x,i));hs[k]+=x.h/x.w+0.06});
  }
  fxTiles();
  if(scrollTop){var y=$("#gallery").getBoundingClientRect().top+window.pageYOffset;if(window.pageYOffset>y+4)window.scrollTo({top:y,behavior:"auto"})}
}
var rt;window.addEventListener("resize",function(){clearTimeout(rt);rt=setTimeout(function(){if(state.type==="photos"&&colCount()!==state.cols)render(false)},150)});
wall.addEventListener("click",function(e){var t=e.target.closest(".tile");if(t)openLB(+t.dataset.i)});

var pvTile=null,pvTimer=null;
function stopPreview(){clearTimeout(pvTimer);if(pvTile){var v=pvTile.querySelector("video.pv");if(v){v.pause();v.removeAttribute("src");try{v.load()}catch(_){}v.remove()}pvTile.classList.remove("playing");pvTile=null}}
if(canHover){
  wall.addEventListener("mouseover",function(e){
    if(state.type!=="videos")return;var t=e.target.closest(".tile");if(!t||t===pvTile)return;stopPreview();pvTile=t;
    pvTimer=setTimeout(function(){if(pvTile!==t)return;var x=state.list[+t.dataset.i];if(!x)return;
      var v=el("video","pv");v.muted=true;v.loop=true;v.playsInline=true;v.setAttribute("playsinline","");v.preload="auto";v.src="media/v/"+x.id+".mp4";
      v.addEventListener("playing",function(){v.classList.add("on");t.classList.add("playing")});
      t.querySelector(".ratio").appendChild(v);var p=v.play();if(p&&p.catch)p.catch(function(){});},260);
  });
  wall.addEventListener("mouseout",function(e){if(pvTile&&!pvTile.contains(e.relatedTarget))stopPreview()});
}

/* ---------- lightbox ---------- */
var lb=$("#lb"),media=$("#lbMedia"),spin=$("#lbSpin"),cur=-1,lastFocus=null,pushed=false,ctx={list:[],type:"photos"};
var zoom={on:false,s:1,x:0,y:0};
function lockScroll(on){var v=on?"hidden":"";document.documentElement.style.overflow=v;document.body.style.overflow=v}
function openLB(i){openWith(state.list,state.type,i)}
function openWith(list,type,i){
  stopPreview();ctx={list:list,type:type};
  if(!lb.classList.contains("open")){
    lastFocus=document.activeElement;lb.classList.add("open");lb.setAttribute("aria-hidden","false");lockScroll(true);if(typeof Cine!=="undefined"&&Cine)Cine.sync();
    try{history.pushState({lb:1},"");pushed=true}catch(_){pushed=false}
    setTimeout(function(){$("#lbClose").focus({preventScroll:true})},30);
  }
  show(i,0);
}
function closeLB(fromPop){
  if(!lb.classList.contains("open"))return;
  killVideo();lb.classList.remove("open");lb.setAttribute("aria-hidden","true");lockScroll(false);if(typeof Cine!=="undefined"&&Cine)setTimeout(Cine.sync,60);
  window.OBMusic&&OBMusic.duck(false);
  setTimeout(function(){if(!lb.classList.contains("open"))media.innerHTML=""},300);
  if(pushed&&!fromPop){pushed=false;try{history.back()}catch(_){}}
  pushed=false;
  if(lastFocus&&lastFocus.focus){try{lastFocus.focus({preventScroll:true})}catch(_){}}
}
window.addEventListener("popstate",function(){if(lb.classList.contains("open")){pushed=false;closeLB(true)}});
function killVideo(){var v=media.querySelector("video");if(v){v.pause();v.removeAttribute("src");try{v.load()}catch(_){}}}
function resetZoom(img){zoom.on=false;zoom.s=1;zoom.x=0;zoom.y=0;if(img){img.style.transform="";img.classList.remove("zoomed")}}
function preload(i){var n=ctx.list.length,x=ctx.list[(i+n)%n];if(!x||ctx.type!=="photos")return;var im=new Image();im.decoding="async";im.src="media/p/"+x.id+".webp"}
function show(i,dir){
  var n=ctx.list.length;if(!n)return;i=(i+n)%n;cur=i;var x=ctx.list[i];
  killVideo();resetZoom();
  media.style.transition="none";media.style.opacity="0";media.style.transform=dir?"translateX("+(dir>0?40:-40)+"px)":"scale(.985)";
  media.innerHTML="";$("#lbCount").textContent=(i+1)+" / "+n;
  var title=$("#lbTitle"),tele=$("#lbTele");tele.innerHTML="";title.innerHTML="";
  function tl(k,v){var li=el("li");li.textContent=k+" ";var b=el("b");b.textContent=v;li.appendChild(b);tele.appendChild(li)}
  if(ctx.type==="photos"){
    var pl=place(x);title.appendChild(document.createTextNode(pl[0]));var sm=el("small");sm.textContent=pl[1];title.appendChild(sm);
    if(x.alt!=null)tl("Altitude",x.alt+" m");if(x.pitch!=null)tl("Camera tilt",Math.abs(x.pitch)+"°");tl("Time",x.time);tl("Date",x.date);
    window.OBMusic&&OBMusic.duck(false);
    var img=el("img");img.alt=pl[0];img.draggable=false;img.src="media/t/"+x.id+".webp";media.appendChild(img);
    spin.classList.add("on");
    var full=new Image();full.decoding="async";
    full.onload=function(){if(cur!==i||!media.contains(img))return;img.src=full.src;spin.classList.remove("on")};
    full.onerror=function(){spin.classList.remove("on")};
    full.src="media/p/"+x.id+".webp";preload(i+1);preload(i-1);
  }else{
    spin.classList.remove("on");
    title.appendChild(document.createTextNode(x.t));var sm2=el("small");sm2.textContent=x.s||"";title.appendChild(sm2);
    tl("Length",fmtDur(x.d));tl("Resolution",x.res);
    var v=el("video");v.controls=true;v.playsInline=true;v.setAttribute("playsinline","");v.setAttribute("webkit-playsinline","");
    v.preload="auto";v.poster="media/t/"+x.id+".webp";v.setAttribute("controlslist","nodownload");v.src="media/v/"+x.id+".mp4";
    if(!x.a)v.muted=true;
    v.addEventListener("play",function(){if(!v.muted&&window.OBMusic)OBMusic.duck(true)});
    v.addEventListener("volumechange",function(){if(window.OBMusic)OBMusic.duck(!v.muted&&!v.paused)});
    v.addEventListener("pause",function(){window.OBMusic&&OBMusic.duck(false)});
    v.addEventListener("ended",function(){window.OBMusic&&OBMusic.duck(false)});
    media.appendChild(v);
    var p=v.play();if(p&&p.catch)p.catch(function(){v.muted=true;var q=v.play();if(q&&q.catch)q.catch(function(){})});
  }
  requestAnimationFrame(function(){requestAnimationFrame(function(){media.style.transition="";media.style.opacity="1";media.style.transform=""})});
}
function next(){show(cur+1,1)}function prev(){show(cur-1,-1)}
$("#lbClose").addEventListener("click",function(){closeLB(false)});
$("#lbNext").addEventListener("click",next);$("#lbPrev").addEventListener("click",prev);
var lastMove=0;
lb.addEventListener("click",function(e){if(Date.now()-lastMove<400)return;if(e.target===$("#lbStage")||e.target===media)closeLB(false)});
document.addEventListener("keydown",function(e){
  if(!lb.classList.contains("open"))return;
  if(e.key==="Escape"){e.preventDefault();closeLB(false)}
  else if(e.key==="ArrowRight"){e.preventDefault();next()}
  else if(e.key==="ArrowLeft"){e.preventDefault();prev()}
  else if(e.key==="Tab"){var f=[].slice.call(lb.querySelectorAll("button,video[controls]")).filter(function(x){return x.offsetParent!==null});if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}
});
var stage=$("#lbStage"),g=null,lastTap=0;
function curImg(){return ctx.type==="photos"?media.querySelector("img"):null}
function applyZoom(img){img.style.transform="translate("+zoom.x+"px,"+zoom.y+"px) scale("+zoom.s+")"}
function clampZoom(img){var w=img.offsetWidth,h=img.offsetHeight;zoom.x=Math.min(Math.max(zoom.x,w-w*zoom.s),0);zoom.y=Math.min(Math.max(zoom.y,h-h*zoom.s),0)}
function toggleZoom(img,cx,cy){if(zoom.on){resetZoom(img);return}var r=img.getBoundingClientRect(),px=cx-r.left,py=cy-r.top;zoom.on=true;zoom.s=2.5;zoom.x=px-px*zoom.s;zoom.y=py-py*zoom.s;clampZoom(img);img.classList.add("zoomed");applyZoom(img)}
var lastPT="mouse";
stage.addEventListener("dblclick",function(e){if(lastPT!=="mouse")return;var img=curImg();if(img&&e.target===img)toggleZoom(img,e.clientX,e.clientY)});
stage.addEventListener("pointerdown",function(e){
  lastPT=e.pointerType||"mouse";
  if(e.button!==undefined&&e.button!==0)return;if(e.target.closest(".lb-nav"))return;
  var isVid=e.target.tagName==="VIDEO";if(isVid){var vr=e.target.getBoundingClientRect();if(e.clientY>vr.bottom-70)return}
  g={x:e.clientX,y:e.clientY,id:e.pointerId,dx:0,dy:0,zx:zoom.x,zy:zoom.y,moved:false};
});
stage.addEventListener("pointermove",function(e){
  if(!g||e.pointerId!==g.id)return;g.dx=e.clientX-g.x;g.dy=e.clientY-g.y;if(Math.abs(g.dx)>6||Math.abs(g.dy)>6)g.moved=true;
  var img=curImg();
  if(zoom.on&&img){img.style.transition="none";zoom.x=g.zx+g.dx;zoom.y=g.zy+g.dy;clampZoom(img);applyZoom(img);return}
  if(!g.moved)return;media.style.transition="none";
  if(Math.abs(g.dx)>Math.abs(g.dy)){media.style.transform="translateX("+g.dx+"px)";media.style.opacity=String(1-Math.min(Math.abs(g.dx)/600,.4))}
  else if(g.dy>0){media.style.transform="translateY("+g.dy+"px) scale("+(1-Math.min(g.dy/1500,.1))+")";media.style.opacity=String(1-Math.min(g.dy/500,.6))}
});
function endG(e){
  if(!g||(e&&e.pointerId!==g.id))return;var G=g;g=null;if(G.moved)lastMove=Date.now();
  var img=curImg();if(img)img.style.transition="";media.style.transition="";
  if(zoom.on){if(!G.moved&&e&&e.pointerType!=="mouse"){var now=Date.now();if(now-lastTap<320&&img){toggleZoom(img,e.clientX,e.clientY);lastTap=0}else lastTap=now}return}
  var ax=Math.abs(G.dx),ay=Math.abs(G.dy);
  if(G.moved&&ax>ay&&ax>55){if(G.dx<0)next();else prev();return}
  if(G.moved&&ay>ax&&G.dy>90){closeLB(false);media.style.transform="";media.style.opacity="1";return}
  media.style.transform="";media.style.opacity="1";
  if(!G.moved&&e&&e.pointerType!=="mouse"&&img&&e.target===img){var n2=Date.now();if(n2-lastTap<320){toggleZoom(img,e.clientX,e.clientY);lastTap=0}else lastTap=n2}
}
stage.addEventListener("pointerup",endG);
stage.addEventListener("pointercancel",function(){if(!g)return;g=null;media.style.transition="";media.style.transform="";media.style.opacity="1"});
window.addEventListener("resize",function(){var img=curImg();if(img&&zoom.on)resetZoom(img)});

/* ---------- copy + toast ---------- */
var toast=$("#toast"),tt;
function say(m){toast.textContent=m;toast.classList.add("on");clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove("on")},1800)}
function selectText(node){try{var r=document.createRange();r.selectNodeContents(node);var s=getSelection();s.removeAllRanges();s.addRange(r)}catch(_){}}
document.querySelectorAll(".copy").forEach(function(b){b.addEventListener("click",function(){
  var txt=b.dataset.copy,node=b.parentNode.querySelector(".v");var fb=function(){selectText(node);say("Selected, ready to copy")};
  try{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(txt).then(function(){say("Copied")},fb);else fb()}catch(_){fb()}
})});

/* ---------- sound button ---------- */
var snd=$("#sndBtn");
var ICON_OFF='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5L6 9H3v6h3l5 4z"/><path d="M22 9l-6 6M16 9l6 6"/></svg>';
var ICON_ON='<span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';
function paintSnd(){var on=window.OBMusic&&OBMusic.isOn();snd.innerHTML=on?ICON_ON:ICON_OFF;snd.setAttribute("aria-pressed",String(!!on));snd.setAttribute("aria-label",on?"Mute music":"Turn music on")}
snd.addEventListener("click",function(){if(!window.OBMusic)return;if(OBMusic.isOn()){OBMusic.stop();store("og-music","off")}else{OBMusic.start();store("og-music","on")}paintSnd()});
paintSnd();

/* ---------- hero ---------- */
var hv=$("#heroVid");
function startHero(){if(window.obFxEnter)obFxEnter();if(reduce||!hv||hv.dataset.on)return;hv.dataset.on="1";hv.src="media/hero.mp4";var hp=hv.play();if(hp&&hp.catch)hp.catch(function(){});hv.addEventListener("playing",function(){$(".hero .poster").style.opacity="0"})}
document.addEventListener("visibilitychange",function(){if(!hv.dataset.on)return;if(document.hidden)hv.pause();else{var q=hv.play();if(q&&q.catch)q.catch(function(){})}});

/* ---------- entrance: now lives in gate.js (first page). Here the gallery only listens to it. ---------- */
var LQ=[],PRI=["services","flip","closing","faq","book","roller","a11y"];function later(n,f){LQ.push([n,f])}function laterNow(n,f,now){if(now)f();else later(n,f)}function runLater(n){for(var i=0;i<LQ.length;i++)if(LQ[i]&&LQ[i][0]===n){var f=LQ[i][1];LQ[i]=null;f()}}function pending(n){for(var i=0;i<LQ.length;i++)if(LQ[i]&&LQ[i][0]===n)return true;return false}
var intro=$("#intro"),G=window.__GATE,entered=false,introGone=G.gone,finishIntro=G.finish,enter=G.enter;
G.onGone(function(){introGone=true});G.hero=startHero;G.paint=paintSnd;



/* ---------- project roller: cinematic carousel on spring physics ---------- */
later("roller",function(){
  var stage=$("#rstage"),chipsEl=$("#rchips"),pill=$("#rpill"),capEl=$("#rcap"),capT=$("#rCapT"),capS=$("#rCapS"),dotsEl=$("#rdots"),playBtn=$("#rPlay"),amb=$("#ramb");
  var BY={};PHOTOS.forEach(function(p){BY[p.id]=p});
  var RC=[["Featured", ["m0105", "e0001", "m0098", "w0003", "g0131", "r0092", "b0005", "s0005", "m0053", "c0003", "a0223", "r0148", "pano1", "e0002", "m0041", "g0171", "s0003", "r0169", "w0005", "a0253", "m0109", "c0007", "q0722", "r0036", "m0068", "g0134", "m0060", "b0001", "a0271", "r0126", "s0039", "m0023", "g0149", "r0157", "m0070", "a0245", "m0090", "g0141", "r0105", "a0226", "p0314", "r0050"]], ["Urban renewal", ["m0098", "r0092", "m0053", "r0148", "m0041", "r0169", "m0109", "r0036", "m0060", "r0126", "m0023", "r0157", "m0090", "r0105", "p0314", "r0050"]], ["Solar & energy", ["g0131", "a0223", "g0171", "a0253", "q0722", "g0134", "a0271", "g0149", "a0245", "g0141", "a0226"]], ["Construction & brands", ["e0001", "w0003", "b0005", "c0003", "e0002", "w0005", "c0007", "b0001"]], ["City & coast", ["m0105", "s0005", "pano1", "s0003", "m0068", "s0039", "m0070"]]].map(function(c){return [c[0],c[1].filter(function(id){return BY[id]}).map(function(id){return BY[id]})]}).filter(function(c){return c[1].length});
  var SUB={a:"Solar farm · Jordan Valley",g:"Solar farm · Northern Israel",r:"Urban renewal · Demolition",s:"Coastline · Greece",pano:"Stitched panorama",e:"Amusement park · Eilat",p:"Urban renewal · Petah Tikva"};
  var allIn=false,cat=-1,items=[],cards=[],dots=[],pos=0,vel=0,target=0,drag=null,running=false,lastT=0,hover=false,inView=false,playing=!reduce,cw=900,ch=560,spacing=600,wheelAcc=0,wheelT=0,lastIdx=-1,dwell=0,DWELL=5.5,lastTick=performance.now(),userHold=0,small=false,dealAt=0,tiltP=1,touchy=!canHover;
  var CVS={},CVW=720;
  function cvFor(id){var c=CVS[id];if(!c){c=CVS[id]=document.createElement("canvas");c.className="rcv";c.width=CVW;c.height=Math.round(CVW*(ch/cw))||Math.round(CVW*0.7);c._ok=false}return c}
  function paintCv(id,im){var c=cvFor(id);if(c._ok||!im||!im.naturalWidth)return;try{var g=c.getContext("2d"),W=c.width,H=c.height,iw=im.naturalWidth,ih=im.naturalHeight,k=Math.max(W*1.12/iw,H/ih),dw=iw*k,dh=ih*k;g.drawImage(im,(W-dw)/2,(H-dh)/2,dw,dh);c._ok=true}catch(_){}}
  function mod(a,n){return ((a%n)+n)%n}
  function clamp(v,a,b){return v<a?a:v>b?b:v}
  RC.forEach(function(c,i){var b=el("button","rchip");b.type="button";b.setAttribute("role","tab");b.dataset.i=i;b.textContent=c[0];chipsEl.appendChild(b)});
  chipsEl.addEventListener("click",function(e){var b=e.target.closest(".rchip");if(b)setCat(+b.dataset.i,true)});
  function movePill(){var b=chipsEl.querySelector('.rchip[aria-selected="true"]');if(!b)return;pill.style.width=b.offsetWidth+"px";pill.style.transform="translateX("+b.offsetLeft+"px)";
    try{var cr=chipsEl.getBoundingClientRect(),br=b.getBoundingClientRect();if(br.left<cr.left||br.right>cr.right)chipsEl.scrollBy({left:(br.left+br.width/2)-(cr.left+cr.width/2),behavior:"smooth"})}catch(_){}}
  function layout(){
    var w=stage.clientWidth||window.innerWidth,vh=window.innerHeight||800;
    if(w<700){cw=Math.round(w*0.84);ch=Math.round(cw*0.78);spacing=cw*0.7}
    else{cw=Math.round(Math.min(w*0.68,1100,(vh*0.54)/0.6));ch=Math.round(cw*0.6);spacing=cw*0.6}
    stage.style.setProperty("--cw",cw+"px");stage.style.setProperty("--ch",ch+"px");stage.style.setProperty("--rh",Math.round(ch*(w<700?1.3:1.2)+(w<700?30:44))+"px");small=w<700;
  }
  function setCat(i,animate){
    if(i===cat)return;cat=i;userHold=performance.now();dwell=0;
    chipsEl.querySelectorAll(".rchip").forEach(function(b){b.setAttribute("aria-selected",String(+b.dataset.i===i))});movePill();
    items=RC[i][1];dotsEl.classList.toggle("many",items.length>10);dotsEl.classList.toggle("bar",items.length>26);cards.forEach(function(c){c.el.remove()});cards=[];dotsEl.innerHTML="";dots=[];lastIdx=-1;
    items.forEach(function(x,k){
      var c=el("div","rcard");c.dataset.k=k;c.style.setProperty("--cg",x.bg||"#223");
      c.innerHTML='<i class="rsh rsh-a" aria-hidden="true"></i><i class="rsh rsh-g" aria-hidden="true"></i><i class="rsh rsh-c" aria-hidden="true"></i><div class="rframe"><span class="rdim" aria-hidden="true"></span><span class="rsheen" aria-hidden="true"></span></div>';
      var fr=c.lastChild;fr.style.background=x.bg||"";if(x.lq){fr.style.backgroundImage="url(data:image/webp;base64,"+x.lq+")";fr.style.backgroundSize="cover";fr.style.backgroundPosition="50% 50%"}var im=el("img");im.alt=place(x)[0];im.decoding="async";im.draggable=false;if(touchy){fr.insertBefore(im,fr.firstChild)}else{im.onload=function(){paintCv(x.id,im)};fr.insertBefore(im,fr.firstChild);fr.insertBefore(cvFor(x.id),im)}
      stage.insertBefore(c,windCv);cards.push({el:c,img:im,hi:false,ld:false,dc:0,id:x.id,fr:fr,dim:fr.querySelector(".rdim"),sheen:fr.querySelector(".rsheen"),sa:c.children[0],sg:c.children[1],sc:c.children[2],rf:false,ph:k*1.7+Math.random()*3});
      var d=el("button","rdot");d.type="button";d.setAttribute("role","tab");d.setAttribute("aria-label","Photo "+(k+1));d.innerHTML="<i></i>";d.dataset.k=k;dotsEl.appendChild(d);dots.push(d);
    });
    if(animate&&!reduce){pos=-Math.min(1.6,items.length-0.6);vel=3;target=0;dealAt=performance.now()}else{pos=0;vel=0;target=0}
    kick();
  }
  dotsEl.addEventListener("click",function(e){var d=e.target.closest(".rdot");if(!d)return;var n=items.length,k=+d.dataset.k,cur=mod(Math.round(target),n),diff=k-cur;if(diff>n/2)diff-=n;if(diff<-n/2)diff+=n;userHold=performance.now();go(diff)});
  function render(){
    var n=items.length;if(!n)return;
    var now=performance.now(),dealT=dealAt?(now-dealAt)/1000:9,dealing=dealT<1.6,tl=1-tiltP,spd=clamp(vel,-9,9);
    var mvDim=1-0.6*Math.min(1,Math.abs(vel)/2.5);
    for(var i=0;i<n;i++){
      var c=cards[i],d=i-pos;if(n>1)d=mod(d+n/2,n)-n/2;else d=0;
      var a=Math.abs(d),s=c.el.style;
      /* only the cards near the centre hold an image; the full-size file is kept for the centre card alone */
      /* on phones only the cards around the centre keep the full picture in memory; the painted copy underneath covers the rest */
      if(!c.ld&&(a<(touchy?2.6:9.5)||(allIn&&!touchy))){c.ld=true;c.img.src="media/t/"+c.id+".webp"}
      else if(touchy&&c.ld&&a>5){c.ld=false;c.hi=false;c.img.removeAttribute("src")}
      if(c.ld&&a<6.5&&now-c.dc>2200&&c.img.decode){c.dc=now;c.img.decode().catch(function(){})}
      if(c.hi&&a>(touchy?0.8:1.6)){c.hi=false;c.img.src="media/t/"+c.id+".webp"}
      if(a>(touchy?2.45:3.3)){if(s.visibility!=="hidden"){s.visibility="hidden";s.willChange="auto"}continue}
      if(s.visibility!=="visible"){s.visibility="visible";s.willChange="transform,opacity"}
      var sg=d<0?-1:1,a1=Math.min(a,1),a2=Math.max(0,a-1),ez=a1*a1*(3-2*a1);
      /* cover flow: the centre card faces you, neighbours swing back and stack */
      var x=sg*(ez*cw*(small?0.7:0.6)+a2*cw*(small?0.16:0.19)),z=-ez*(small?190:300)-a2*110,ry=-sg*ez*(small?46:54),sc=1-ez*0.07,
          y=-Math.sin(a1*Math.PI)*(small?10:22)*Math.min(1,Math.abs(spd)*0.6+0.25),rz=spd*1.1*(1-ez*0.4)+sg*Math.sin(a1*Math.PI)*-2.2,rx=0,op=a<2.4?1:Math.max(0,1-(a-2.4)/0.9);
      /* wind: every card leans with it and flutters, more the harder it blows */
      if(wv>0.004){var fl=Math.sin(now*0.013+c.ph)*wv,fl2=Math.sin(now*0.021+c.ph*1.9)*wv;ry+=wdx*wv*(9+a*4)+fl*(5+a*3);rz+=fl2*(1.6+a*0.8)-wdx*wv*1.5;rx+=wdy*wv*10+fl2*2.2;y+=fl*5-wdy*wv*10;x+=wdx*wv*(10+a*8);z+=fl2*14}
      /* the whole set tilts up from the floor as the section scrolls into view */
      if(tl>0.001){rx+=tl*34;y+=tl*90;z-=tl*260}
      /* dealing in after a category change */
      if(dealing){var dp=clamp((dealT-a*0.085)/0.85,0,1),de=1-Math.pow(1-dp,3),ob=1+2.2*Math.pow(dp-1,3)+1.2*Math.pow(dp-1,2);y+=(1-ob)*260;rx-=(1-de)*38;rz+=(1-de)*sg*14;op*=Math.min(1,dp*2.2)}
      s.transform="translate3d("+x.toFixed(1)+"px,"+y.toFixed(1)+"px,"+z.toFixed(1)+"px) rotateX("+rx.toFixed(2)+"deg) rotateY("+ry.toFixed(2)+"deg) rotateZ("+rz.toFixed(2)+"deg) scale("+sc.toFixed(4)+")";
      s.opacity=op.toFixed(3);
      s.zIndex=String(100-Math.round(a*10));
      c.dim.style.opacity=(Math.min(0.62,ez*0.36+a2*0.2)*mvDim).toFixed(3);
      /* shadows: the centre card floats (wide, soft, far below), side cards sit close to the floor (tight, dark) */
      if(!touchy){var lift=1-ez*0.75,wsh=wv*8;
      c.sa.style.transform="translate3d("+(-d*10-wdx*wsh).toFixed(1)+"px,"+(ch*(0.10+0.10*lift)).toFixed(1)+"px,0) scale("+(0.9+0.16*lift).toFixed(3)+","+(0.9+0.2*lift).toFixed(3)+")";c.sa.style.opacity=(0.5+0.4*lift).toFixed(3);
      c.sg.style.transform="translate3d("+(-d*14).toFixed(1)+"px,"+(ch*(0.12+0.12*lift)).toFixed(1)+"px,0) scale("+(0.86+0.22*lift).toFixed(3)+")";c.sg.style.opacity=(0.25+0.6*lift).toFixed(3);
      c.sc.style.transform="translate3d("+(-d*4).toFixed(1)+"px,"+(ch*(0.035+0.03*lift)).toFixed(1)+"px,0) scale("+(0.97-0.05*lift).toFixed(3)+",1)";c.sc.style.opacity=(0.95-0.4*lift).toFixed(3);
      var gl=Math.max(0,1-Math.abs(a-0.5)*2)+wv*0.5;c.sheen.style.opacity=Math.min(0.7,gl*0.55).toFixed(3);c.sheen.style.transform="translate3d("+(d*130+Math.sin(now*0.004+c.ph)*wv*60).toFixed(1)+"%,0,0)";
      c.img.style.transform="translate3d("+(d*-7+wdx*wv*1.5).toFixed(2)+"%,0,0) scale("+(1.02+ez*0.06).toFixed(3)+")"}
      var rf=a<(touchy?0.6:1.55);if(rf!==c.rf){c.rf=rf;c.fr.classList.toggle("rf",rf)}
    }
    if(typeof scrubPaint==="function")scrubPaint();
    var ci=mod(Math.round(pos),n);
    if(ci!==lastIdx){
      var x=items[ci];if(lastIdx>=0&&inView&&window.OBMusic&&OBMusic.flick&&!dealing)OBMusic.flick(0.35+Math.min(0.65,Math.abs(vel)*0.14));lastIdx=ci;dwell=0;
      capEl.classList.add("swap");
      setTimeout(function(){var y=items[mod(Math.round(pos),items.length)];if(!y)return;capT.textContent=place(y)[0];capS.textContent=(place(y)[1]||"")+(y.alt!=null?" · "+y.alt+" m":"");capEl.classList.remove("swap")},180);
      amb.style.backgroundColor=x.bg||"";dotsEl.style.setProperty("--f",((ci+1)/n).toFixed(4));
      dots.forEach(function(d,k){d.classList.toggle("on",k===ci);d.classList.remove("done");d.style.setProperty("--p",0);d.setAttribute("aria-selected",String(k===ci))});
    }
  }
  /* ---------- wind: blows across the roller as hard as it is being moved (or as the page is scrolled past it) ---------- */
  var windCv=el("canvas","rwind");windCv.setAttribute("aria-hidden","true");stage.appendChild(windCv);
  var wg=windCv.getContext("2d"),wv=0,wT=0,wdx=-1,wdy=0,tdx=-1,tdy=0,wOn=false,wLast=0,WW=0,WH=0,wdpr=canHover?Math.min(2,window.devicePixelRatio||1):1,scV=0,scY=window.pageYOffset||0,scT=performance.now(),headEl=$("#rTitleH");
  function wSize(){WW=stage.clientWidth||innerWidth;WH=stage.clientHeight||500;windCv.width=Math.round(WW*wdpr);windCv.height=Math.round(WH*wdpr);wg.setTransform(wdpr,0,0,wdpr,0,0)}
  /* the air is drawn the way a wind map draws it: a few hundred particles ride one flow field (the wind itself, gust waves that travel down it,
     slow eddies, and a bulge where the flow has to pass around the photo in the middle); each leaves a short trail that fades.
     A breeze gives short pale wisps; a storm gives long bright streaks, leaves that tumble through and dust along the ground. */
  var wparts=[],leaves=[],wTime=0,LEAFC=["#c58a2a","#8f9a3a","#a8562c","#d9a64c","#7d8f38","#b9742f"];
  function wSpawn(p,edge){
    if(edge){var ax=Math.abs(wdx),ay=Math.abs(wdy);if(Math.random()*(ax+ay)<ax){p.x=wdx>0?-30*Math.random():WW+30*Math.random();p.y=Math.random()*WH}else{p.y=wdy>0?-30*Math.random():WH+30*Math.random();p.x=Math.random()*WW}}
    else{p.x=Math.random()*WW;p.y=Math.random()*WH}
    p.px=p.x;p.py=p.y;p.life=0;p.ttl=0.7+Math.random()*1.6}
  function wSeed(){wparts=[];leaves=[];var n=small?96:250,i,p;
    for(i=0;i<n;i++){p={z:Math.random(),ph:Math.random()*6.283,k:Math.random()};p.c=p.k<0.14?2:p.k<0.58?0:1;p.rb=Math.random()<0.08;wSpawn(p,false);wparts.push(p)}
    for(i=0;i<(small?8:15);i++)leaves.push({x:-99,y:0,on:false,rot:Math.random()*6.283,spin:(Math.random()<0.5?-1:1)*(3+Math.random()*6),fl:Math.random()*6.283,s:5+Math.random()*6,c:LEAFC[i%LEAFC.length],z:0.6+Math.random()*0.7,ph:Math.random()*6.283})}
  function flow(x,y,z,ph,out){
    var nx=x/WW*6,ny=y/WH*5,tt=wTime,a0=Math.atan2(wdy,wdx),
        mean=(Math.sin(nx*1.3+tt*0.9+ph*0.15)*1.1+Math.sin(ny*1.9-tt*1.3+nx*0.7)*0.9+Math.sin((nx+ny)*0.8+tt*0.5)*0.6)*0.3*(1-wv*0.45),
        a=a0+mean,gust=1+0.4*Math.sin((x*wdx+y*wdy)*0.011-tt*3.2)+0.22*Math.sin(tt*1.7+ph),
        v=WW*(0.1+1.3*wv)*(0.45+0.95*z)*gust,vx=Math.cos(a)*v,vy=Math.sin(a)*v,
        ex=(x-WW/2)/(cw*0.52),ey=(y-(8+ch/2))/(ch*0.6),e=Math.exp(-ex*ex-ey*ey);
    /* around the photo in the middle the air is pushed up or down and speeds up, like wind round a building */
    vy+=(ey<0?-1:1)*e*Math.abs(vx)*0.85;vx*=1+e*0.25;out.x=vx;out.y=vy}
  var wOut={x:0,y:0},WCOL=["255,255,255","52,104,146","196,150,84"];
  function windFrame(now){
    var dt=Math.max(0.004,Math.min(0.05,(now-wLast)/1000));wLast=now;wTime+=dt;
    scV*=Math.pow(0.02,dt);                                        /* page-scroll speed fades quickly once scrolling stops */
    var rv=clamp(vel/5.5,-1,1),pv=inView?clamp(scV/1700,-1,1)*0.9:0,raw=Math.min(1,Math.sqrt(rv*rv+pv*pv)),mag=raw>0.012?Math.pow(raw,0.6):0;   /* a slow move already gives a visible breeze, a fast one a storm */
    if(reduce)mag=0;
    if(raw>0.02){tdx=-rv/Math.max(raw,0.001);tdy=-pv/Math.max(raw,0.001)}
    wT=mag;wv+=(wT-wv)*Math.min(1,dt*(wT>wv?9:1.5));wdx+=(tdx-wdx)*Math.min(1,dt*8);wdy+=(tdy-wdy)*Math.min(1,dt*8);
    if(wv>0.006||wT>0.02){
      /* old trails fade a little every frame: the faster the wind, the longer the streaks */
      wg.globalCompositeOperation="destination-out";wg.fillStyle="rgba(0,0,0,"+(0.24-0.1*wv).toFixed(3)+")";wg.fillRect(0,0,WW,WH);wg.globalCompositeOperation="source-over";
      var i,p,act=Math.round(wparts.length*Math.min(1,0.22+wv*1.1)),vis=Math.min(1,wv*1.7);wg.lineCap="round";
      for(i=0;i<act;i++){p=wparts[i];flow(p.x,p.y,p.z,p.ph,wOut);p.px=p.x;p.py=p.y;p.x+=wOut.x*dt;p.y+=wOut.y*dt;p.life+=dt;
        if(p.c===2){p.y+=(WH*0.9-p.y)*dt*0.6}                      /* dust keeps low, along the ground */
        var al=(0.16+0.62*p.z)*vis*Math.min(1,p.life*5)*Math.min(1,(p.ttl-p.life)*4)*(p.rb?1.25:1);
        if(al>0.01){wg.strokeStyle="rgba("+WCOL[p.c]+","+Math.min(0.92,al).toFixed(3)+")";wg.lineWidth=(0.7+p.z*1.5)*(p.rb?2.1:1);wg.beginPath();wg.moveTo(p.px,p.py);wg.lineTo(p.x,p.y);wg.stroke()}
        if(p.life>p.ttl)wSpawn(p,false);else if(p.x<-40||p.x>WW+40||p.y<-40||p.y>WH+40)wSpawn(p,true)}
      /* leaves: let go when the wind picks up, tumbling and flipping as they cross */
      var la=Math.round(leaves.length*clamp((wv-0.16)*1.7,0,1));
      for(i=0;i<leaves.length;i++){p=leaves[i];
        if(!p.on){if(i<la&&Math.random()<dt*2.2){p.on=true;var hz=Math.abs(wdx)>=Math.abs(wdy);p.x=hz?(wdx>0?-20:WW+20):Math.random()*WW;p.y=hz?WH*(0.08+Math.random()*0.8):(wdy>0?-20:WH+20)}else continue}
        flow(p.x,p.y,p.z,p.ph,wOut);p.x+=wOut.x*dt*0.82;p.y+=wOut.y*dt*0.82+Math.sin(wTime*5.5+p.ph)*46*dt+18*dt;p.rot+=p.spin*(0.5+wv*2.2)*dt;p.fl+=dt*(4+wv*11);
        if(p.x<-40||p.x>WW+40||p.y<-50||p.y>WH+50){p.on=false;continue}
        var fy=Math.cos(p.fl),sz=p.s*(0.8+p.z*0.5);wg.save();wg.translate(p.x,p.y);wg.rotate(p.rot);wg.scale(1,Math.abs(fy)<0.18?0.18:fy);wg.globalAlpha=Math.min(1,vis*1.2);
        wg.fillStyle=p.c;wg.beginPath();wg.moveTo(-sz,0);wg.quadraticCurveTo(-sz*0.1,-sz*0.62,sz,0);wg.quadraticCurveTo(-sz*0.1,sz*0.62,-sz,0);wg.fill();
        wg.strokeStyle="rgba(60,34,10,.55)";wg.lineWidth=0.8;wg.beginPath();wg.moveTo(-sz,0);wg.lineTo(sz*0.9,0);wg.stroke();wg.restore()}
      if(headEl)headEl.style.transform="translate3d("+(wdx*wv*10).toFixed(1)+"px,0,0) skewX("+(-wdx*wv*9+Math.sin(now*0.012)*wv*1.5).toFixed(2)+"deg)";
      if(window.OBMusic&&OBMusic.wind&&Math.abs(rv)>0.08)OBMusic.wind(Math.abs(rv));
      if(!running)render();
      requestAnimationFrame(windFrame);
    }else{wv=0;wOn=false;wg.clearRect(0,0,WW,WH);leaves.forEach(function(l){l.on=false});if(headEl)headEl.style.transform="";if(!running)render()}
  }
  function windKick(){if(wOn||reduce)return;wOn=true;wLast=performance.now();requestAnimationFrame(windFrame)}
  window.addEventListener("scroll",function(){var n=performance.now(),y=window.pageYOffset||0,dt=(n-scT)/1000;if(dt>0.012){var v=(y-scY)/dt;scV=scV*0.5+v*0.5;scY=y;scT=n}if(inView&&Math.abs(scV)>40)windKick()},{passive:true});
  function hiRes(){if(touchy)return;var n=items.length;if(!n)return;var c=cards[mod(Math.round(pos),n)];if(!c||c.hi)return;c.hi=true;var im=new Image();im.decoding="async";im.onload=function(){if(c.hi&&c.ld)c.img.src=im.src};im.src="media/p/"+c.id+".webp"}
  function step(now){
    var e=Math.min(0.25,(now-lastT)/1000)||0.016;lastT=now;
    if(!drag){
      var k=reduce?600:70,cd=2*Math.sqrt(k)*(reduce?1:0.86),sub=Math.max(1,Math.ceil(e/0.008)),dt=e/sub;
      for(var q=0;q<sub;q++){var acc=k*(target-pos)-cd*vel;vel+=acc*dt;pos+=vel*dt}
      if(Math.abs(target-pos)<0.001&&Math.abs(vel)<0.003&&!(dealAt&&now-dealAt<1700)){pos=target;vel=0;render();running=false;hiRes();return}
    }
    render();requestAnimationFrame(step);
  }
  function kick(){windKick();if(running)return;running=true;lastT=performance.now();requestAnimationFrame(step)}
  /* the cards the roller is heading for are decoded before they arrive */
  function ahead(ix){var n=items.length;if(!n)return;for(var j=-2;j<=2;j++){var c=cards[mod(Math.round(ix)+j,n)];if(c){if(!c.ld){c.ld=true;c.img.src="media/t/"+c.id+".webp"}if(c.img.decode){c.dc=performance.now();c.img.decode().catch(function(){})}}}}
  function go(k){target=Math.round(target)+k;ahead(target);kick()}
  function openCenter(){var n=items.length;if(n)openWith(items,"photos",mod(Math.round(pos),n))}
  $("#rPrev").addEventListener("click",function(e){e.stopPropagation();userHold=performance.now();go(-1)});
  $("#rNext").addEventListener("click",function(e){e.stopPropagation();userHold=performance.now();go(1)});
  function paintPlay(){playBtn.innerHTML=playing?'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>':'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';playBtn.setAttribute("aria-label",playing?"Pause slideshow":"Play slideshow")}
  playBtn.addEventListener("click",function(){playing=!playing;userHold=0;paintPlay()});paintPlay();
  stage.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){e.preventDefault();userHold=performance.now();go(1)}else if(e.key==="ArrowLeft"){e.preventDefault();userHold=performance.now();go(-1)}else if((e.key==="Enter"||e.key===" ")&&e.target===stage){e.preventDefault();openCenter()}});
  stage.addEventListener("pointerdown",function(e){
    if(e.button!==undefined&&e.button!==0)return;if(e.target.closest(".rnav"))return;
    drag={x:e.clientX,y:e.clientY,p0:pos,id:e.pointerId,moved:false,samples:[[performance.now(),pos]],card:e.target.closest(".rcard")};userHold=performance.now();
  });
  stage.addEventListener("pointermove",function(e){
    if(!drag||e.pointerId!==drag.id)return;var dx=e.clientX-drag.x,dy=e.clientY-drag.y;
    if(!drag.moved){if(Math.abs(dx)>6&&Math.abs(dx)>Math.abs(dy)){drag.moved=true;if(playing){playing=false;paintPlay()}drag.x=e.clientX;dx=0;try{stage.setPointerCapture(e.pointerId)}catch(_){}stage.classList.add("drag");vel=0;kick()}else return}
    var n=items.length,raw=drag.p0-dx/spacing;
    pos=raw;var now=performance.now();drag.samples.push([now,pos]);while(drag.samples.length>2&&now-drag.samples[0][0]>100)drag.samples.shift();
    var s0=drag.samples[0],dtS=(now-s0[0])/1000;vel=dtS>0?(pos-s0[1])/dtS:0;e.preventDefault();userHold=now;
  });
  function release(e,cancel){
    if(!drag||(e&&e.pointerId!==drag.id))return;var D2=drag;drag=null;stage.classList.remove("drag");userHold=performance.now();
    if(D2.moved){var now=performance.now(),s0=D2.samples[0],dtS=(now-s0[0])/1000,v=dtS>0.005?(pos-s0[1])/dtS:vel;if(now-D2.samples[D2.samples.length-1][0]>90)v=0;
      v=clamp(v,-7,7);vel=v*0.6;target=Math.round(pos+v*0.1);kick()}
    else if(!cancel&&D2.card){var n=items.length,k=+D2.card.dataset.k,d=mod(k-pos+n/2,n)-n/2;if(Math.abs(d)<0.5)openCenter();else go(Math.round(d))}
  }
  stage.addEventListener("pointerup",function(e){release(e,false)});
  stage.addEventListener("pointercancel",function(e){release(e,true)});
  /* scrubber */
  var scrub=$("#rScrub"),sFill=$("#rsFill"),sKnob=$("#rsKnob"),sTip=$("#rsTip"),sDrag=null;
  function scrubPaint(){var n=items.length;if(!n||!scrub)return;var p=n>1?clamp(mod(pos+0.0001,n)/(n-1),0,1):0,w=scrub.clientWidth||300;if(pos<0)p=0;
    sFill.style.transform="scaleX("+p.toFixed(4)+")";sKnob.style.transform="translate3d("+(p*w).toFixed(1)+"px,0,0)";var ix=clamp(Math.round(p*(n-1)),0,n-1)+1;sTip.textContent=("0"+ix).slice(-2)+" / "+("0"+n).slice(-2);scrub.setAttribute("aria-valuemax",n);scrub.setAttribute("aria-valuenow",ix)}
  function scrubTo(e){var rc=scrub.getBoundingClientRect(),n=items.length,p=clamp((e.clientX-rc.left)/rc.width,0,1);pos=p*(n-1);vel=0;target=pos;ahead(pos);render()}
  if(scrub){
    scrub.addEventListener("pointerdown",function(e){if(e.button!==undefined&&e.button!==0)return;sDrag=e.pointerId;try{scrub.setPointerCapture(e.pointerId)}catch(_){}scrub.classList.add("drag");if(playing){playing=false;paintPlay()}userHold=performance.now();drag={scrub:true,id:-1};scrubTo(e);kick();e.preventDefault()});
    scrub.addEventListener("pointermove",function(e){if(sDrag!==e.pointerId)return;scrubTo(e);userHold=performance.now()});
    var sEnd=function(e){if(sDrag!==e.pointerId)return;sDrag=null;drag=null;scrub.classList.remove("drag");target=Math.round(pos);userHold=performance.now();kick()};
    scrub.addEventListener("pointerup",sEnd);scrub.addEventListener("pointercancel",sEnd);
    scrub.addEventListener("keydown",function(e){if(e.key==="ArrowRight"||e.key==="ArrowUp"){e.preventDefault();userHold=performance.now();go(1)}else if(e.key==="ArrowLeft"||e.key==="ArrowDown"){e.preventDefault();userHold=performance.now();go(-1)}});
  }
  stage.addEventListener("wheel",function(e){var dx=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:(e.shiftKey?e.deltaY:0);if(!dx)return;e.preventDefault();
    var now=Date.now();if(now-wheelT>250)wheelAcc=0;wheelT=now;wheelAcc+=dx;userHold=performance.now();while(Math.abs(wheelAcc)>=60){go(wheelAcc>0?1:-1);wheelAcc-=wheelAcc>0?60:-60}},{passive:false});
  stage.addEventListener("mouseenter",function(){hover=true});stage.addEventListener("mouseleave",function(){hover=false});
  if("IntersectionObserver" in window)new IntersectionObserver(function(en){inView=en[0].isIntersecting},{threshold:0.3}).observe(stage);else inView=true;
  /* autoplay with Apple-style progress dots */
  (function tick(now){
    var dt=Math.min(0.1,(now-lastTick)/1000);lastTick=now;
    var paused=!playing||!inView||hover||drag||document.hidden||lb.classList.contains("open")||!introGone||(now-userHold<4000);
    if(!paused&&!running){dwell+=dt;var d=dots[lastIdx];if(d)d.style.setProperty("--p",Math.min(1,dwell/DWELL).toFixed(3));if(dwell>=DWELL){dwell=0;if(d)d.classList.add("done");go(1)}}
    requestAnimationFrame(tick);
  })(performance.now());
  function tilt(){if(reduce){tiltP=1;return}var rc=stage.getBoundingClientRect(),vh=window.innerHeight||800,p=clamp((vh-rc.top)/(vh*0.72),0,1),e=1-Math.pow(1-p,3);if(Math.abs(e-tiltP)>0.002){tiltP=e;if(!running)render()}}
  window.addEventListener("scroll",tilt,{passive:true});tilt();
  var rto;window.addEventListener("resize",function(){clearTimeout(rto);rto=setTimeout(function(){layout();wSize();render();movePill()},120)});
  layout();wSize();wSeed();setCat(0,false);tilt();render();setTimeout(movePill,60);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(movePill);
  window.OBRoller={go:go,st:function(){return {pos:pos,target:target,n:items.length,cat:cat,wind:wv,scv:scV,inView:inView}}};
  var warmed=false;function warm(){if(warmed)return;warmed=true;if(touchy){allIn=true;return}var all=[];RC.forEach(function(c){c[1].forEach(function(x){if(all.indexOf(x.id)<0)all.push(x.id)})});var i=0;(function nx(){if(i>=all.length){allIn=true;if(!running)render();return}var id=all[i++],im=new Image();im.onload=function(){if(!touchy)paintCv(id,im);setTimeout(nx,touchy?60:20)};im.onerror=function(){setTimeout(nx,20)};im.src="media/"+(touchy?"s":"t")+"/"+id+".webp"})()}
  var wt=setInterval(function(){if(introGone){clearInterval(wt);setTimeout(warm,600)}},400);
});

/* ---------- hero word flip + a drawn picture for each word ---------- */
later("flip",function(){
  var words=["events","urban renewal","construction","municipalities","solar farms","real estate"],i=0,fw=$("#flipWord"),art=$("#flipArt");
  /* line drawings, 64x64; entries starting with "!" use the accent colour */
  var ART=[
    ["M5 51h54","M9 51V17M55 51V17","M7 17h50","M19 17v4M32 17v4M45 17v4","!M19 22l-6 18M19 22l6 18M45 22l-6 18M45 22l6 18","M21 51c0-4.4 6-4.4 6 0M29 51c0-5.4 7-5.4 7 0M38 51c0-4.4 6-4.4 6 0","!M32 26l1.7 3.5 3.8.5-2.8 2.6.7 3.8L32 35.2 28.6 37l.7-3.8-2.8-2.6 3.8-.5z"],
    ["M5 54h54","M9 54V41l8-6 8 6v13","M15 54v-7h4v7","M35 54V15h17v39","!M40 23h7M40 30h7M40 37h7M40 44h7","!M20 27c2-8 6-12 11-13","!M27 10l4.5 4-5 3.5"],
    ["M5 54h54","M18 54V9","M13 54h10","M8 15h46","M18 9l15 6M18 9l-9 6","M34 54V37h19v17","M34 45.5h19M43.5 37v17","M45 15v12","!M45 27c3.4 0 3.4 5.4 0 5.4"],
    ["M9 27l23-14 23 14z","M12 31h40","M18 31v17M27 31v17M37 31v17M46 31v17","M10 48h44","M7 54h50","M32 13V5","!M32 5h8l-2.2 2.6L40 10.2h-8"],
    ["M5 53h54","M8 45l8-19h30l8 19z","M26 26l-3 19M37 26l3 19M12 35.5h40","M21 45v8M43 45v8","!M48 13.5a5.5 5.5 0 1 0 0 .01","!M48 3.5v2.4M48 21v2.4M38 13.5h2.4M55.6 13.5H58M41 6.5l1.7 1.7M53.3 18.8L55 20.5M55 6.5l-1.7 1.7M42.7 18.8L41 20.5"],
    ["M4 53h56","M7 31l18-16 18 16","M11 28v25h28V28","M21 53V41h8v12","M45 53V11h13v42","!M49.5 19h4M49.5 27h4M49.5 35h4M49.5 43h4","!M16 34h5v5h-5z"]
  ];
  function build(k){if(!art)return;var h="",n=0;ART[k].forEach(function(d){var a=d.charAt(0)==="!";if(a)d=d.slice(1);h+='<path pathLength="1" d="'+d+'"'+(a?' class="a"':'')+' style="--o:'+n+'"/>';n++});art.innerHTML=h;[].forEach.call(art.children,function(p,ix){p.style.setProperty("--r",n-1-ix)})}
  function drawArt(k){if(!art)return;art.classList.remove("draw","erase");build(k);void art.getBoundingClientRect();requestAnimationFrame(function(){art.classList.add("draw")})}
  build(0);if(art)art.classList.add("draw");
  if(!fw||reduce)return;
  if(art){art.classList.remove("draw");var st=setInterval(function(){if(introGone){clearInterval(st);setTimeout(function(){drawArt(0)},1100)}},150)}
  setInterval(function(){if(document.hidden||!introGone)return;fw.classList.remove("in");fw.classList.add("out");if(art){art.classList.remove("draw");art.classList.add("erase")}
    setTimeout(function(){i=(i+1)%words.length;fw.textContent=words[i];fw.classList.remove("out");void fw.offsetWidth;fw.classList.add("in");drawArt(i)},430)},3200);
});
/* ---------- services: reveal on scroll, play the clip that is in view ---------- */
later("services",function(){
  var grid=$("#svcGrid");if(!grid)return;
  var SV=[
    {t:"Events",d:"Aerial shots of the venue, the crowd and the atmosphere.",v:"e0782",tv:"e0782n"},
    {t:"Urban renewal & demolition",d:"Every stage documented, from the old building to the new one.",v:"r0102"},
    {t:"Construction progress",d:"Regular flights that follow the build from groundwork to handover.",v:"t090B"},
    {t:"Municipalities",d:"City projects, parks and public spaces, seen from above.",v:"r0167"},
    {t:"Solar & infrastructure",d:"Progress and inspection footage for energy and utility sites.",v:"g0133"},
    {t:"Real estate & brands",d:"Marketing films that show a property and everything around it.",v:"tEA67"}
  ];
  var VBY={};VIDEOS.forEach(function(v){VBY[v.id]=v});
  SV.forEach(function(s,k){
    var b=el("button","sv");b.type="button";b.style.setProperty("--k",k%3);
    var poster="media/t/"+(s.p||s.v||s.img)+".webp";
    var im=el("img");im.alt="";im.loading="lazy";im.decoding="async";im.src=poster;b.appendChild(im);
    if(s.v&&VBY[s.v]){var v=el("video");v.muted=true;v.loop=true;v.playsInline=true;v.setAttribute("playsinline","");v.preload="none";v.dataset.src="media/v/"+(s.tv||s.v)+".mp4";v.setAttribute("aria-hidden","true");
      if(s.at){v.addEventListener("loadedmetadata",function(){try{v.currentTime=s.at}catch(_){}});v.addEventListener("timeupdate",function(){if(v.currentTime<s.at-0.3){try{v.currentTime=s.at}catch(_){}}})}
      v.addEventListener("playing",function(){v.classList.add("on")});b.appendChild(v);b._v=v}
    var isV=!!(s.v&&VBY[s.v]);b.insertAdjacentHTML("beforeend",'<span class="num">0'+(k+1)+'</span>'+(isV?'<span class="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></span>':'<span class="go ph" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><circle cx="9" cy="10.5" r="1.6"/><path d="M20.5 16l-5-5-7.5 7.5"/></svg></span>')+'<span class="txt"><h3></h3><p></p></span>');
    b.querySelector("h3").textContent=s.t;b.querySelector("p").textContent=s.d;
    b.setAttribute("aria-label",s.t+". "+s.d);
    b.addEventListener("click",function(){
      if(s.v&&VBY[s.v])openWith([VBY[s.v]],"videos",0);
      else{var cs=s.cats||["s"],list=PHOTOS.filter(function(p){return cs.indexOf(p.c)>=0});if(list.length)openWith(list,"photos",0)}
    });
    grid.appendChild(b);
  });
  var tiles=[].slice.call(grid.children);
  if(!("IntersectionObserver" in window)){tiles.forEach(function(t){t.classList.add("vis")});return}
  var rev=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("vis");rev.unobserve(e.target)}})},{threshold:0.15});
  tiles.forEach(function(t){rev.observe(t)});
  if(reduce)return;
  function vStop(v,drop){if(!v.paused)v.pause();if(drop&&v.getAttribute("src")){v.classList.remove("on");v.removeAttribute("src");try{v.load()}catch(_){}}}
  function vPlay(v){if(!v.getAttribute("src")&&v.dataset.src)v.src=v.dataset.src;var p=v.play();if(p&&p.catch)p.catch(function(){})}
  var play;
  if(!canHover){
    /* phones: one film at a time. The card that is most on screen plays; every other one lets go of its film completely. */
    var cur=null;play=new IntersectionObserver(function(en){en.forEach(function(e){e.target._r=e.isIntersecting?e.intersectionRatio:0});
      var best=null;tiles.forEach(function(t){if(t._v&&(t._r||0)>=0.6&&(!best||t._r>best._r+0.05))best=t});
      if(!introGone||document.hidden)best=null;
      if(best!==cur){if(cur&&cur._v)vStop(cur._v,true);cur=best;if(cur)vPlay(cur._v)}
      tiles.forEach(function(t){if(t!==cur&&t._v&&t._v.getAttribute("src"))vStop(t._v,true)})},{threshold:[0,0.3,0.6,0.8,1]});
  }else play=new IntersectionObserver(function(en){en.forEach(function(e){var v=e.target._v;if(!v)return;
    if(e.intersectionRatio>=0.55&&introGone&&!document.hidden)vPlay(v);
    else vStop(v,!e.isIntersecting)})},{threshold:[0,0.55,1]});
  tiles.forEach(function(t){play.observe(t)});
  document.addEventListener("visibilitychange",function(){if(document.hidden)tiles.forEach(function(t){if(t._v&&!t._v.paused)t._v.pause()})});
});

/* ---------- motion layer ---------- */
var tileIO=null;
function fxTiles(){if(!tileIO)return;[].forEach.call(wall.querySelectorAll(".tile"),function(t){var col=t.parentNode,c=[].indexOf.call(col.parentNode.children,col);t.style.setProperty("--c",c);tileIO.observe(t)})}
(function(){
  var root=document.documentElement,prog=$("#sprog"),mq=$("#mqRow");
  /* marquee content (also shown, static, when motion is reduced) */
  if(mq){var W=["Events","Urban renewal","Construction","Municipalities","Solar","Real estate"],h="";for(var r=0;r<4;r++)W.forEach(function(w){h+="<span>"+w+"</span><i>✦</i>"});mq.innerHTML=h}
  if(reduce||!("IntersectionObserver" in window))return;
  root.classList.add("fx");
  /* hero title: split into letters */
  var h1=$(".hero h1"),N=0;
  function split(elm){[].slice.call(elm.childNodes).forEach(function(n){
    if(n.nodeType===3){var f=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(function(w){if(!w)return;if(/^\s+$/.test(w)){f.appendChild(document.createTextNode(" "));return}
      var wd=el("span","wd");w.split("").forEach(function(c){var ch=el("span","ch");ch.textContent=c;ch.style.setProperty("--n",N++);wd.appendChild(ch)});f.appendChild(wd)});elm.replaceChild(f,n)}
    else if(n.nodeType===1)split(n)})}
  if(h1){h1.setAttribute("aria-label","Or Bahar. Aerial film and photo");split(h1);window.obHero=function(html,label){h1.innerHTML=html;N=0;h1.setAttribute("aria-label",label);split(h1)}}
  /* entered: hero entrance + count-up */
  var counted=false;
  function entered(){if(root.classList.contains("entered"))return;root.classList.add("entered");
    var b=$(".stats b");if(b&&!counted){counted=true;var t0=performance.now()+900;(function cu(now){var p=Math.max(0,Math.min(1,(now-t0)/1300));p=1-Math.pow(1-p,3);b.textContent=Math.round(10*p)+"+";if(p<1)requestAnimationFrame(cu)})(performance.now())}}
  var ew=setInterval(function(){if(introGone||root.classList.contains("entered")){clearInterval(ew);entered()}},120);
  window.obFxEnter=function(){setTimeout(entered,420)};
  /* reveal on scroll */
  var rev=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");rev.unobserve(e.target);(function(t){setTimeout(function(){t.classList.add("done")},1400)})(e.target)}})},{threshold:0.12,rootMargin:"0px 0px -6% 0px"});
  function mark(sel,cls,stagger){[].forEach.call(document.querySelectorAll(sel),function(e,i){e.classList.add(cls);if(stagger)e.style.setProperty("--s",i);rev.observe(e)})}
  [].forEach.call(document.querySelectorAll(".svc-head h2,.rhead h2,.ghead h2,.about h2"),function(h){var w=el("span","rvi");while(h.firstChild)w.appendChild(h.firstChild);h.appendChild(w)});
  mark(".svc-head h2,.rhead h2,.ghead h2,.about h2","rv");
  mark(".svc-head p,.rchips,.rcap,.rctl,.about .wrap > div:first-child > p","rvu");
  mark(".creds > div","rvu",true);
  tileIO=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");tileIO.unobserve(e.target)}})},{threshold:0.06,rootMargin:"0px 0px -4% 0px"});
  /* service tiles: 3D tilt after their reveal has finished */
  [].forEach.call(document.querySelectorAll(".sv"),function(t){
    var mo=new MutationObserver(function(){if(t.classList.contains("vis")){mo.disconnect();setTimeout(function(){t.classList.add("rdy")},1500)}});mo.observe(t,{attributes:true,attributeFilter:["class"]});
    if(!canHover)return;
    t.addEventListener("pointermove",function(e){if(!t.classList.contains("rdy"))return;var r=t.getBoundingClientRect();t.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*9+"deg");t.style.setProperty("--rx",(.5-(e.clientY-r.top)/r.height)*7+"deg")});
    t.addEventListener("pointerleave",function(){t.style.setProperty("--ry","0deg");t.style.setProperty("--rx","0deg")})});
  /* magnetic buttons */
  if(canHover){[].forEach.call(document.querySelectorAll(".top .cta,.cta.big,.cplay,#sndBtn"),function(b){b.setAttribute("data-mag","");
    b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.translate=((e.clientX-r.left-r.width/2)*0.28).toFixed(1)+"px "+((e.clientY-r.top-r.height/2)*0.36).toFixed(1)+"px"});
    b.addEventListener("pointerleave",function(){b.style.translate="0px 0px"})})}
  /* cursor badge over the two stages */
  var cur=null,cx=0,cy=0,tx=0,ty=0,curOn=false;
  if(canHover){cur=el("div","cur");cur.setAttribute("aria-hidden","true");document.body.appendChild(cur);root.classList.add("hascur");
    [["#rstage","Drag"],["#cstage","Play"]].forEach(function(p){var s=$(p[0]);if(!s)return;
      s.addEventListener("pointermove",function(e){if(e.pointerType!=="mouse")return;tx=e.clientX;ty=e.clientY;var over=!e.target.closest("button");if(over&&!curOn){cx=tx;cy=ty}curOn=over;cur.textContent=p[1];cur.classList.toggle("on",over)});
      s.addEventListener("pointerleave",function(){curOn=false;cur.classList.remove("on")});
      s.addEventListener("pointerdown",function(){cur.classList.add("dn")});window.addEventListener("pointerup",function(){cur.classList.remove("dn")})});
    window.addEventListener("scroll",function(){if(curOn){curOn=false;cur.classList.remove("on")}},{passive:true})}
  /* scroll-driven: progress line, hero parallax, marquee */
  var hero=$(".hero"),heroIn=$(".hero-in"),hvid=$("#heroVid"),hpost=$(".hero .poster"),lastY=window.pageYOffset,vel=0,mx=0,mw=0,lt=0;
  function frame(now){
    var dt=Math.min(0.05,(now-(lt||now))/1000);lt=now;
    var y=window.pageYOffset,max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    vel+=((y-lastY)-vel)*0.18;lastY=y;
    if(prog)prog.style.transform="scaleX("+Math.min(1,y/max).toFixed(4)+")";
    if(hero&&introGone){var hh=hero.offsetHeight||1,p=Math.min(1,Math.max(0,y/hh));
      if(p<1){var tf="translate3d(0,"+(p*14).toFixed(2)+"%,0) scale("+(1+p*0.12).toFixed(4)+")";if(hvid)hvid.style.transform=tf;if(hpost)hpost.style.transform=tf;
        heroIn.style.transform="translate3d(0,"+(-p*90).toFixed(1)+"px,0)";heroIn.style.opacity=Math.max(0,1-p*1.5).toFixed(3)}}
    if(mq){if(!mw)mw=mq.scrollWidth/4;mx-=(46+Math.min(900,Math.abs(vel)*26))*dt*(vel<-0.5?-1:1);if(mw){if(mx<-mw)mx+=mw;if(mx>0)mx-=mw}
      mq.style.transform="translate3d("+mx.toFixed(1)+"px,0,0) skewX("+Math.max(-9,Math.min(9,-vel*0.35)).toFixed(2)+"deg)"}
    if(cur&&curOn){cx+=(tx-cx)*0.2;cy+=(ty-cy)*0.2;cur.style.setProperty("--x",cx.toFixed(1)+"px");cur.style.setProperty("--y",cy.toFixed(1)+"px")}
    requestAnimationFrame(frame)}
  requestAnimationFrame(frame);
  window.addEventListener("resize",function(){mw=0});
})();

/* ---------- ambient colour sampled from the hero video ---------- */
(function(){
  var cv=document.createElement("canvas");cv.width=8;cv.height=5;var cx;try{cx=cv.getContext("2d",{willReadFrequently:true})}catch(e){}
  if(!cx||!hv)return;var cur=[24,34,44];
  function samp(){if(document.hidden||hv.paused||hv.readyState<2)return;try{cx.drawImage(hv,0,0,8,5);var d=cx.getImageData(0,0,8,5).data,r=0,g=0,b=0,n=0;for(var i=0;i<d.length;i+=4){r+=d[i];g+=d[i+1];b+=d[i+2];n++}
    var c=[r/n,g/n,b/n],mx=Math.max(c[0],c[1],c[2])||1,k=Math.min(1.6,150/mx);c=c.map(function(v){return Math.round(Math.min(255,v*k))});
    cur=cur.map(function(v,i){return Math.round(v*0.4+c[i]*0.6)});document.documentElement.style.setProperty("--amb",cur.join(" "))}catch(e){}}
  setInterval(samp,1200);
})();
var yrEl=$("#yr");if(yrEl)yrEl.textContent=new Date().getFullYear();
/* ---------- video cinema: featured stage + filmstrip ---------- */
var Cine=(function(){
  var root=$("#cine"),stage=$("#cstage"),rail=$("#crail"),chipsEl=$("#cchips"),pill=$("#cpill"),info=stage.querySelector(".cinfo"),cT=$("#cT"),cK=$("#cK"),cNum=$("#cNum"),bar=$("#cBar"),tog=$("#cTog");
  var layers=[].slice.call(stage.querySelectorAll(".clayer")),front=0;
  var CATS=[["All",function(){return true}],["Urban renewal",function(v){return v.k==="urban"}],["Construction",function(v){return v.k==="build"}],["Solar & energy",function(v){return v.k==="solar"}],["Real estate & brands",function(v){return v.k==="brand"}],["Behind the scenes",function(v){return v.k==="bts"}]];
  CATS=CATS.filter(function(c){return VIDEOS.some(c[1])});
  var cat=-1,list=[],idx=0,cards=[],shown=false,inView=false,playing=!reduce,hover=false,t=0,dwell=9,lastT=0,raf=0,lastGo=0;
  var IC_P='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',IC_G='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg>';
  function paintTog(){tog.innerHTML=playing?IC_P:IC_G;tog.setAttribute("aria-label",playing?"Pause autoplay":"Resume autoplay")}
  CATS.forEach(function(c,i){var b=el("button","cchip");b.type="button";b.setAttribute("role","tab");b.dataset.i=i;b.textContent=c[0];chipsEl.appendChild(b)});
  chipsEl.addEventListener("click",function(e){var b=e.target.closest(".cchip");if(b)setCat(+b.dataset.i)});
  function movePill(){var b=chipsEl.querySelector('.cchip[aria-selected="true"]');if(!b)return;pill.style.width=b.offsetWidth+"px";pill.style.transform="translateX("+b.offsetLeft+"px)";
    try{var cr=chipsEl.getBoundingClientRect(),br=b.getBoundingClientRect();if(br.left<cr.left||br.right>cr.right)chipsEl.scrollBy({left:(br.left+br.width/2)-(cr.left+cr.width/2),behavior:"smooth"})}catch(_){}}
  function kindLabel(v){return v.s+" · "+fmtDur(v.d)}
  function setCat(i){
    if(i===cat)return;cat=i;
    chipsEl.querySelectorAll(".cchip").forEach(function(b,k){b.setAttribute("aria-selected",String(k===i))});movePill();
    list=VIDEOS.filter(CATS[i][1]);
    rail.innerHTML="";cards=list.map(function(v,k){
      var b=el("button","ccard");b.type="button";b.setAttribute("role","tab");b.dataset.k=k;b.style.setProperty("--k",Math.min(k,14));
      b.innerHTML='<span class="th"><img alt="" loading="lazy" decoding="async" draggable="false"><span class="du"></span><span class="bar"><i></i></span></span><span class="nm"></span><span class="sb"></span>';
      b.querySelector("img").src="media/t/"+v.id+".webp";b.querySelector(".du").textContent=fmtDur(v.d);b.querySelector(".nm").textContent=v.t;b.querySelector(".sb").textContent=v.s;
      b.setAttribute("aria-label",v.t+", "+fmtDur(v.d));rail.appendChild(b);return b});
    rail.scrollLeft=0;idx=-1;go(0,1,true);
  }
  function loadLayer(L,v){
    var bg=L.querySelector(".cbg"),po=L.querySelector(".cpost"),vd=L.querySelector("video");
    L.classList.toggle("port",v.h>v.w);
    bg.src=po.src="media/t/"+v.id+".webp";
    vd.classList.remove("on");vd.pause();vd.removeAttribute("src");try{vd.load()}catch(_){}
    vd.dataset.src="media/v/"+v.id+".mp4";
  }
  function playFront(){var vd=layers[front].querySelector("video");if(!vd)return;
    var want=shown&&inView&&introGone&&!document.hidden&&!lb.classList.contains("open")&&!reduce;
    if(want){if(!vd.getAttribute("src")&&vd.dataset.src){vd.src=vd.dataset.src;vd.onplaying=function(){vd.classList.add("on")}}var p=vd.play();if(p&&p.catch)p.catch(function(){})}
    else if(!vd.paused)vd.pause()}
  function setTitle(v,animate){
    cK.textContent=kindLabel(v);cNum.textContent=("0"+(idx+1)).slice(-2)+" / "+("0"+list.length).slice(-2);
    cT.classList.remove("fade");cT.innerHTML="";
    cT.setAttribute("data-noi18n","");tx(v.t).split(" ").forEach(function(w,k){var s=el("span","w"),i=el("i");i.textContent=w;i.style.setProperty("--d",k);if(!animate)i.style.animation="none",i.style.transform="none";s.appendChild(i);cT.appendChild(s);cT.appendChild(document.createTextNode(" "))});
    info.classList.remove("fade");
  }
  window.addEventListener("ob-lang",function(){if(list.length&&idx>=0&&list[idx])setTitle(list[idx],false)});
  function go(n,dir,instant){
    if(!list.length)return;n=((n%list.length)+list.length)%list.length;if(n===idx&&!instant)return;
    var now=performance.now();if(!instant&&now-lastGo<380)return;lastGo=now;
    if(dir===undefined)dir=n>idx?1:-1;
    var prevIdx=idx;idx=n;t=0;var v=list[n];
    var nf=instant&&prevIdx===-1&&!layers[front].querySelector(".cpost").getAttribute("src")?front:1-front;
    var L=layers[nf],O=layers[1-nf];loadLayer(L,v);
    root.style.setProperty("--glow",v.bg||"#1a2530");
    layers.forEach(function(x){x.classList.remove("in-r","in-l","out-r","out-l","top")});
    if(nf!==front&&!instant){void L.offsetWidth;L.classList.add("top",dir>0?"in-r":"in-l");O.classList.add(dir>0?"out-r":"out-l");
      cT.classList.add("fade");info.classList.add("fade");
      setTimeout(function(){if(list[idx]===v)setTitle(v,true)},320);
      var ov=O.querySelector("video");setTimeout(function(){if(layers[front]!==O){ov.pause();ov.removeAttribute("src");try{ov.load()}catch(_){}ov.classList.remove("on");O.classList.remove("out-r","out-l")}},1250);
    }else{L.classList.add("top");O.classList.remove("top");setTitle(v,!instant)}
    front=nf;playFront();
    cards.forEach(function(c,k){c.setAttribute("aria-selected",String(k===n));c.style.setProperty("--p",0)});
    var c=cards[n];if(c&&!instant){var rr=rail.getBoundingClientRect(),cr=c.getBoundingClientRect();if(cr.left<rr.left+8||cr.right>rr.right-8){try{rail.scrollTo({left:rail.scrollLeft+(cr.left-rr.left)-rr.width/2+cr.width/2,behavior:reduce?"auto":"smooth"})}catch(_){rail.scrollLeft+=cr.left-rr.left}}}
    dwell=Math.max(7,Math.min(12,v.d||9));
  }
  function open(){if(list[idx])openWith(list,"videos",idx)}
  /* controls */
  $("#cPrev").addEventListener("click",function(e){e.stopPropagation();go(idx-1,-1)});
  $("#cNext").addEventListener("click",function(e){e.stopPropagation();go(idx+1,1)});
  $("#cOpen").addEventListener("click",function(e){e.stopPropagation();open()});
  tog.addEventListener("click",function(e){e.stopPropagation();playing=!playing;paintTog()});
  stage.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){e.preventDefault();go(idx+1,1)}else if(e.key==="ArrowLeft"){e.preventDefault();go(idx-1,-1)}else if(e.key==="Enter"||e.key===" "){if(e.target===stage){e.preventDefault();open()}}});
  stage.addEventListener("mouseenter",function(){hover=true});stage.addEventListener("mouseleave",function(){hover=false});
  /* swipe on the stage */
  var sx=null,sy=0,moved=false;
  stage.addEventListener("pointerdown",function(e){if(e.target.closest("button"))return;sx=e.clientX;sy=e.clientY;moved=false});
  stage.addEventListener("pointermove",function(e){if(sx===null)return;if(Math.abs(e.clientX-sx)>10)moved=true});
  stage.addEventListener("pointerup",function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;
    if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.2){go(idx+(dx<0?1:-1),dx<0?1:-1)}else if(!moved&&!e.target.closest("button"))open()});
  stage.addEventListener("pointercancel",function(){sx=null});
  /* filmstrip: click, mouse drag, tilt */
  var dr=null;
  rail.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse")return;dr={x:e.clientX,s:rail.scrollLeft,m:false}});
  window.addEventListener("pointermove",function(e){if(!dr)return;var dx=e.clientX-dr.x;if(Math.abs(dx)>6){dr.m=true;rail.classList.add("drag")}if(dr.m)rail.scrollLeft=dr.s-dx});
  window.addEventListener("pointerup",function(){if(!dr)return;var m=dr.m;dr=null;rail.classList.remove("drag");if(m){rail._block=true;setTimeout(function(){rail._block=false},60)}});
  rail.addEventListener("click",function(e){if(rail._block)return;var c=e.target.closest(".ccard");if(!c)return;var k=+c.dataset.k;if(k===idx){open();return}go(k,k>idx?1:-1);
    var top=stage.getBoundingClientRect().top;if(top<0||top>window.innerHeight*0.5){try{stage.scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"})}catch(_){}}});
  if(canHover&&!reduce){rail.addEventListener("pointermove",function(e){var c=e.target.closest(".ccard");if(!c)return;var th=c.querySelector(".th"),r=th.getBoundingClientRect();th.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*14+"deg");th.style.setProperty("--rx",(.5-(e.clientY-r.top)/r.height)*10+"deg")});
    rail.addEventListener("pointerout",function(e){var c=e.target.closest(".ccard");if(c&&!c.contains(e.relatedTarget)){var th=c.querySelector(".th");th.style.setProperty("--ry","0deg");th.style.setProperty("--rx","0deg")}})}
  /* autoplay clock */
  function tick(now){raf=0;var dt=Math.min(0.3,(now-(lastT||now))/1000);lastT=now;
    var run=playing&&shown&&inView&&!hover&&introGone&&!document.hidden&&!lb.classList.contains("open");
    if(run){t+=dt;if(t>=dwell){go(idx+1,1)}}
    var p=Math.min(1,t/dwell);bar.style.transform="scaleX("+p+")";if(cards[idx])cards[idx].style.setProperty("--p",p.toFixed(3));
    if(shown)raf=requestAnimationFrame(tick)}
  function loop(){if(!raf){lastT=0;raf=requestAnimationFrame(tick)}}
  if("IntersectionObserver" in window){new IntersectionObserver(function(en){inView=en[0].intersectionRatio>0.35;playFront()},{threshold:[0,0.35,0.7]}).observe(stage)}else inView=true;
  document.addEventListener("visibilitychange",playFront);
  window.addEventListener("resize",movePill);
  paintTog();
  return{
    show:function(){root.hidden=false;shown=true;if(cat<0)setCat(0);else movePill();playFront();loop()},
    hide:function(){shown=false;root.hidden=true;playFront()},
    sync:playFront,go:function(n){go(n)},st:function(){return{cat:cat,idx:idx,n:list.length,t:list[idx]&&list[idx].t}}
  };
})();

/* ---------- quick contact pop-up + drone-delivery finale ---------- */
var Contact=(function(){
  var fab=$("#fab"),dock=$("#dock"),fin=$("#fin");if(!fab||!dock||!fin)return null;
  var WA_BASE="https://wa.me/972533367586?text=";
  var TYPES=[["אירוע","לאירוע"],["התחדשות עירונית","לפרויקט התחדשות עירונית"],["בנייה","לפרויקט בנייה"],["עירייה","לפרויקט עירוני"],["משהו אחר",""]];
  var pick=-1;
  function waUrl(kind){var he=document.documentElement.lang==="he";if(he&&kind==="offer")return WA_BASE+encodeURIComponent("היי אור, ראיתי את גלריית הצילומים שלך ואשמח לממש את ההנחה של 10% לצילום ראשון.");if(he&&!kind)kind="he";var m=kind==="he"?("היי אור, ראיתי את גלריית הצילומים שלך ואשמח לשמוע על צילום רחפן"+(pick>=0&&TYPES[pick][1]?" "+TYPES[pick][1]:"")+"."):kind==="offer"?"Hi Or, I saw your aerial gallery and would like to use the 10% first-shoot discount.":"Hi Or, I saw your aerial gallery and would like to hear about a drone shoot.";return WA_BASE+encodeURIComponent(m)}
  function paintWa(){[].forEach.call(document.querySelectorAll("[data-wa]"),function(a){a.href=waUrl(a.getAttribute("data-wa"))})}
  var chipsEl=$("#finChips");
  TYPES.forEach(function(t,i){var b=el("button","fchip");b.type="button";b.setAttribute("role","radio");b.setAttribute("aria-checked","false");b.textContent=t[0];b.dataset.i=i;chipsEl.appendChild(b)});
  chipsEl.addEventListener("click",function(e){var b=e.target.closest(".fchip");if(!b)return;var i=+b.dataset.i;pick=pick===i?-1:i;[].forEach.call(chipsEl.children,function(c,k){c.setAttribute("aria-checked",String(k===pick))});paintWa()});
  paintWa();window.addEventListener("ob-lang",paintWa);

  /* ----- floating button + welcome offer: a quadcopter flies in from depth, hovers above the boarding pass and scans it into view ----- */
  var dockOpen=false,dockTimer=0,finShown=visit("og-fin")==="1",finState=0,dockSeen=visit("og-dock")==="1";
  var dPass=$("#dkPass"),dCard=$("#dkCard"),dFly=$("#dkFly"),dTilt=$("#dkTilt"),dCam=$("#dkCam"),dSh=$("#dkSh"),dNum=$("#dkNum"),dPerf=$("#dkPerf");
  var dRaf=0,dT=0,dLast=0,dFocus=null,dClosing=0,dTm=[],dPhase=0,dNumAt=-1,dOpenAt=0;
  var dS={x:0,y:0,s:1,vx:0,vy:0,vs:0,r:0,px:0,py:0,tx:0,ty:0,lk:0,fl:0};
  /* same visit, page loaded again, and the browser keeps no storage: better no offer than a second one */
  if(back&&!dockSeen){visit("og-t","1");if(visit("og-t")!=="1")dockSeen=true}
  function fabOn(v){if(v){fab.hidden=false;requestAnimationFrame(function(){requestAnimationFrame(function(){fab.classList.add("on")})})}else fab.classList.remove("on")}
  function dNotch(){var h=dPass.offsetHeight;if(h)dPass.style.setProperty("--py",((dPerf.offsetTop+1)/h*100).toFixed(2)+"%")}
  function dAt(fn,ms){dTm.push(setTimeout(fn,ms))}
  function dClear(){dTm.forEach(clearTimeout);dTm=[]}
  function dPose(){
    var S=dS,yaw=Math.sin(dT*0.47)*5+S.px*9+Math.max(-10,Math.min(10,S.vx*0.02));
    dFly.style.transform="translate3d("+S.x.toFixed(1)+"px,"+S.y.toFixed(1)+"px,0) scale("+Math.max(0.05,S.s).toFixed(3)+")";
    dTilt.style.transform="perspective(900px) rotateY("+yaw.toFixed(2)+"deg) rotate("+S.r.toFixed(2)+"deg)";
    /* the gimbal keeps the camera level while the airframe banks; it tips down a little while it scans */
    dCam.style.transform="rotate("+(-S.r).toFixed(2)+"deg) translateY("+(S.lk*5).toFixed(2)+"%)";
    var near=Math.max(0,Math.min(1,S.s))*Math.max(0,1-Math.max(0,-S.y)/170)*Math.max(0,1-Math.abs(S.x)/220);
    dSh.style.opacity=(near*0.9).toFixed(3);dSh.style.transform="translate3d("+(S.x*0.6).toFixed(1)+"px,0,0) scale("+(1.16-near*0.16).toFixed(3)+")";
    dCard.style.transform="rotateX("+(-S.py*5).toFixed(2)+"deg) rotateY("+(S.px*7).toFixed(2)+"deg) translate3d(0,"+(Math.sin(dT*1.2)*-3*S.fl).toFixed(1)+"px,0)";
  }
  function dFrame(now){
    dRaf=0;if((!dockOpen&&!dClosing)||document.hidden)return;
    var dt=Math.min(0.2,(now-(dLast||now))/1000);dLast=now;dT+=dt;
    var S=dS,e=Math.min(1,dt*5);S.px+=(S.tx-S.px)*e;S.py+=(S.ty-S.py)*e;
    /* where the aircraft wants to be: hovering with a slow drift, leaning toward the pointer; when the pop-up closes it climbs away */
    var gx=Math.sin(dT*0.61)*5+S.px*34,gy=Math.sin(dT*1.9)*4+Math.sin(dT*0.83)*2.5+S.py*14,gs=1,k=22,c=6.6;
    if(dClosing){gx=window.innerWidth*0.34;gy=-window.innerHeight*0.75;gs=0.3;k=26;c=6}
    for(var i=0,n=Math.max(1,Math.ceil(dt/0.008)),h=dt/n;i<n;i++){S.vx+=((gx-S.x)*k-S.vx*c)*h;S.vy+=((gy-S.y)*k-S.vy*c)*h;S.vs+=((gs-S.s)*18-S.vs*7.6)*h;S.x+=S.vx*h;S.y+=S.vy*h;S.s+=S.vs*h}
    S.r+=(Math.max(-15,Math.min(15,S.vx*0.05))+Math.sin(dT*1.13)*1.2-S.r)*Math.min(1,dt*8);
    S.lk+=((dPhase===1?1:0)-S.lk)*Math.min(1,dt*6);S.fl+=((dPhase===2?1:0)-S.fl)*Math.min(1,dt*2);
    dPose();
    if(dNumAt>=0){var p=Math.max(0,Math.min(1,(dT-dNumAt)/0.85)),v=String(Math.round(10*(1-Math.pow(1-p,3))));if(dNum.textContent!==v)dNum.textContent=v;
      if(p>=1){dNumAt=-1;var bx=dNum.parentNode;bx.classList.remove("tick");void bx.offsetWidth;bx.classList.add("tick")}}
    dRaf=requestAnimationFrame(dFrame);
  }
  function dRun(){if(!dRaf&&!reduce&&(dockOpen||dClosing)&&!document.hidden){dLast=0;dRaf=requestAnimationFrame(dFrame)}}
  function dHalt(){if(dRaf){cancelAnimationFrame(dRaf);dRaf=0}}
  function openDock(auto){
    if(dockOpen||finState||dClosing)return;dockOpen=true;dockSeen=true;visit("og-dock","1");clearTimeout(dockTimer);dFocus=document.activeElement;dOpenAt=Date.now();
    dock.classList.remove("out","dks","dkr");dock.classList.add("on","dkl");dock.setAttribute("aria-hidden","false");fab.setAttribute("aria-expanded","true");fabOn(false);lockScroll(true);
    dNotch();dClear();dNum.parentNode.classList.remove("tick");
    if(reduce){dPhase=2;dNumAt=-1;dNum.textContent="10";dock.classList.add("dks","dkr")}
    else{
      var W=window.innerWidth,H=window.innerHeight,S=dS,t1=auto?1150:980;dT=0;dPhase=0;dNumAt=-1;dNum.textContent="0";
      S.x=Math.min(420,W*0.3);S.y=-H*0.46;S.s=0.12;S.vx=-W*0.25;S.vy=H*0.3;S.vs=0;S.r=-12;S.lk=0;S.fl=0;S.px=S.py=S.tx=S.ty=0;
      dPose();dRun();
      dAt(function(){dPhase=1;dock.classList.add("dks");dNumAt=dT+0.34},t1);
      dAt(function(){dPhase=2;dock.classList.add("dkr")},t1+940);
    }
    try{dPass.focus({preventScroll:true})}catch(_){}
    dAt(function(){if(dockOpen&&!dPass.contains(document.activeElement))try{dPass.focus({preventScroll:true})}catch(_){}},90);
  }
  function closeDock(keepFabOff){
    if(!dockOpen)return;dockOpen=false;dClear();dPhase=3;dNumAt=-1;dNum.textContent="10";
    dock.classList.remove("on");dock.classList.add("out");dock.setAttribute("aria-hidden","true");fab.setAttribute("aria-expanded","false");dClosing=1;
    setTimeout(function(){dClosing=0;dHalt();dock.classList.remove("out","dks","dkr","dkl");if(!lb.classList.contains("open")&&!finState)lockScroll(false);
      if(!keepFabOff){fabOn(true);if(dFocus&&dFocus!==document.body&&dFocus.focus)try{dFocus.focus({preventScroll:true})}catch(_){}}},reduce?150:520);
  }
  fab.addEventListener("click",function(){openDock(false)});
  $("#dockX").addEventListener("click",function(e){e.stopPropagation();closeDock()});
  /* a tap anywhere outside the pass closes it (not the tap that was already on its way when it appeared) */
  dock.addEventListener("click",function(e){if(dockOpen&&!e.target.closest("#dkPass")&&Date.now()-dOpenAt>450)closeDock()});
  document.addEventListener("keydown",function(e){if(!dockOpen)return;if(e.key==="Escape"){e.preventDefault();e.stopPropagation();closeDock()}
    else if(e.key==="Tab"){var f=[].slice.call(dPass.querySelectorAll("button,a[href]"));if(!f.length)return;var ix=f.indexOf(document.activeElement);e.preventDefault();f[ix<0?(e.shiftKey?f.length-1:0):(ix+(e.shiftKey?-1:1)+f.length)%f.length].focus()}},true);
  dPass.addEventListener("click",function(e){if(e.target.closest("a"))setTimeout(function(){closeDock()},500)});
  if(canHover&&!reduce)dock.addEventListener("pointermove",function(e){dS.tx=e.clientX/window.innerWidth-.5;dS.ty=e.clientY/window.innerHeight-.5});
  window.addEventListener("resize",function(){if(dockOpen)dNotch()});
  document.addEventListener("visibilitychange",function(){if(document.hidden)dHalt();else dRun()});
  /* the one automatic pop-up of a visit: it waits while a full-screen viewer is open, the tab is in the background or the visitor is typing */
  function autoDock(){
    if(dockOpen||dockSeen||finState)return;var ae=document.activeElement;
    if(lb.classList.contains("open")||document.hidden||(ae&&/^(INPUT|TEXTAREA|SELECT)$/.test(ae.tagName)&&ae.offsetParent&&!ae.closest("#intro"))){dockTimer=setTimeout(autoDock,3000);return}
    openDock(true)}
  /* the offer appears five seconds after the visitor is inside the site */
  var iw=setInterval(function(){if(!introGone)return;clearInterval(iw);setTimeout(function(){if(!finState&&!dockOpen)fabOn(true)},1400);dockTimer=setTimeout(autoDock,5000)},200);

  /* ----- finale (never opens by itself) ----- */
  var cv=$("#finCv"),g=cv.getContext("2d"),droneEl=$("#finDrone"),pkgEl=$("#finPkg"),cardEl=$("#finCard"),shEl=$("#finShadow");
  var W=0,H=0,dpr=1,dw=210,R=110,N=9,seg=12,raf=0,T=0,lastT=0,lastFocus=null;
  var D,pts,body,released,bounces,landed,parts,rings,trail,hov,park,way,floorY,ropeA,pk,flash=0;
  function size(){W=window.innerWidth;H=window.innerHeight;dpr=Math.min(2,window.devicePixelRatio||1);cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);g.setTransform(dpr,0,0,dpr,0,0)}
  function geom(){
    dw=droneEl.offsetWidth||210;pk=pkgEl.offsetWidth||68;var cw=cardEl.offsetWidth,chh=cardEl.offsetHeight,top=H/2-chh/2;
    R=Math.max(70,Math.min(130,H*0.15));seg=R/(N-1);floorY=H/2;
    hov={x:W/2,y:Math.max(dw*0.3,H/2-60-pk/2-R-dw*0.2)};
    way={x:W*0.16,y:Math.max(dw*0.4,H*0.2)};
    park={x:W/2-cw/2+dw*0.5,y:Math.max(dw*0.2,top-dw*0.19+3)};
  }
  function anchor(){return{x:D.x,y:D.y+dw*0.2}}
  function reset(){
    size();geom();T=0;lastT=0;flash=0;released=false;bounces=0;landed=false;parts=[];rings=[];trail=[];ropeA=1;body=null;
    D={x:W+dw,y:-dw*0.5,vx:-W*0.5,vy:H*0.25,rot:-14};
    var a=anchor();pts=[];for(var i=0;i<N;i++)pts.push({x:a.x,y:a.y+i*seg,px:a.x+6,py:a.y+i*seg});
  }
  function target(){
    if(finState===3)return{x:-dw*1.5,y:-dw,k:20,c:5};
    if(landed)return{x:park.x,y:park.y,k:26,c:9};
    if(released)return{x:hov.x-dw*0.1,y:hov.y-46,k:20,c:7};
    if(T<0.2)return null;
    if(T<1.15)return{x:way.x,y:way.y,k:11,c:4.4};
    if(T<2.55)return{x:hov.x,y:hov.y,k:15,c:6.2};
    return{x:hov.x,y:hov.y+24,k:18,c:8};
  }
  function burst(x,y){
    for(var i=0;i<54;i++){var a=Math.random()*Math.PI*2,s=180+Math.random()*640;parts.push({x:x,y:y,vx:Math.cos(a)*s,vy:Math.sin(a)*s*0.7-160,l:0,m:0.55+Math.random()*0.6,r:1.4+Math.random()*2.8,c:Math.random()<0.6?"240,180,94":"255,255,255",gr:1100})}
    flash=1;rings.push({x:x,y:y,t:0,d:0.75,m:Math.min(W,H)*0.62});rings.push({x:x,y:y,t:-0.12,d:0.9,m:Math.min(W,H)*0.9});
    fin.classList.remove("shake");void fin.offsetWidth;fin.classList.add("shake");
  }
  function land(){if(landed)return;landed=true;fin.classList.add("landed");setTimeout(function(){if(finState&&finState!==3){fin.classList.add("settled");finState=2;try{$("#finX").focus({preventScroll:true})}catch(_){}}},1050)}
  function step(dt){
    T+=dt;var tg=target();
    if(tg){D.vx+=((tg.x-D.x)*tg.k-D.vx*tg.c)*dt;D.vy+=((tg.y-D.y)*tg.k-D.vy*tg.c)*dt}
    D.x+=D.vx*dt;D.y+=D.vy*dt;
    var rt=Math.max(-26,Math.min(26,D.vx*0.034));D.rot+=(rt-D.rot)*Math.min(1,dt*7);
    if(!released&&T>=3.0&&finState===1){released=true;var e=pts[N-1];body={x:e.x,y:e.y+pk/2,vx:(e.x-e.px)/dt*0.6,vy:Math.max(0,(e.y-e.py)/dt),rot:0,vr:(Math.random()<0.5?-1:1)*(120+Math.random()*120)};D.vy-=300}
    /* rope (verlet) */
    if(ropeA>0){var a=anchor(),i,k;
      for(i=1;i<N;i++){var p=pts[i],nx=p.x+(p.x-p.px)*0.985,ny=p.y+(p.y-p.py)*0.985+(i===N-1&&!released?3400:1900)*dt*dt;p.px=p.x;p.py=p.y;p.x=nx;p.y=ny}
      for(k=0;k<7;k++){pts[0].x=a.x;pts[0].y=a.y;for(i=0;i<N-1;i++){var p1=pts[i],p2=pts[i+1],dx=p2.x-p1.x,dy=p2.y-p1.y,d=Math.sqrt(dx*dx+dy*dy)||0.001,df=(d-seg)/d;if(i===0){p2.x-=dx*df;p2.y-=dy*df}else{var w2=(i+1===N-1&&!released)?0.2:0.5;p1.x+=dx*df*(1-w2);p1.y+=dy*df*(1-w2);p2.x-=dx*df*w2;p2.y-=dy*df*w2}}}
      if(released)ropeA=Math.max(0,ropeA-dt*3.2)}
    /* free-falling package */
    if(body&&!landed){body.vy+=2700*dt;body.x+=body.vx*dt;body.y+=body.vy*dt;body.rot+=body.vr*dt;body.x+=(W/2-body.x)*Math.min(1,dt*5);
      if(body.y>=floorY&&body.vy>0){body.y=floorY;bounces++;if(bounces===1){burst(body.x,floorY+pk*0.4);body.vy=-body.vy*0.3;body.vr*=-0.4}else land()}}
    /* particles */
    if(finState!==3&&!reduce){var c=Math.cos(D.rot*Math.PI/180),s=Math.sin(D.rot*Math.PI/180);[-1,1].forEach(function(sd){if(Math.random()<0.7){var ox=sd*dw*0.34,oy=-dw*0.06;parts.push({x:D.x+ox*c-oy*s+(Math.random()-.5)*dw*0.2,y:D.y+ox*s+oy*c,vx:D.vx*0.2-s*260+(Math.random()-.5)*60,vy:D.vy*0.2+c*(260+Math.random()*220),l:0,m:0.3+Math.random()*0.2,r:1,c:"220,235,245",st:1,gr:0})}})}
    for(var q=parts.length-1;q>=0;q--){var o=parts[q];o.l+=dt;if(o.l>=o.m){parts.splice(q,1);continue}o.vy+=o.gr*dt;o.x+=o.vx*dt;o.y+=o.vy*dt}
    for(var r=rings.length-1;r>=0;r--){rings[r].t+=dt;if(rings[r].t>=rings[r].d)rings.splice(r,1)}
    if(flash>0)flash=Math.max(0,flash-dt*3.4);
    trail.push({x:D.x,y:D.y});if(trail.length>18)trail.shift();
  }
  function draw(){
    g.clearRect(0,0,W,H);var i;
    if(flash>0.01){var fg=g.createRadialGradient(W/2,floorY,0,W/2,floorY,Math.max(W,H)*0.7);fg.addColorStop(0,"rgba(255,226,170,"+(flash*0.55).toFixed(3)+")");fg.addColorStop(1,"rgba(255,226,170,0)");g.fillStyle=fg;g.fillRect(0,0,W,H)}
    /* speed trail */
    var sp=Math.sqrt(D.vx*D.vx+D.vy*D.vy);if(sp>260&&trail.length>2){g.lineCap="round";for(i=1;i<trail.length;i++){g.strokeStyle="rgba(240,180,94,"+(i/trail.length*Math.min(0.5,sp/1800)).toFixed(3)+")";g.lineWidth=1+i/trail.length*dw*0.05;g.beginPath();g.moveTo(trail[i-1].x,trail[i-1].y);g.lineTo(trail[i].x,trail[i].y);g.stroke()}}
    /* shock rings */
    rings.forEach(function(r){if(r.t<0)return;var p=r.t/r.d,e=1-Math.pow(1-p,3);g.strokeStyle="rgba(240,180,94,"+((1-p)*0.75).toFixed(3)+")";g.lineWidth=0.5+(1-p)*5;g.beginPath();g.ellipse(r.x,r.y,r.m*e,r.m*e*0.42,0,0,Math.PI*2);g.stroke()});
    /* rope */
    if(ropeA>0){g.strokeStyle="rgba(233,238,242,"+(0.85*ropeA).toFixed(3)+")";g.lineWidth=2;g.lineCap="round";g.lineJoin="round";g.beginPath();g.moveTo(pts[0].x,pts[0].y);for(i=1;i<N-1;i++){var mx=(pts[i].x+pts[i+1].x)/2,my=(pts[i].y+pts[i+1].y)/2;g.quadraticCurveTo(pts[i].x,pts[i].y,mx,my)}g.lineTo(pts[N-1].x,pts[N-1].y);g.stroke()}
    /* particles */
    parts.forEach(function(o){var a=1-o.l/o.m;if(o.st){g.strokeStyle="rgba("+o.c+","+(a*0.22).toFixed(3)+")";g.lineWidth=1.2;g.beginPath();g.moveTo(o.x,o.y);g.lineTo(o.x-o.vx*0.035,o.y-o.vy*0.035);g.stroke()}else{g.fillStyle="rgba("+o.c+","+a.toFixed(3)+")";g.beginPath();g.arc(o.x,o.y,o.r*(0.4+a*0.6),0,Math.PI*2);g.fill()}});
    /* DOM actors */
    var bob=landed?Math.sin(T*2.3)*4:Math.sin(T*5)*1.5,wob=landed?Math.sin(T*1.6)*1.6:0;
    droneEl.style.transform="translate3d("+D.x.toFixed(1)+"px,"+(D.y+bob).toFixed(1)+"px,0) rotate("+(D.rot+wob).toFixed(2)+"deg)";
    var px,py,pr;
    if(body){px=body.x;py=body.y;pr=body.rot}else{var e=pts[N-1],b=pts[N-2],an=Math.atan2(e.y-b.y,e.x-b.x)-Math.PI/2;px=e.x-Math.sin(an)*pk/2;py=e.y+Math.cos(an)*pk/2;pr=an*180/Math.PI}
    pkgEl.style.transform="translate3d("+px.toFixed(1)+"px,"+py.toFixed(1)+"px,0) rotate("+pr.toFixed(1)+"deg)";
    var hgt=Math.max(0,Math.min(1,(floorY-py)/(H*0.5)));shEl.style.opacity=landed?0:(0.75*(1-hgt)).toFixed(3);shEl.style.transform="translate3d("+px.toFixed(1)+"px,"+(floorY+pk*0.55).toFixed(1)+"px,0) scale("+(0.35+0.65*(1-hgt)).toFixed(3)+")";
  }
  function frame(now){
    raf=0;if(!finState)return;var dt=Math.min(0.25,(now-(lastT||now))/1000);lastT=now;
    var n=Math.max(1,Math.ceil(dt/(1/120)));for(var i=0;i<n;i++)step(dt/n);
    draw();raf=requestAnimationFrame(frame);
  }
  function openFin(){
    if(finState)return;finShown=true;visit("og-fin","1");clearTimeout(dockTimer);closeDock(true);dClosing=0;dock.classList.remove("out");fabOn(false);
    lastFocus=document.activeElement;finState=1;fin.classList.remove("landed","settled","out","shake");fin.classList.add("on");fin.setAttribute("aria-hidden","false");lockScroll(true);
    if(reduce){fin.classList.add("landed","settled");finState=2;setTimeout(function(){$("#finX").focus()},60);return}
    reset();draw();raf=requestAnimationFrame(frame);
  }
  function skip(){if(finState!==1||landed)return;if(!released){released=true;ropeA=0}body={x:W/2,y:floorY,vx:0,vy:0,rot:0,vr:0};burst(W/2,floorY+pk*0.4);land()}
  function closeFin(){
    if(!finState||finState===3)return;var was=finState;finState=3;fin.classList.add("out");
    setTimeout(function(){finState=0;if(raf){cancelAnimationFrame(raf);raf=0}fin.classList.remove("on","landed","settled","out","shake");fin.setAttribute("aria-hidden","true");g.clearRect(0,0,W,H);
      if(!lb.classList.contains("open"))lockScroll(false);fabOn(true);if(lastFocus&&lastFocus.focus)try{lastFocus.focus({preventScroll:true})}catch(_){}},reduce?200:720);
  }
  $("#finX").addEventListener("click",closeFin);
  $("#finBg").addEventListener("click",function(){if(finState===1&&!landed)skip();else closeFin()});
  document.addEventListener("keydown",function(e){
    if(!finState)return;
    if(e.key==="Escape"){e.preventDefault();e.stopPropagation();closeFin();return}
    if(e.key==="Tab"){var f=[].slice.call(cardEl.querySelectorAll("button,a[href]"));if(!f.length)return;var a=document.activeElement,ix=f.indexOf(a);e.preventDefault();f[(ix+(e.shiftKey?-1:1)+f.length)%f.length].focus()}
  },true);
  window.addEventListener("resize",function(){if(!finState||reduce)return;size();geom();if(landed){body&&(body.x=W/2,body.y=floorY)}});
  /* no automatic trigger: the welcome offer is the only pop-up that opens by itself; the finale is kept for Contact.openFin() only */
  return{openDock:openDock,closeDock:closeDock,openFin:openFin,closeFin:closeFin,skip:skip,st:function(){return{dock:dockOpen,fin:finState,shown:finShown,landed:!!landed,pick:pick}}};
})();

/* ---------- the aircraft as a picture ----------
   On touch screens the small copies of the aircraft (in the answers, in the closing strip, on the booking form) are this one picture of the
   very same drawing, rendered ahead of time. A picture looks the same in every phone browser; a drawing assembled from mirrored halves does not always. */
var DN_PIC="data:image/webp;base64,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";
window.OBDnPic=function(){return '<img class="dn-pic" alt="" draggable="false" decoding="async" src="'+DN_PIC+'">'};

/* ---------- hero: remote-controller status (satellites, signal, telemetry) ---------- */
(function(){
  var osd=$("#osd");if(!osd)return;
  var sat=$("#osdSat"),st=$("#osdSt"),rc=[].slice.call($("#osdRc").children),hd=[].slice.call($("#osdHd").children),bat=$("#osdBat"),batF=$("#osdBatF"),rec=$("#osdRec"),eD=$("#osdD"),eH=$("#osdH"),eHS=$("#osdHS"),eVS=$("#osdVS"),me=$("#osdMe"),tm=$("#osdTm");
  var alts=PHOTOS.filter(function(p){return p.alt!=null}).map(function(p){return p.alt});if(!alts.length)alts=[60,90,113];
  function bars(list,n){list.forEach(function(b,i){b.classList.toggle("on",i<n)})}
  function full(){sat.textContent="40";st.textContent="GPS · Ready to fly";osd.classList.add("lock");bars(rc,5);bars(hd,5)}
  if(reduce){full();eD.textContent="245";eH.textContent=alts[0];eHS.textContent="8.2";eVS.textContent="0.0";return}
  var t0=0,booted=false,ai=0,H=0,Ht=alts[0],D=0,Dt=180,hs=0,hst=7,vs=0,ang=40,angT=40,lastSwap=0,pct=92,lastT=0,lastTxt=0;
  function boot(now){
    var t=(now-t0)/1000,p=Math.max(0,Math.min(1,(t-0.4)/2.6)),e=1-Math.pow(1-p,2.2),n=Math.round(40*e);
    sat.textContent=n;bars(rc,Math.min(5,Math.floor(t/0.42)));bars(hd,Math.min(5,Math.floor((t-0.5)/0.42)));
    st.textContent=n<12?"Searching GPS":n<40?"Acquiring · "+n+" sat":"GPS · Ready to fly";
    if(p>=1&&!booted){booted=true;full()}
  }
  function tick(now){
    if(!t0){if(!introGone){requestAnimationFrame(tick);return}t0=now+500;lastSwap=now}
    var dt=Math.min(0.1,(now-(lastT||now))/1000);lastT=now;
    if(!document.hidden&&now>=t0&&(!booted||window.pageYOffset<window.innerHeight)){
      if(!booted)boot(now);
      if(now-lastSwap>3600){lastSwap=now;ai=(ai+1)%alts.length;Ht=alts[ai];Dt=60+Math.random()*460;hst=3+Math.random()*10;angT+=(Math.random()-.5)*150}
      var k=Math.min(1,dt*1.1),pH=H;H+=(Ht-H)*k*0.3;D+=(Dt-D)*k*0.8;hs+=(hst-hs)*k*1.4;vs+=(((H-pH)/Math.max(dt,0.016))-vs)*Math.min(1,dt*4);ang+=(angT-ang)*k*0.8;
      if(now-lastTxt>110){lastTxt=now;var j=booted?(Math.random()-.5)*0.3:0;
        eH.textContent=Math.round(H);eD.textContent=Math.round(D);eHS.textContent=Math.max(0,hs+j).toFixed(1);eVS.textContent=(Math.abs(vs)<0.05?0:Math.max(-2.5,Math.min(2.5,vs))).toFixed(1);
        var s=Math.floor((now-t0)/1000);rec.textContent=("0"+Math.floor(s/60)%60).slice(-2)+":"+("0"+s%60).slice(-2);
        var np=Math.max(21,92-Math.floor(s/19));if(np!==pct){pct=np;bat.textContent=pct;batF.style.width=pct+"%"}var left=Math.max(0,1660-s);tm.textContent=Math.floor(left/60)+"'"+("0"+left%60).slice(-2)+'"'}
      var r=10+Math.min(22,D/22),a=ang*Math.PI/180;me.style.transform="translate("+(Math.sin(a)*r).toFixed(1)+"px,"+(-Math.cos(a)*r).toFixed(1)+"px) rotate("+(ang+180).toFixed(0)+"deg)";
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* ---------- photos: a sideways strip (native scrolling). It does not take over the page scroll, moves nothing by script while scrolling,
   and keeps only the photos around the middle one loaded. ---------- */
var Drum=(function(){
  var root=$("#drum"),stage=$("#dstage"),chipsEl=$("#dchips"),pill=$("#dpill"),numEl=$("#dNum"),totEl=$("#dTot"),tEl=$("#dT"),sEl=$("#dS"),info=root.querySelector(".pr-info"),barEl=$("#dBar"),up=$("#dUp"),down=$("#dDown");
  var BY={};PHOTOS.forEach(function(p){BY[p.id]=p});
  var CATS=[["All photos", ["m0002", "g0129", "m0007", "r0164", "e0003", "a0291", "m0056", "g0162", "s0002", "r0026", "k0028", "a0247", "m0078", "g0177", "m0009", "r0110", "w0004", "a0252", "m0019b", "g0137", "r0046", "q0006", "a0282", "m0084", "g0152", "r0096", "a0258", "m0075", "g0185", "r0153", "a0227", "m0093", "g0156", "r0172", "g0187", "m0045", "a0289", "r0103", "g0132", "r0133", "q0015", "r0060", "r0076", "r0116", "r0140", "r0024", "r0145", "r0001", "r0122", "r0014"]], ["Urban renewal", ["m0002", "r0164", "m0056", "r0026", "m0078", "r0110", "m0019b", "r0046", "m0084", "r0096", "m0075", "r0153", "m0093", "r0172", "m0045", "r0103", "r0133", "r0060", "r0076", "r0116", "r0140", "r0024", "r0145", "r0001", "r0122", "r0014"]], ["Solar & energy", ["g0129", "a0291", "g0162", "a0247", "g0177", "a0252", "g0137", "a0282", "g0152", "a0258", "g0185", "a0227", "g0156", "g0187", "a0289", "g0132", "q0015"]], ["City & coast", ["m0007", "s0002", "m0009"]], ["More photos", ["e0003", "k0028", "w0004", "q0006"]]].map(function(c){return [c[0],c[1].filter(function(id){return BY[id]}).map(function(id){return BY[id]})]}).filter(function(c){return c[1].length});
  var cat=-1,items=[],cards=[],idx=-1,shown=false,step=1,tick=0,NEAR=canHover?4:2,FAR=canHover?9:5,swT=0,hiT=0,syT=0,drag=null,blockClick=false;
  function clamp(v,a,b){return v<a?a:v>b?b:v}
  CATS.forEach(function(c,i){var b=el("button","pr-chip");b.type="button";b.setAttribute("role","tab");b.dataset.i=i;b.textContent=c[0];chipsEl.appendChild(b)});
  chipsEl.addEventListener("click",function(e){var b=e.target.closest(".pr-chip");if(b)setCat(+b.dataset.i)});
  function movePill(){var b=chipsEl.querySelector('.pr-chip[aria-selected="true"]');if(!b)return;pill.style.width=b.offsetWidth+"px";pill.style.transform="translateX("+b.offsetLeft+"px)";
    try{var cr=chipsEl.getBoundingClientRect(),br=b.getBoundingClientRect();if(br.left<cr.left||br.right>cr.right)chipsEl.scrollLeft+=(br.left+br.width/2)-(cr.left+cr.width/2)}catch(_){}}
  function measure(){if(cards.length>1)step=cards[1].el.offsetLeft-cards[0].el.offsetLeft;else if(cards.length)step=cards[0].el.offsetWidth||1;if(!(step>0))step=1}
  /* only the photos next to the middle one hold a picture; the ones far behind give theirs back */
  function sync(ci){
    for(var i=0;i<cards.length;i++){var c=cards[i],a=Math.abs(i-ci);
      if(a<=NEAR){if(!c.ld){c.ld=true;c.img.src="media/t/"+c.id+".webp"}}
      else if(a>FAR&&c.ld){c.ld=false;c.hi=false;c.img.classList.remove("ok");c.img.removeAttribute("src")}
      if(c.hi&&a>0){c.hi=false;c.img.src="media/t/"+c.id+".webp"}}
  }
  function paint(ci,quiet){
    var n=items.length;if(!n)return;ci=clamp(ci,0,n-1);if(ci===idx)return;
    if(idx>=0&&cards[idx])cards[idx].el.classList.remove("on");
    var was=idx;idx=ci;cards[ci].el.classList.add("on");
    /* while the strip is flying past nothing is fetched or decoded; the photos around the middle one load once it slows down */
    clearTimeout(syT);if(quiet||was<0)sync(ci);else syT=setTimeout(function(){sync(idx)},120);
    numEl.textContent=("0"+(ci+1)).slice(ci+1>99?-3:-2);
    barEl.style.transform="scaleX("+(n>1?(ci/(n-1)):1).toFixed(4)+")";
    up.disabled=ci<=0;down.disabled=ci>=n-1;
    info.classList.add("sw");clearTimeout(swT);swT=setTimeout(function(){var y=items[idx];if(!y)return;tEl.textContent=place(y)[0];sEl.textContent=(place(y)[1]||"")+(y.alt!=null?" · "+y.alt+" m":"");info.classList.remove("sw")},140);
    stage.setAttribute("aria-label","Photos, photo "+(ci+1)+" of "+n+". Swipe sideways, or use the arrow keys.");
    if(!quiet&&was>=0&&window.OBMusic&&OBMusic.flick)OBMusic.flick(0.55);   /* a soft flick for every photo that passes */
    clearTimeout(hiT);if(canHover)hiT=setTimeout(hiRes,700);
  }
  /* on a computer the middle photo is swapped for the full-size file once the strip rests on it */
  function hiRes(){var c=cards[idx];if(!c||c.hi||!c.ld)return;c.hi=true;var im=new Image();im.decoding="async";im.onload=function(){if(c.hi&&c.ld)c.img.src=im.src};im.src="media/p/"+c.id+".webp"}
  function onScroll(){if(tick)return;tick=requestAnimationFrame(function(){tick=0;if(!shown||!cards.length)return;paint(Math.round(stage.scrollLeft/step),false)})}
  stage.addEventListener("scroll",onScroll,{passive:true});
  function goTo(k,smooth){k=clamp(k,0,items.length-1);var x=k*step;try{stage.scrollTo({left:x,behavior:smooth&&!reduce?"smooth":"auto"})}catch(_){stage.scrollLeft=x}if(!smooth||reduce)paint(k,false)}
  function setCat(i){
    if(i===cat)return;cat=i;
    [].forEach.call(chipsEl.querySelectorAll(".pr-chip"),function(b,k){b.setAttribute("aria-selected",String(k===i))});movePill();
    items=CATS[i][1];cards.forEach(function(c){c.img.removeAttribute("src");c.el.remove()});cards=[];idx=-1;
    var frag=document.createDocumentFragment();
    items.forEach(function(x,k){
      var c=el("button","pr-card");c.type="button";c.dataset.k=k;c.tabIndex=-1;if(x.bg)c.style.backgroundColor=x.bg;
      if(x.lq){c.style.backgroundImage="url(data:image/webp;base64,"+x.lq+")";c.style.backgroundSize="cover";c.style.backgroundPosition="50% 50%"}
      c.setAttribute("aria-label","Photo "+(k+1)+": "+place(x)[0]);
      var im=el("img");im.alt="";im.decoding="async";im.draggable=false;im.onload=function(){im.classList.add("ok")};c.appendChild(im);frag.appendChild(c);
      cards.push({el:c,img:im,id:x.id,ld:false,hi:false})});
    stage.appendChild(frag);
    totEl.textContent="/ "+("0"+items.length).slice(-2+(items.length>99?-1:0));
    stage.scrollLeft=0;measure();paint(0,true);
  }
  up.addEventListener("click",function(){goTo(idx-1,true)});
  down.addEventListener("click",function(){goTo(idx+1,true)});
  stage.addEventListener("keydown",function(e){if(e.key==="ArrowRight"){e.preventDefault();goTo(idx+1,true)}else if(e.key==="ArrowLeft"){e.preventDefault();goTo(idx-1,true)}else if(e.key==="Home"){e.preventDefault();goTo(0,true)}else if(e.key==="End"){e.preventDefault();goTo(items.length-1,true)}else if(e.key==="Enter"||e.key===" "){e.preventDefault();if(idx>=0)openWith(items,"photos",idx)}});
  stage.addEventListener("click",function(e){if(blockClick)return;var c=e.target.closest(".pr-card");if(!c)return;var k=+c.dataset.k;if(k===idx)openWith(items,"photos",k);else goTo(k,true)});
  /* a mouse can grab the strip and pull it; a finger scrolls it natively */
  stage.addEventListener("pointerdown",function(e){if(e.pointerType!=="mouse"||e.button!==0)return;drag={x:e.clientX,s:stage.scrollLeft,m:false}});
  window.addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-drag.x;if(!drag.m&&Math.abs(dx)>6){drag.m=true;stage.classList.add("drag")}if(drag.m)stage.scrollLeft=drag.s-dx});
  window.addEventListener("pointerup",function(){if(!drag)return;var m=drag.m;drag=null;if(m){blockClick=true;setTimeout(function(){blockClick=false},80);var k=Math.round(stage.scrollLeft/step);stage.classList.remove("drag");goTo(k,true)}});
  var rto;window.addEventListener("resize",function(){if(!shown)return;clearTimeout(rto);rto=setTimeout(function(){var k=Math.max(0,idx);measure();stage.scrollLeft=k*step;movePill()},140)});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){if(shown)movePill()});
  return{
    show:function(){if(shown)return;shown=true;root.hidden=false;if(cat<0)setCat(0);else{measure();movePill();sync(Math.max(0,idx))}},
    hide:function(){if(!shown)return;shown=false;root.hidden=true;cards.forEach(function(c){if(c.ld){c.ld=false;c.hi=false;c.img.classList.remove("ok");c.img.removeAttribute("src")}})},
    go:function(k){goTo(k,false)},
    st:function(){var ld=0;cards.forEach(function(c){if(c.ld)ld++});return{cat:cat,n:items.length,pos:idx,target:idx,idx:idx,step:step,loaded:ld}}
  };
})();
window.OBDrum={st:Drum.st};

/* ---------- booking request: details in, one WhatsApp message out. Nothing heavy runs while someone is typing. ---------- */
later("book",function(){
  var f=$("#book");if(!f)return;
  var nm=$("#bkName"),ph=$("#bkPhone"),dt=$("#bkDate"),lc=$("#bkLoc"),ms=$("#bkMsg"),err=$("#bkErr"),chips=$("#bkChips"),drone=$("#bkDrone"),done=$("#bkDone"),wa2=$("#bkWa2");
  var route=$("#bkRoute"),p0=$("#bkP0"),p1=$("#bkP1"),wpsH=$("#bkWps"),pad=$("#bkPad"),stat=$("#bkStat"),pct=$("#bkPct"),goT=$("#bkGoT");
  var TYPES=["Event","Urban renewal","Construction progress","Municipality","Real estate","Something else"],type="";
  TYPES.forEach(function(t){var b=el("button","bchip");b.type="button";b.setAttribute("role","radio");b.setAttribute("aria-checked","false");b.textContent=t;b.style.setProperty("--c",String(chips.children.length));chips.appendChild(b)});
  chips.addEventListener("click",function(e){var b=e.target.closest(".bchip");if(!b)return;
    if(!reduce){var r=b.getBoundingClientRect(),rp=el("span","bk-rip");rp.style.left=((e.clientX?e.clientX-r.left:r.width/2)).toFixed(0)+"px";rp.style.top=((e.clientY?e.clientY-r.top:r.height/2)).toFixed(0)+"px";b.appendChild(rp);setTimeout(function(){rp.remove()},650)}
    setTimeout(function(){chips.classList.toggle("has",!!type)},0);type=type===b.textContent?"":b.textContent;[].forEach.call(chips.children,function(c){c.setAttribute("aria-checked",String(c.textContent===type))});progress()});
  function okName(){return nm.value.trim().length>=2}
  function okPhone(){return ph.value.replace(/\D/g,"").length>=7}
  function mark(inp,ok){var w=inp._w||(inp._w=inp.closest(".bk-f"));ok=!!ok;if(inp._ok===ok)return;inp._ok=ok;w.classList.toggle("valid",ok);if(ok)w.classList.remove("bad")}
  /* flight route: a gently curving path with five waypoints and a landing pad; the little drone flies one leg per detail */
  var dots=[],RL=0,cur=0,tgt=0,rafR=0,kickAt=0;
  for(var k0=0;k0<5;k0++){var wd=el("i","bk-wp");wpsH.appendChild(wd);dots.push(wd)}
  function at(el2,p){el2.style.left=p.x.toFixed(1)+"px";el2.style.top=p.y.toFixed(1)+"px"}
  function place(v){if(!RL)return;var a=p0.getPointAtLength(RL*v),b2=p0.getPointAtLength(Math.min(RL,RL*v+8)),sl=Math.atan2(b2.y-a.y,b2.x-a.x)*57.3,lean=Math.max(-16,Math.min(16,(tgt-v)*110));
    drone.style.transform="translate3d("+a.x.toFixed(1)+"px,"+a.y.toFixed(1)+"px,0) rotate("+(sl*0.45+lean).toFixed(1)+"deg)";p1.style.strokeDashoffset=(RL*(1-v)).toFixed(1);pct.textContent=Math.round(v*100)+"%"}
  function layout(){var W=route.clientWidth,H=route.clientHeight;if(!W)return;var x0=25,x1=W-12,N=44,d="";
    for(var i=0;i<=N;i++){var t=i/N;d+=(i?"L":"M")+(x0+(x1-x0)*t).toFixed(1)+" "+(H*0.7+Math.sin(t*Math.PI*3)*6.5*(1-t*0.55)).toFixed(1)}
    p0.setAttribute("d",d);p1.setAttribute("d",d);RL=p0.getTotalLength();p1.style.strokeDasharray=RL.toFixed(1);
    for(var k=0;k<5;k++)at(dots[k],p0.getPointAtLength(RL*(k+1)/6));at(pad,p0.getPointAtLength(RL));place(cur)}
  function runRoute(){rafR=0;var d=tgt-cur;if(reduce||!canHover||Math.abs(d)<0.003){cur=tgt;place(cur);return}cur+=d*0.11;place(cur);rafR=requestAnimationFrame(runRoute)}
  var lastN=-1,lastRdy=null;
  function progress(){
    var a=okName(),b=okPhone(),c=lc.value.trim().length>=2;mark(nm,a);mark(ph,b);mark(lc,c);
    var pts=[a,b,!!type,!!dt.value,c,ms.value.trim().length>=3],n=pts.filter(Boolean).length;
    if(n!==lastN){lastN=n;tgt=n/pts.length;for(var k=0;k<5;k++)dots[k].classList.toggle("on",n>k);if(!rafR)rafR=requestAnimationFrame(runRoute)}
    var rdy=a&&b;if(rdy!==lastRdy){lastRdy=rdy;f.classList.toggle("ready",rdy);stat.textContent=rdy?"Cleared for take-off":"Flight plan"}
  }
  /* typing: the field itself is left to the browser. The little extras (ticks, route, status) catch up a moment after the last key,
     and while a field has the keyboard the card's own loops stand still, so nothing competes with the typing. */
  var pT=0;function later(){clearTimeout(pT);pT=setTimeout(progress,180)}
  [nm,ph,dt,lc,ms].forEach(function(i){i.addEventListener("input",function(){if(err.firstChild)err.textContent="";later()},{passive:true});i.addEventListener("change",progress)});
  f.addEventListener("focusin",function(e){if(e.target&&/^(INPUT|TEXTAREA)$/.test(e.target.tagName))f.classList.add("typing")});
  f.addEventListener("focusout",function(){setTimeout(function(){var ae=document.activeElement;if(!ae||!f.contains(ae)||!/^(INPUT|TEXTAREA)$/.test(ae.tagName))f.classList.remove("typing")},60)});
  function text(){
    var L=[tx("Hi Or,"),"",tx("I'd like to book a drone shoot."),"",tx("Name: ")+nm.value.trim()];
    if(ph.value.trim())L.push(tx("Phone: ")+ph.value.trim());if(type)L.push(tx("Project: ")+tx(type));
    if(dt.value){var d=dt.value.split("-");L.push(tx("Preferred date: ")+d[2]+"."+d[1]+"."+d[0])}
    if(lc.value.trim())L.push(tx("Location: ")+lc.value.trim());if(ms.value.trim())L.push(tx("Details: ")+ms.value.trim());
    L.push("",tx("Sent from your aerial gallery."));return L.join("\n")}
  function check(){
    var bad=null;
    if(!okName()){bad=nm;err.textContent="Please add your name."}
    else if(!okPhone()){bad=ph;err.textContent="Please add a phone number so I can get back to you."}
    if(bad){var w=bad.closest(".bk-f");w.classList.remove("bad");void w.offsetWidth;w.classList.add("bad");try{bad.focus({preventScroll:false})}catch(_){}return false}
    err.textContent="";return true}
  function waUrl(){return "https://wa.me/972533367586?text="+encodeURIComponent(text())}
  /* WhatsApp is opened from inside the tap itself, through a real link: that is the one way no phone browser blocks */
  function openWa(){var u=waUrl();if(wa2)wa2.href=u;try{var a=document.createElement("a");a.href=u;a.target="_blank";a.rel="noopener";a.style.display="none";document.body.appendChild(a);a.click();setTimeout(function(){a.remove()},500)}catch(_){try{window.location.href=u}catch(e){}}}
  function sum(){var a=[];if(type)a.push(tx(type));if(dt.value){var d=dt.value.split("-");a.push(d[2]+"."+d[1]+"."+d[0])}if(lc.value.trim())a.push(lc.value.trim());var sm=$("#bkSum"),sa=$("#bkSA");if(sm)sm.textContent=a.join("  ·  ");if(sa)sa.textContent=nm.value.trim().split(/\s+/)[0]||""}
  window.addEventListener("ob-lang",function(){if(f.classList.contains("sent"))sum()});
  function showDone(){var tb=$("#bkTxt");if(tb)tb.hidden=true;if(f.classList.contains("sent"))return;
    sum();done.hidden=false;void done.offsetWidth;f.classList.add("sent");f.classList.remove("typing");
    try{var Rd=f.getBoundingClientRect(),off=Rd.top+Rd.height/2-window.innerHeight/2;if(Math.abs(off)>60)window.scrollBy({top:off,behavior:reduce?"auto":"smooth"})}catch(_){}}
  f.addEventListener("submit",function(e){e.preventDefault();progress();if(!check())return;try{if(document.activeElement&&document.activeElement.blur)document.activeElement.blur()}catch(_){}openWa();showDone()});
  $("#bkEdit").addEventListener("click",function(){f.classList.remove("sent");setTimeout(function(){done.hidden=true;try{nm.focus({preventScroll:true})}catch(_){}},400)});
  /* copy: the clipboard when the browser allows it; otherwise the text is shown, selected, ready to be copied by hand */
  $("#bkCopy").addEventListener("click",function(){var t=text(),tb=$("#bkTxt");function manual(){if(!tb){say("Copy is not available here");return}tb.hidden=false;tb.value=t;try{tb.focus();tb.select();tb.setSelectionRange(0,t.length)}catch(_){}var ok=false;try{ok=document.execCommand("copy")}catch(_){}say(ok?"Request copied":"Select the text and copy it")}
    try{if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(function(){say("Request copied")},manual);else manual()}catch(_){manual()}});
  /* pointer (computers only): soft spotlight and a slight tilt */
  if(canHover&&!reduce){f.addEventListener("pointermove",function(e){var r=f.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;f.style.setProperty("--mx",(x*100).toFixed(1)+"%");f.style.setProperty("--my",(y*100).toFixed(1)+"%");if(!f.contains(document.activeElement)){f.style.setProperty("--try",((x-.5)*5).toFixed(2)+"deg");f.style.setProperty("--trx",((.5-y)*4).toFixed(2)+"deg")}});
    f.addEventListener("pointerleave",function(){f.style.setProperty("--try","0deg");f.style.setProperty("--trx","0deg")});
    f.addEventListener("focusin",function(){f.style.setProperty("--try","0deg");f.style.setProperty("--trx","0deg")})}
  /* first time on screen: the card switches on. Off screen its small loops are paused */
  f.classList.add("arm");
  function arrive(){if(f.classList.contains("in"))return;f.style.setProperty("--bh",f.offsetHeight+"px");layout();f.classList.add("in")}
  if(reduce||!("IntersectionObserver" in window))arrive();
  else{var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){arrive();io.disconnect()}},{threshold:0.12}),wt=setInterval(function(){if(introGone){clearInterval(wt);io.observe(f)}},300);
    new IntersectionObserver(function(en){f.classList.toggle("away",!en[0].isIntersecting)},{rootMargin:"80px 0px"}).observe(f)}
  var rzT=0;window.addEventListener("resize",function(){if(f.classList.contains("typing"))return;clearTimeout(rzT);rzT=setTimeout(function(){layout();progress()},200)});
  layout();progress();
});

/* ---------- about: background footage plays only while it is on screen ---------- */
/* (phones keep the still picture: the film would have to be stretched over the whole height of this long section) */
(function(){var v=$("#aboutVid"),sec=$("#about");if(!v||!sec||reduce||!canHover||!("IntersectionObserver" in window))return;var vis=false;
  function sync(){var want=vis&&introGone&&!document.hidden&&!lb.classList.contains("open");if(want){if(!v.getAttribute("src")){v.src="media/about.mp4";v.addEventListener("playing",function(){v.classList.add("on")})}var p=v.play();if(p&&p.catch)p.catch(function(){})}else if(!v.paused)v.pause()}
  new IntersectionObserver(function(en){vis=en[0].isIntersecting;sync()},{threshold:0.05}).observe(sec);document.addEventListener("visibilitychange",sync);
  /* far from the section the film is let go of completely (the still stays), and fetched again from the cache on the way back */
  new IntersectionObserver(function(en){if(!en[0].isIntersecting&&v.getAttribute("src")){v.classList.remove("on");v.removeAttribute("src");try{v.load()}catch(_){}}},{rootMargin:"140% 0px"}).observe(sec)})();
/* ---------- questions & answers: every answer has its own small scene that plays when it opens ----------
   Scenes are drawn on a 360 x 132 stage (SVG for the scenery, the detailed aircraft from the welcome card for anything that flies). */
var OBScene=(function(){
  var V='viewBox="0 0 360 132" preserveAspectRatio="xMidYMid slice" aria-hidden="true"';
  function DR(c){return '<span class="sc-dr '+(c||"")+'"><span class="sc-dn"><span class="dn-tilt" data-dn></span></span></span>'}
  function chip(c,t,dot){return '<span class="sc-chip '+c+'">'+(dot?'<i class="'+dot+'"></i>':'')+'<span>'+t+'</span></span>'}
  var CK='<svg viewBox="0 0 24 24" aria-hidden="true"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function rnd(i,k){var x=Math.sin(i*127.1+k*311.7)*43758.5453;return x-Math.floor(x)}
  var S=[];
  /* 0 · rain: clouds and rain over a grounded aircraft, then the sky clears and it takes off */
  S[0]=function(){var r="",i;for(i=0;i<26;i++){var x=6+rnd(i,1)*350;r+='<line class="s0-r" x1="'+x.toFixed(0)+'" y1="0" x2="'+(x-2.4).toFixed(0)+'" y2="'+(7+rnd(i,2)*6).toFixed(0)+'" style="animation-delay:-'+(rnd(i,3)*0.6).toFixed(2)+'s;animation-duration:'+(0.5+rnd(i,4)*0.25).toFixed(2)+'s"/>'}
    return '<svg class="bg" '+V+'><defs><linearGradient id="q0a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#34414f"/><stop offset="1" stop-color="#171f29"/></linearGradient><linearGradient id="q0b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d4f82"/><stop offset=".62" stop-color="#e79d58"/><stop offset="1" stop-color="#f8cf94"/></linearGradient><radialGradient id="q0s"><stop offset="0" stop-color="#fffbe8"/><stop offset=".32" stop-color="#ffd98a"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></radialGradient></defs>'+
      '<rect width="360" height="132" fill="url(#q0a)"/><rect class="s0-clear" width="360" height="132" fill="url(#q0b)"/><circle class="s0-sun" cx="284" cy="52" r="40" fill="url(#q0s)"/>'+
      '<g class="s0-rain" stroke="#c9def2" stroke-width="1.2" stroke-linecap="round">'+r+'</g>'+
      '<g class="s0-cl a" fill="#5b6876"><circle cx="64" cy="26" r="20"/><circle cx="92" cy="18" r="26"/><circle cx="124" cy="26" r="21"/><circle cx="150" cy="32" r="15"/><rect x="50" y="26" width="112" height="22" rx="11"/></g>'+
      '<g class="s0-cl b" fill="#6e7b89"><circle cx="216" cy="24" r="18"/><circle cx="244" cy="14" r="25"/><circle cx="276" cy="22" r="22"/><circle cx="304" cy="30" r="16"/><rect x="204" y="24" width="114" height="22" rx="11"/></g>'+
      '<path d="M0 112h360v20H0z" fill="#0a1017"/><path d="M0 112h360" stroke="rgba(255,255,255,.14)"/>'+
      '<g class="s0-pg" fill="none" stroke="#b9d3ea" stroke-width="1"><ellipse class="s0-p" cx="70" cy="122" rx="9" ry="2.2"/><ellipse class="s0-p" cx="262" cy="119" rx="9" ry="2.2" style="animation-delay:.4s"/><ellipse class="s0-p" cx="318" cy="125" rx="9" ry="2.2" style="animation-delay:.8s"/><ellipse class="s0-p" cx="128" cy="126" rx="9" ry="2.2" style="animation-delay:.2s"/></g>'+
      '<ellipse cx="180" cy="116" rx="40" ry="5.5" fill="#111a24" stroke="rgba(240,180,94,.7)" stroke-width="1.2"/><ellipse class="s0-sh" cx="180" cy="116" rx="26" ry="3.2" fill="rgba(0,0,0,.55)"/></svg>'+
      DR()+chip("s0-c1","Rain? We wait.","no")+chip("s0-c2","Clear sky. Take-off.","go")};
  /* 1 · licence: the card turns over, gets its stamp, the registration slides out from behind it */
  S[1]=function(){return '<span class="s1-bg"></span><span class="s1-stage"><span class="s1-reg">'+CK+'<span>Every drone registered</span></span><span class="s1-card"><span class="s1-holo"></span>'+
      '<span class="s1-em"><svg viewBox="0 0 24 24" aria-hidden="true"><path class="sh" d="M12 2.5l7.5 3v5.7c0 4.9-3.3 8.5-7.5 10.3-4.2-1.800-7.5-5.400-7.500-10.300V5.5z"/><path class="ck" pathLength="1" d="M8.300 12.200l2.600 2.600 4.900-5.300"/></svg></span>'+
      '<span class="s1-tx" dir="auto"><b>Commercial drone licence</b><i>Civil Aviation Authority of Israel</i><em>Or Bahar</em><u></u><u class="b"></u></span>'+
      '<span class="s1-st"><span>Valid</span></span><span class="s1-ring"></span></span></span>'};
  /* 2 · where: a route from the north down to Eilat; pins land as the aircraft passes them */
  S[2]=function(){var P=[[34,34,"Northern Israel",-17,-22],[104,60,"Jordan Valley",17,-50],[172,42,"Petah Tikva",-17,-50],[236,76,"Ramat Ef\'al",17,-50],[318,104,"Eilat",-15,-70]],h="",l="",T=[0.45,1.17,1.9,2.62,3.35];
    P.forEach(function(p,i){h+='<g class="s2-pin" style="--d:'+T[i].toFixed(2)+'s"><circle class="pg" cx="'+p[0]+'" cy="'+p[1]+'" r="5"/><circle cx="'+p[0]+'" cy="'+p[1]+'" r="4.200" fill="#f0b45e" stroke="#fff3da" stroke-width="1.4"/></g>';
      l+='<span class="s2-lb" style="left:'+(p[0]/3.6).toFixed(1)+'%;top:'+((p[1]+p[3])/1.32).toFixed(1)+'%;--ax:'+p[4]+'%;--d:'+(T[i]+0.15).toFixed(2)+'s">'+p[2]+'</span>'});
    return '<svg class="bg" '+V+'><defs><linearGradient id="q2a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#12314a"/><stop offset=".7" stop-color="#0b1a28"/><stop offset="1" stop-color="#0d2b3d"/></linearGradient></defs><rect width="360" height="132" fill="url(#q2a)"/>'+
      '<g fill="none" stroke="rgba(159,210,238,.13)" stroke-width="1"><path d="M-10 18c60 22 120-14 190 8s130 4 190-10"/><path d="M-10 44c70 26 130-8 200 14s120 10 180-4"/><path d="M-10 74c60 18 140 2 210 22s110 6 170 0"/><path d="M-10 104c80 14 150 6 220 20s100 0 160-6"/></g>'+
      '<g class="s2-sea" fill="none" stroke="rgba(120,200,240,.4)" stroke-width="1.2" stroke-linecap="round"><path d="M300 120q6-4 12 0t12 0 12 0 12 0"/><path d="M312 127q6-4 12 0t12 0 12 0"/></g>'+
      '<path class="s2-p0" d="M34 34C60 34 78 60 104 60S146 42 172 42s38 34 64 34 54 28 82 28"/><path class="s2-p1" pathLength="1" d="M34 34C60 34 78 60 104 60S146 42 172 42s38 34 64 34 54 28 82 28"/>'+h+
      '<g class="s2-cmp"><circle cx="330" cy="26" r="13" fill="rgba(8,14,20,.6)" stroke="rgba(255,255,255,.3)"/><g class="nd"><path d="M330 15l3.600 11-3.600 11-3.600-11z" fill="#dfe8ee"/><path d="M330 15l3.600 11h-7.200z" fill="#ff6b61"/></g></g></svg>'+l+DR("sm")};
  /* 3 · what you get: two stills and a film are dealt onto the table, then ticked off */
  S[3]=function(){return '<span class="s3-bg"></span><span class="s3-cd a"><img data-src="media/t/g0131.webp" alt=""></span><span class="s3-cd c"><img data-src="media/t/r0092.webp" alt=""></span>'+
      '<span class="s3-cd b"><img data-src="media/t/e0782.webp" alt=""><video class="s3-v" muted loop playsinline preload="none" data-vsrc="media/v/e0782.mp4"></video><span class="s3-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7v10l8.500-5z" fill="currentColor"/></svg></span><span class="s3-4k" data-noi18n>4K · 60fps</span><span class="s3-bar"><i></i></span></span>'+
      '<span class="s3-chips"><span class="sc-tk" style="--d:1.5s">'+CK+'<span>4K video</span></span><span class="sc-tk" style="--d:1.75s">'+CK+'<span>High-res stills</span></span><span class="sc-tk" style="--d:2s">'+CK+'<span>Editing: optional extra</span></span></span>'};
  /* 4 · when: shoot day, editing, delivery; the aircraft carries the parcel to the last stop */
  S[4]=function(){function nd(x,c,ic){return '<g class="s4-n '+c+'"><circle cx="'+x+'" cy="80" r="15"/>'+ic+'</g>'}
    return '<svg class="bg" '+V+'><defs><linearGradient id="q4a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#132d46"/><stop offset="1" stop-color="#0a1520"/></linearGradient></defs><rect width="360" height="132" fill="url(#q4a)"/>'+
      '<g fill="rgba(255,255,255,.5)"><circle cx="40" cy="20" r=".9"/><circle cx="118" cy="12" r=".7"/><circle cx="212" cy="24" r=".9"/><circle cx="296" cy="14" r=".8"/><circle cx="338" cy="38" r=".7"/><circle cx="78" cy="40" r=".6"/></g>'+
      '<path d="M60 80h240" stroke="rgba(186,212,232,.3)" stroke-width="2" stroke-dasharray="2 6" stroke-linecap="round"/><path class="s4-fill" pathLength="1" d="M60 80h240"/>'+
      nd(60,"a",'<path d="M52 79h16M55.500 79l1.500 3h6l1.500-3M53 77.200h4M63 77.200h4"/>')+nd(180,"b",'<path d="M174 74l12 12M186 74l-12 12"/><circle cx="173.500" cy="87" r="2.200"/><circle cx="186.500" cy="87" r="2.200"/>')+nd(300,"c",'<path class="ck" pathLength="1" d="M293.500 80.500l4.500 4.500 8.500-9"/>')+
      '<circle class="s4-ping" cx="300" cy="80" r="15"/></svg>'+
      '<span class="s4-lb" style="left:16.700%">Shoot day</span><span class="s4-lb" style="left:50%;--d:1.5s">Footage check</span><span class="s4-lb" style="left:83.300%;--d:3s">Delivery</span>'+
      '<span class="sc-dr sm s4-dr"><span class="sc-dn"><span class="dn-tilt" data-dn></span><span class="s4-box"></span></span></span>'+chip("s4-c","Date agreed before take-off","go")};
  /* 5 · cost: the quote is printed line by line, the first-shoot discount is stamped next to it */
  S[5]=function(){function row(t,d){return '<span class="s5-row" style="--d:'+d+'s"><span>'+t+'</span>'+CK+'</span>'}
    return '<span class="s5-bg"></span><span class="s5-slot"></span><span class="s5-clip"><span class="s5-paper"><b class="s5-h">Quote</b>'+row("Location",1.0)+row("Flight time",1.35)+row("Editing (optional)",1.7)+'<span class="s5-sum" style="--d:2.1s">Clear quote</span></span></span>'+
      '<span class="s5-st"><span class="s5-in"><b data-noi18n>−10%</b><i>First shoot</i></span></span><span class="s5-ring"></span>'};
  /* 6 · indoors: door frames rush past, then the window opens onto the sky */
  S[6]=function(){var f="",i;for(i=0;i<6;i++)f+='<i style="animation-delay:'+(-i*0.3).toFixed(2)+'s"></i>';
    return '<span class="s6-room"><svg class="bg" '+V+'><g stroke="rgba(255,255,255,.12)" stroke-width="1"><path d="M0 0L180 66M360 0L180 66M0 132L180 66M360 132L180 66M0 44L180 66M0 88L180 66M360 44L180 66M360 88L180 66M90 0L180 66M270 0L180 66M90 132L180 66M270 132L180 66"/></g></svg><span class="s6-fr">'+f+'</span></span>'+
      '<span class="s6-win"></span><span class="s6-out"><svg class="bg" '+V+'><defs><linearGradient id="q6a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2d77b8"/><stop offset=".65" stop-color="#a9d6f0"/><stop offset="1" stop-color="#f5d9a8"/></linearGradient><radialGradient id="q6s"><stop offset="0" stop-color="#fffbe8"/><stop offset=".3" stop-color="#ffe7a8"/><stop offset="1" stop-color="#ffe7a8" stop-opacity="0"/></radialGradient></defs><rect width="360" height="132" fill="url(#q6a)"/><circle cx="76" cy="40" r="44" fill="url(#q6s)"/>'+
      '<g class="s6-sky" fill="rgba(255,255,255,.75)"><ellipse cx="250" cy="30" rx="34" ry="7"/><ellipse cx="276" cy="24" rx="22" ry="7"/><ellipse cx="120" cy="52" rx="26" ry="5"/></g>'+
      '<path class="s6-city" d="M0 132V104h22V92h18v12h14V84h26v20h16V98h20v-18h22v24h18V94h28v10h14V88h24v16h20V96h26v8h18V90h22v14h32v28z" fill="#17324a"/></svg></span>'+
      DR("s6-dr")+chip("s6-c","One continuous shot","go")};
  /* 7 · how high: up to the ceiling the rules allow, then down to where the picture is best */
  S[7]=function(){var t="",i;for(i=0;i<9;i++)t+='<path d="M22 '+(110-i*11)+'h'+(i%2?5:9)+'"/>';
    return '<svg class="bg" '+V+'><defs><linearGradient id="q7a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#143659"/><stop offset=".7" stop-color="#3f6f93"/><stop offset="1" stop-color="#e3a765"/></linearGradient><linearGradient id="q7c" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffe9bd" stop-opacity=".7"/><stop offset="1" stop-color="#ffe9bd" stop-opacity="0"/></linearGradient></defs><rect width="360" height="132" fill="url(#q7a)"/>'+
      '<path d="M0 132V112h30V96h22v16h18V90h30v22h20V100h24v12h70V78h14v-8h20v8h14v34h22V92h26v20h50v20z" fill="#0c1b29"/>'+
      '<g fill="rgba(255,214,150,.75)"><rect x="232" y="84" width="4" height="5"/><rect x="242" y="84" width="4" height="5"/><rect x="252" y="84" width="4" height="5"/><rect x="232" y="96" width="4" height="5"/><rect x="252" y="96" width="4" height="5"/><rect x="242" y="104" width="4" height="5"/></g>'+
      '<path class="s7-cone" d="M168 78L224 70v40z" fill="url(#q7c)"/>'+
      '<path class="s7-ceil" d="M40 20h312" stroke="#ffd27a" stroke-width="1.4" stroke-dasharray="6 6" stroke-linecap="round"/>'+
      '<g stroke="rgba(255,255,255,.55)" stroke-width="1.2" stroke-linecap="round"><path d="M22 112V18"/>'+t+'</g><path class="s7-mk" d="M33 110l9-5v10z" fill="#f0b45e"/></svg>'+
      DR("sm s7-dr")+'<span class="sc-chip s7-c1"><i class="amb"></i><span>50 m above the ground</span></span>'+chip("s7-c2","The best angle","go")};
  /* 8 · booking ahead: the month fills up, sunset slots first; one day is ringed for you */
  S[8]=function(){var c="",i,taken=[2,5,6,9,12,13,16,19,20,23,26],k=0;
    for(i=0;i<28;i++){var x=22+(i%7)*24,y=20+Math.floor(i/7)*22,ti=taken.indexOf(i);
      c+='<rect class="s8-c'+(ti>=0?" t":"")+(i===17?" me":"")+'" x="'+x+'" y="'+y+'" width="20" height="18" rx="5"'+(ti>=0?' style="--d:'+(0.35+ti*0.16).toFixed(2)+'s"':"")+'/>'}
    return '<svg class="bg" '+V+'><defs><linearGradient id="q8a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#16314e"/><stop offset=".6" stop-color="#7a4a5c"/><stop offset="1" stop-color="#f0a35a"/></linearGradient><radialGradient id="q8s"><stop offset="0" stop-color="#fff7de"/><stop offset=".35" stop-color="#ffc56e"/><stop offset="1" stop-color="#ffc56e" stop-opacity="0"/></radialGradient><clipPath id="q8k"><rect x="200" y="0" width="160" height="100"/></clipPath></defs>'+
      '<rect width="360" height="132" fill="#0c1826"/><rect x="200" width="160" height="132" fill="url(#q8a)"/><g clip-path="url(#q8k)"><circle class="s8-sun" cx="282" cy="52" r="34" fill="url(#q8s)"/></g>'+
      '<path d="M200 132v-32q40-10 80-4t80-6v42z" fill="#0a1420"/><path d="M200 0v132" stroke="rgba(255,255,255,.1)"/>'+
      '<g class="s8-hd" fill="rgba(255,255,255,.4)"><rect x="22" y="8" width="54" height="5" rx="2.500"/><rect x="150" y="8" width="18" height="5" rx="2.500"/></g>'+c+'<rect class="s8-ring" x="92" y="62" width="24" height="22" rx="7"/></svg>'+
      DR("sm s8-dr")+'<span class="sc-chip s8-c1"><i class="amb"></i><span>Taken</span></span>'+chip("s8-c2","Your date","go")};
  return{
    html:function(i){return S[i]?'<div class="fq-sc sc'+i+'" aria-hidden="true">'+S[i]()+'</div>':""},
    /* the aircraft is copied in only when a scene is first opened; pictures are fetched then too */
    arm:function(root,i){if(!root||root._armed)return;root._armed=1;var src=document.querySelector("#dkTilt");
      [].forEach.call(root.querySelectorAll("[data-dn]"),function(h,k){if(!canHover&&window.OBDnPic){h.innerHTML=OBDnPic();return}if(!src)return;h.innerHTML=src.innerHTML.replace(/\bdn(?=[A-Z])/g,"q"+i+"k"+k);var rl=h.querySelector(".dk-real");if(rl)rl.parentNode.removeChild(rl);[].forEach.call(h.querySelectorAll("[id]"),function(n){if(/^dk/.test(n.id))n.removeAttribute("id")})});
      [].forEach.call(root.querySelectorAll("img[data-src]"),function(m){m.src=m.getAttribute("data-src");m.removeAttribute("data-src")})},
    /* the middle card in "what do I get" is a real film: it plays only while that answer is open */
    film:function(root,on){var v=root&&root.querySelector("video[data-vsrc]");if(!v)return;
      if(on){if(!v.getAttribute("src")){v.src=v.getAttribute("data-vsrc");v.addEventListener("playing",function(){v.classList.add("on");v.parentNode.classList.add("live")},{once:true})}v.muted=true;var p=v.play();if(p&&p.catch)p.catch(function(){})}
      else{try{v.pause()}catch(_){}v.classList.remove("on");v.parentNode.classList.remove("live");v.removeAttribute("src");try{v.load()}catch(_){}}}
  };
})();

/* ---------- questions & answers ---------- */
later("faq",function(){
  var grid=$("#faqGrid");if(!grid)return;
  var S='fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  /* [question, answer, little picture] */
  var QA=[
    ["What happens if it rains?","We fly only in suitable conditions. A drone cannot fly in the rain, so if the weather turns we set a new date.",
      '<path d="M7 15.5a4 4 0 0 1 .6-7.9A5.2 5.2 0 0 1 17.6 9a3.3 3.3 0 0 1-.4 6.5z"/><path class="ic-drop" d="M9 18.5v2M12.5 18.5v2M16 18.5v2"/>'],
    ["Do you have a licence?","Yes. A commercial drone licence from the Civil Aviation Authority of Israel, and every drone is registered.",
      '<path d="M12 3l7 2.8v5.4c0 4.6-3.1 8-7 9.8-3.9-1.8-7-5.2-7-9.8V5.8z"/><path class="ic-draw" pathLength="1" d="M8.6 12.2l2.4 2.4 4.6-5"/>'],
    ["Where do you fly?","All over Israel. The gallery runs from the north down to Eilat. If it is allowed to fly there, we will get there.",
      '<g class="ic-hop"><path d="M12 21s6.2-5.6 6.2-10.4A6.2 6.2 0 0 0 5.8 10.6C5.8 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.2"/></g>'],
    ["What do I get at the end?","4K video and high-resolution stills, unedited, for marketing, progress reports, presentations and social media. Editing can be added at an extra charge.",
      '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path class="ic-pop" d="M10.3 9.3v5.4l4.6-2.7z" fill="currentColor"/>'],
    ["When do I get the footage?","We agree on a delivery date before take-off, so you know exactly when to expect it. No refreshing your inbox.",
      '<circle cx="12" cy="12" r="8.5"/><path class="ic-spin" d="M12 12V7.2"/><path d="M12 12l3.4 2"/>'],
    ["How much does it cost?","It depends on the location and the flight time. Editing, if you want it, is priced separately. Send a few details and you get a clear quote, with 10% off your first shoot.",
      '<path d="M4 12.4V5.6A1.6 1.6 0 0 1 5.6 4h6.8L20 11.6 11.6 20z"/><circle class="ic-pop" cx="8.6" cy="8.6" r="1.5"/>'],
    ["Can you fly inside a building?","Yes. A small FPV drone flies through rooms and corridors and out of the window in one continuous shot. There is one in the videos.",
      '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M12 4v16M4 12h16" opacity=".45"/><g class="ic-thru"><path d="M9.5 12h5M10 10.6l-1.2-.9M14 10.6l1.2-.9"/><circle cx="12" cy="12.4" r="1.1" fill="currentColor"/></g>'],
    ["How high can you fly?","50 metres above ground level, in line with the Civil Aviation Authority rules.",
      '<path d="M4 20h16"/><g class="ic-rise"><path d="M12 17V5M7.5 9.5L12 5l4.5 4.5"/></g>'],
    ["How far ahead should I book?","The earlier the better: clear days and sunset hours go first. In a hurry? Message me, sometimes the sky cooperates.",
      '<rect x="4" y="5.5" width="16" height="14.5" rx="2.5"/><path d="M4 10h16M8.5 3.5v4M15.5 3.5v4"/><path class="ic-draw" pathLength="1" d="M9 14.6l2.2 2.2 4-4.2"/>']
  ];
  var FLY='<svg viewBox="0 0 44 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M8 9h28M14 9l2.5 4h11L30 9"/><rect x="18.6" y="13" width="6.8" height="4.4" rx="1.4" fill="currentColor" stroke="none"/><path class="pr" d="M2 6.5h12"/><path class="pr" d="M30 6.5h12"/><path d="M8 9V6.5M36 9V6.5"/></svg>';
  var items=[];
  QA.forEach(function(q,i){
    var d=el("div","fq");d.style.setProperty("--i",i%4);
    d.innerHTML='<span class="fq-rip" aria-hidden="true"></span><span class="fq-beam" aria-hidden="true"></span>'+
      '<h3 style="margin:0"><button class="fq-q" type="button" id="fqQ'+i+'" aria-expanded="false" aria-controls="fqA'+i+'"><span class="fq-ic" aria-hidden="true"><svg viewBox="0 0 24 24" '+S+'>'+q[2]+'</svg></span><span class="fq-t"></span><span class="fq-pm" aria-hidden="true"></span></button></h3>'+
      '<div class="fq-a" id="fqA'+i+'" role="region" aria-labelledby="fqQ'+i+'"><div class="fq-ai">'+(reduce||typeof OBScene==="undefined"?"":OBScene.html(i))+'<p class="fq-ap"></p></div></div>';d._i=i;
    d.querySelector(".fq-t").textContent=q[0];d.querySelector(".fq-ap").textContent=q[1];
    grid.appendChild(d);items.push(d);
  });
  /* words of an answer land one after another; rebuilt whenever the text changes (language switch) */
  function words(d){var p=d.querySelector(".fq-ap"),t=p.getAttribute("data-full")||p.textContent;p.setAttribute("data-full",t);p.setAttribute("aria-label",t);p.textContent="";t.split(/\s+/).forEach(function(w,k){var s=el("span","fq-w");s.setAttribute("aria-hidden","true");s.style.setProperty("--w",k);s.textContent=w;p.appendChild(s);p.appendChild(document.createTextNode(" "))})}
  function setOpen(d,v,e){
    var b=d.querySelector(".fq-q"),a=d.querySelector(".fq-a");
    if(v){if(e&&e.clientX){var r=d.getBoundingClientRect();d.style.setProperty("--rx",(e.clientX-r.left)+"px");d.style.setProperty("--ry",(e.clientY-r.top)+"px")}d.style.setProperty("--cw",d.offsetWidth+"px");if(!reduce)words(d);if(typeof OBScene!=="undefined")OBScene.arm(d.querySelector(".fq-sc"),d._i);if(typeof OBScene!=="undefined"&&OBScene.film)OBScene.film(d.querySelector(".fq-sc"),true);
      /* keep the opened card in view once it has grown */
      setTimeout(function(){if(!d.classList.contains("open"))return;var r=d.getBoundingClientRect(),vh=window.innerHeight;if(r.bottom>vh-12||r.top<70)try{window.scrollBy({top:r.height>vh-90?r.top-80:Math.min(r.top-80,r.bottom-vh+24),behavior:"smooth"})}catch(_){}},720);
      d.classList.remove("open");void d.offsetWidth;d.classList.add("open");if(window.OBMusic&&OBMusic.flick)OBMusic.flick(0.5)}
    else{d.classList.remove("open");if(typeof OBScene!=="undefined"&&OBScene.film)OBScene.film(d.querySelector(".fq-sc"),false)}
    b.setAttribute("aria-expanded",String(v));
  }
  grid.addEventListener("click",function(e){var b=e.target.closest(".fq-q");if(!b)return;var d=b.closest(".fq"),was=d.classList.contains("open");items.forEach(function(x){if(x!==d&&x.classList.contains("open"))setOpen(x,false)});setOpen(d,!was,e)});
  /* when the language changes, the answers are plain text again so they can be translated, then re-split if open */
  window.addEventListener("ob-lang",function(){items.forEach(function(d){var p=d.querySelector(".fq-ap");p.removeAttribute("data-full");p.removeAttribute("aria-label");if(d.classList.contains("open")&&!reduce)setTimeout(function(){words(d)},60)})});
  window.OBFaq={plain:function(){items.forEach(function(d){var p=d.querySelector(".fq-ap"),t=p.getAttribute("data-full");if(t!=null){p.textContent=t;p.removeAttribute("data-full");p.removeAttribute("aria-label")}})}};
  if("IntersectionObserver" in window&&!reduce){var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("vis");io.unobserve(x.target)}})},{threshold:0.12});items.forEach(function(d){io.observe(d)})}
  else items.forEach(function(d){d.classList.add("vis")});
});

/* ---------- closing strip: Or stands on the ground with the remote, the aircraft hovers above the words and its light travels along the lines, lighting the letters it touches ---------- */
later("closing",function(){
  var sec=$("#closing"),host=$("#clTilt"),src=$("#dkTilt");if(!sec||!host)return;
  /* the copy gets its own gradient ids, so it never depends on the hidden pop-up being rendered */
  if(!canHover&&window.OBDnPic)host.innerHTML=OBDnPic();else if(src){host.innerHTML=src.innerHTML.replace(/\bdn(?=[A-Z])/g,"cz");[].forEach.call(host.querySelectorAll("[id]"),function(n){if(/^dk/.test(n.id))n.removeAttribute("id")})}
  var bk=$("#clBook");if(bk)bk.addEventListener("click",function(e){var t=$("#book");if(!t)return;e.preventDefault();try{t.scrollIntoView({behavior:reduce?"auto":"smooth",block:"start"})}catch(_){t.scrollIntoView()}var f=$("#bkName");if(f)setTimeout(function(){try{f.focus({preventScroll:true})}catch(_){}},reduce?0:700)});
  if(reduce||!("IntersectionObserver" in window)){sec.classList.add("live");return}
  var air=$("#clAir"),fly=$("#clFly"),drone=$("#clDrone"),ray=$("#clRay"),spot=$("#clSpot"),link=$("#clLink"),pilot=$("#clPilot"),texts=[].slice.call(sec.querySelectorAll(".cl-t"));
  var lines=[],path=[],total=0,t0=0,lastNow=0,S={x:0,y:0,r:120},shift=0,tilt=0,man=0,mx=0,my=0,running=false,vis=false,W=0,H=0,odd=false,lastLink="",measAt=0,rtl=false;
  /* the real line boxes of the three text blocks, in section coordinates */
  function measure(){
    var R=sec.getBoundingClientRect();W=R.width;H=R.height;rtl=document.documentElement.dir==="rtl";lines=[];
    texts.forEach(function(el2){var er=el2.getBoundingClientRect();el2._ox=er.left-R.left;el2._oy=er.top-R.top;el2._w=er.width;el2._h=er.height;
      var rg=document.createRange();rg.selectNodeContents(el2);var rs=rg.getClientRects(),rows=[];
      for(var i=0;i<rs.length;i++){var q=rs[i];if(q.width<2)continue;var hit=null;for(var j=0;j<rows.length;j++)if(Math.abs(rows[j].cy-(q.top+q.height/2))<q.height*0.45){hit=rows[j];break}
        if(hit){hit.l=Math.min(hit.l,q.left);hit.r=Math.max(hit.r,q.right);hit.h=Math.max(hit.h,q.height)}else rows.push({l:q.left,r:q.right,cy:q.top+q.height/2,h:q.height})}
      rows.sort(function(a,b){return a.cy-b.cy});
      rows.forEach(function(q){lines.push({x0:q.l-R.left,x1:q.r-R.left,y:q.cy-R.top,h:q.h,big:el2.tagName==="H2"})})});
    /* the route of the light: along every line in reading order, then a wide look at the headline */
    path=[];total=0;var h2=texts[1],prev=null;
    lines.forEach(function(L){var a=rtl?L.x1:L.x0,b=rtl?L.x0:L.x1,r=Math.max(64,Math.min(210,L.h*(L.big?1.2:2.4))),d=0.75+Math.abs(b-a)/(L.big?330:420);
      if(prev)seg(prev.x,prev.y,a,L.y,prev.r,r,0.42,true);seg(a,L.y,b,L.y,r,r,d,false);prev={x:b,y:L.y,r:r}});
    if(prev&&h2){var cx=h2._ox+h2._w/2,cy=h2._oy+h2._h/2,rr=Math.max(h2._w*0.62,h2._h*0.9);seg(prev.x,prev.y,cx,cy,prev.r,rr,1.1,true);seg(cx,cy,cx,cy,rr,rr,2.4,false);
      var f=path[0];if(f)seg(cx,cy,f.x0,f.y0,rr,f.r0,0.9,true)}
    measAt=performance.now()}
  function seg(x0,y0,x1,y1,r0,r1,d,ease){path.push({x0:x0,y0:y0,x1:x1,y1:y1,r0:r0,r1:r1,d:d,t:total,e:ease});total+=d}
  function at(t){t=t%total;for(var i=0;i<path.length;i++){var p=path[i];if(t<p.t+p.d){var u=(t-p.t)/p.d;if(p.e)u=u*u*(3-2*u);return{x:p.x0+(p.x1-p.x0)*u,y:p.y0+(p.y1-p.y0)*u,r:p.r0+(p.r1-p.r0)*u}}}return{x:W/2,y:H/2,r:120}}
  function frame(now){
    if(!running)return;requestAnimationFrame(frame);
    if(!vis||document.hidden){lastNow=now;return}
    if(!canHover){odd=!odd;if(odd)return}
    var dt=Math.min(0.06,(now-(lastNow||now))/1000);lastNow=now;
    if(now-measAt>2500)measure();if(!total)return;
    var tg;if(man>now){tg={x:mx,y:my,r:Math.max(90,Math.min(170,W*0.13))}}else{t0+=dt;tg=at(t0)}
    var k=Math.min(1,dt*(man>now?9:14));S.x+=(tg.x-S.x)*k;S.y+=(tg.y-S.y)*k;S.r+=(tg.r-S.r)*Math.min(1,dt*6);
    /* the aircraft drifts after its light and leans into the move */
    var want=Math.max(-W*0.2,Math.min(W*0.2,(S.x-W/2)*0.5)),ds=(want-shift)*Math.min(1,dt*2.2);shift+=ds;tilt+=((Math.max(-7,Math.min(7,ds/dt*0.045)))-tilt)*Math.min(1,dt*5);
    air.style.transform="translate3d("+shift.toFixed(1)+"px,0,0)";drone.style.transform="rotate("+tilt.toFixed(2)+"deg)";
    var R=sec.getBoundingClientRect(),F=fly.getBoundingClientRect(),cx=F.left-R.left+F.width*0.4875,cy=F.top-R.top+F.height*0.6,dx=S.x-cx,dy=S.y-cy,dist=Math.sqrt(dx*dx+dy*dy),ang=Math.atan2(-dx,dy)*57.2958;
    ray.style.transform="translate3d("+cx.toFixed(1)+"px,"+cy.toFixed(1)+"px,0) rotate("+ang.toFixed(2)+"deg) scale("+(S.r*1.7/100).toFixed(3)+","+(dist/100).toFixed(3)+")";
    spot.style.transform="translate3d("+S.x.toFixed(1)+"px,"+S.y.toFixed(1)+"px,0) scale("+(S.r*1.75/100).toFixed(3)+")";
    for(var i=0;i<texts.length;i++){var e=texts[i],lx=S.x-e._ox,ly=S.y-e._oy,near=lx>-S.r-20&&lx<e._w+S.r+20&&ly>-S.r-20&&ly<e._h+S.r+20;
      if(near){e.style.setProperty("--sx",lx.toFixed(1)+"px");e.style.setProperty("--sy",ly.toFixed(1)+"px");e.style.setProperty("--sr",S.r.toFixed(0)+"px");e._lit=1}
      else if(e._lit){e.style.setProperty("--sx","-9999px");e._lit=0}}
    /* the radio link from the remote in his hands up to the aircraft */
    if(pilot&&link){var P=pilot.getBoundingClientRect(),px=P.left-R.left+P.width*0.73,py=P.top-R.top+P.height*0.456,qx=F.left-R.left+F.width*0.5,qy=F.top-R.top+F.height*0.82,
      d="M"+px.toFixed(0)+" "+py.toFixed(0)+" Q"+(px+(qx-px)*0.18).toFixed(0)+" "+(qy+(py-qy)*0.28).toFixed(0)+" "+qx.toFixed(0)+" "+qy.toFixed(0);if(d!==lastLink){lastLink=d;link.setAttribute("d",d)}}
  }
  function start(){return;if(running)return;measure();if(!total)return;var f=path[0];S.x=W/2;S.y=f?f.y0:H/2;S.r=60;running=true;sec.classList.add("lit");requestAnimationFrame(frame)}
  /* pointing at the section steers the light for a moment */
  sec.addEventListener("pointermove",function(e){if(!running||e.pointerType==="touch")return;var R=sec.getBoundingClientRect();mx=e.clientX-R.left;my=e.clientY-R.top;man=performance.now()+2200},{passive:true});
  sec.addEventListener("touchmove",function(e){if(!running||!e.touches[0])return;var R=sec.getBoundingClientRect();mx=e.touches[0].clientX-R.left;my=e.touches[0].clientY-R.top-40;man=performance.now()+2200},{passive:true});
  window.addEventListener("resize",function(){if(running)measure()});window.addEventListener("ob-lang",function(){if(running)setTimeout(measure,120)});
  new IntersectionObserver(function(en){vis=en[0].isIntersecting},{rootMargin:"60px 0px"}).observe(sec);
  var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){sec.classList.add("live");io.disconnect();setTimeout(start,3300)}},{threshold:0.28});io.observe(sec);
});

/* ---------- start ---------- */
var h=(location.hash||"").replace("#","");
setType(h==="videos"||h==="photos"?h:(store("og-type")==="videos"?"videos":"photos"),false);
/* ---------- same visit, page loaded again: no intro a second time, and the page opens where it was ---------- */
function remember(){var t=String(Date.now());visit("og-in",t);store("og-in",t);try{if(!window.name||/^og-in:/.test(window.name))window.name="og-in:"+t}catch(e){}}
(function(){
  var lastSave=0,saveT=0;
  function save(){lastSave=Date.now();visit("og-y",String(Math.round(window.pageYOffset||0)))}
  window.addEventListener("scroll",function(){if(!introGone)return;clearTimeout(saveT);if(Date.now()-lastSave>500)save();else saveT=setTimeout(save,220)},{passive:true});
  window.addEventListener("pagehide",function(){if(introGone)save()});
  document.addEventListener("visibilitychange",function(){if(document.hidden&&introGone)save()});
  if(!back)return;
  if(!visit("og-in"))visit("og-in","1");
  entered=true;finishIntro();startHero();
  var y=parseInt(visit("og-y"),10)||0,touched=false;
  ["touchstart","wheel","keydown","mousedown"].forEach(function(t){window.addEventListener(t,function(){touched=true},{passive:true,capture:true})});
  try{history.scrollRestoration="manual"}catch(e){}
  function put(){if(touched||y<2)return;if(Math.abs((window.pageYOffset||0)-y)<3)return;try{window.scrollTo({top:y,left:0,behavior:"instant"})}catch(e){window.scrollTo(0,y)}}
  put();requestAnimationFrame(put);window.addEventListener("load",put);setTimeout(put,350);setTimeout(put,1200);
  /* the music was playing before: it carries on with the first tap (a browser will not start sound by itself) */
  if(window.OBMusic&&store("og-music")!=="off"){
    var arm=function(e){document.removeEventListener("click",arm);document.removeEventListener("keydown",arm);
      if(e.type==="click"&&e.target&&e.target.closest&&e.target.closest("#dj,#djVol,#sndBtn"))return;
      if(!OBMusic.isOn()){OBMusic.start();paintSnd()}};
    document.addEventListener("click",arm);document.addEventListener("keydown",arm);
  }
})();
/* ---------- language: English / Hebrew. Every visible string and label has a Hebrew twin; text that scripts write later is translated as it appears ---------- */
var HE={
"Or Bahar Aerial":"אור בכר · צילום אווירי","Welcome to Or Bahar Aerial":"ברוכים הבאים לאתר של אור בכר · צילום אווירי","Or Bahar":"אור בכר","OR BAHAR":"אור בכר","AERIAL PHOTOGRAPHY & FILM":"צילום אווירי · סטילס ווידאו",
"Aircraft locked · enter code":"הרחפן נעול · הקלידו קוד","Access granted":"הגישה אושרה","Enter the 4-character flight code to start the motors. No code?":"הקלידו את קוד הטיסה בן 4 התווים כדי להפעיל את המנועים. אין לכם קוד?","Message Or":"שלחו הודעה לאור","SKIP INTRO":"דילוג על הפתיח","WhatsApp":"וואטסאפ",
"Code accepted · motors armed":"הקוד התקבל · המנועים מוכנים","GPS 40 · cleared for take-off":"GPS 40 · אישור המראה","Wrong code · try again":"קוד שגוי · נסו שוב","Access code, 4 characters":"קוד גישה, 4 תווים",
"Commercial drone pilot · Israel":"מטיס רחפנים מסחרי · ישראל","Aerial film & photo":"צילום אווירי · וידאו וסטילס","Drone filming for":"צילומי רחפן",
"urban renewal":"להתחדשות עירונית","construction":"לאתרי בנייה","municipalities":"לרשויות מקומיות","public events":"לאירועים ציבוריים","solar farms":"לשדות סולאריים","real estate":"לנדל״ן",
"Drone filming for events, urban renewal, construction, municipalities and solar farms":"צילומי רחפן לאירועים, להתחדשות עירונית, לאתרי בנייה, לרשויות מקומיות ולשדות סולאריים",
"Years flying":"שנות ניסיון בטיסה","Licensed for commercial drone flights by the Civil Aviation Authority of Israel":"בעל רישיון להטסה מסחרית של רחפנים מטעם רשות התעופה האזרחית (רת״א)",
"Urban renewal":"התחדשות עירונית","Construction":"בנייה","Municipalities":"רשויות מקומיות","Events":"אירועים","Real estate":"נדל״ן",
"What I film":"מה אני מצלם","One pilot, every kind of project.":"מטיס אחד, לכל סוג של פרויקט.","Introduction":"פתיח","Or Bahar, aerial photography":"אור בכר, צילום אווירי",
"Events":"אירועים","Aerial shots of the venue, the crowd and the atmosphere.":"צילומי אוויר של המקום, של הקהל ושל האווירה.",
"Urban renewal & demolition":"התחדשות עירונית והריסה","Every stage documented, from the old building to the new one.":"תיעוד של כל שלב, מהבניין הישן ועד החדש.",
"Construction progress":"התקדמות בנייה","Regular flights that follow the build from groundwork to handover.":"טיסות קבועות שמלוות את הבנייה, מעבודות העפר ועד המסירה.",
"City projects, parks and public spaces, seen from above.":"פרויקטים עירוניים, פארקים ומרחבים ציבוריים במבט מלמעלה.",
"Solar & infrastructure":"סולארי ותשתיות","Progress and inspection footage for energy and utility sites.":"צילומי התקדמות ובדיקה לאתרי אנרגיה ותשתית.",
"Real estate & brands":"נדל״ן ומותגים","Marketing films that show a property and everything around it.":"סרטי שיווק שמציגים את הנכס ואת כל מה שסביבו.",
"Projects":"פרויקטים","Featured":"נבחרים","Solar & energy":"סולארי ואנרגיה","Construction & brands":"בנייה ומותגים","City & coast":"עיר וחוף","More photos":"עוד תמונות","All photos":"כל התמונות","All":"הכול","Behind the scenes":"מאחורי הקלעים",
"Ashdot Ya'akov":"אשדות יעקב","Solar farm":"שדה סולארי","Jordan Valley":"עמק הירדן","Sha'ar Golan project":"פרויקט שער הגולן","Northern Israel":"צפון הארץ","Ramat Ef'al":"רמת אפעל","Demolition":"הריסה","Santorini, Greece":"סנטוריני, יוון","Coastline":"קו החוף","Greece":"יוון","Eilat":"אילת","Amusement park under construction":"פארק שעשועים בהקמה","Amusement park":"פארק שעשועים","Petah Tikva":"פתח תקווה","Vineyard estate":"אחוזת כרמים","Winery":"יקב","Brand film":"סרט תדמית","Seafront towers":"מגדלים על קו הים","Residential project":"פרויקט מגורים","Hillside solar farm":"שדה סולארי על צלע ההר","Solar farm under construction":"שדה סולארי בהקמה","Earthworks beside the greenhouses":"עבודות עפר ליד החממות","Or Bahar flying on site":"אור בכר מטיס בשטח","City-centre demolition":"הריסה בלב העיר","City skyline":"קו הרקיע של העיר","Urban view":"מבט עירוני","Urban panorama":"פנורמה עירונית","Stitched panorama":"פנורמה מחוברת","Haifa":"חיפה","On the ground":"בגובה הקרקע","Solar build":"הקמת שדה סולארי","Hyperlapse":"היפרלפס","FPV":"FPV",
"Project category":"קטגוריית פרויקטים","Project photos. Swipe or use the arrow keys.":"תמונות פרויקטים. החליקו או השתמשו במקשי החצים.","Previous photo":"התמונה הקודמת","Next photo":"התמונה הבאה","Slide to move through the photos":"גררו כדי לעבור בין התמונות","Choose photo":"בחירת תמונה","Pause slideshow":"השהיית המצגת","Play slideshow":"הפעלת המצגת","Media type":"סוג המדיה","Photos":"תמונות","Videos":"סרטונים","Photo category":"קטגוריית תמונות","Photo wheel. Scroll, or use the up and down arrow keys.":"גלגל התמונות. גללו או השתמשו במקשי החצים למעלה ולמטה.","Scroll to spin":"גללו כדי לסובב","Exit gallery":"יציאה מהגלריה","Leave the gallery, back up the page":"יציאה מהגלריה וחזרה למעלה",
"Video category":"קטגוריית סרטונים","Featured video. Swipe or use the arrow keys.":"הסרטון המוצג. החליקו או השתמשו במקשי החצים.","Previous video":"הסרטון הקודם","Next video":"הסרטון הבא","Pause autoplay":"השהיית ההחלפה האוטומטית","Resume autoplay":"המשך ההחלפה האוטומטית","Choose a video":"בחירת סרטון","Watch with sound":"צפייה עם סאונד",
"Ferris wheel over Eilat's new amusement park":"גלגל ענק מעל פארק השעשועים החדש באילת","Excavator taking apart a red-roof building":"מחפר מפרק בניין עם גג רעפים אדום","Pull-back from the site to the whole neighborhood":"התרחקות מהאתר אל כל השכונה","Old apartment blocks before demolition":"בנייני מגורים ישנים לפני ההריסה","panels going up under the clouds":"פאנלים מוקמים מתחת לעננים","rooftop pool & tennis court":"בריכה ומגרש טניס על הגג","Solar farm beside the village":"שדה סולארי ליד היישוב","Solar farm between orchards and a reservoir":"שדה סולארי בין מטעים למאגר מים","Excavator tearing down the top floors":"מחפר מפרק את הקומות העליונות","Vineyards and winery estate":"כרמים ואחוזת יקב","Wide sweep over the finished solar field":"מעבר רחב מעל השדה הסולארי המוגמר","solar frames rising on the hillside":"קונסטרוקציות סולאריות עולות על צלע ההר","Glass-walled clubhouse above the sea":"מועדון עם קירות זכוכית מעל הים","Top-down: the roof is taken apart":"מבט מלמעלה: מפרקים את הגג","Top-down over the panel rows":"מבט מלמעלה על שורות הפאנלים","FPV through an empty building and out over the site":"טיסת FPV דרך בניין ריק והחוצה אל מעל האתר","Endless panel rows to the horizon":"שורות פאנלים עד האופק","From the roof down into the demolition":"מהגג אל תוך ההריסה","Coastal skyline":"קו רקיע על החוף","real-estate project film":"סרט לפרויקט נדל״ן","Gliding over the panels toward the mountains":"גלישה מעל הפאנלים אל עבר ההרים","Transformer station between the panels":"תחנת טרנספורמציה בין הפאנלים","Excavator clearing a demolished wing":"מחפר מפנה אגף שנהרס","Glass office towers":"מגדלי משרדים מזכוכית","earthworks beside the greenhouses":"עבודות עפר ליד החממות","Inverter stations across the solar field":"תחנות ממירים לרוחב השדה הסולארי","Close-up: the arm breaks through the walls":"תקריב: הזרוע פורצת את הקירות","Residential towers under construction":"מגדלי מגורים בבנייה","Low pass along a single panel row":"מעבר נמוך לאורך שורת פאנלים אחת","The last section comes down":"החלק האחרון יורד","Store opening at a shopping center":"פתיחת חנות במרכז קניות","vertical reel":"סרטון אנכי","Crew laying cables at the inverter":"צוות מניח כבלים ליד הממיר","Technician working inside the inverter station":"טכנאי עובד בתוך תחנת הממירים","Water jets keeping the dust down":"סילוני מים שמשקיעים את האבק","Overhead: hands-on cable work":"מלמעלה: עבודת כבלים ידנית","Electricians wiring the station":"חשמלאים מחווטים את התחנה","Ground-level orbit around the excavator":"הקפה בגובה הקרקע סביב המחפר","Telehandler moving materials on site":"מלגזה טלסקופית משנעת חומרים באתר","Battery storage containers":"מכולות אגירת אנרגיה","From the neighborhood down to the demolition":"מהשכונה אל אתר ההריסה","The facade comes off floor by floor":"החזית יורדת קומה אחר קומה","Long panel rows seen from above":"שורות פאנלים ארוכות במבט מלמעלה","Dust and water as the wall comes down":"אבק ומים כשהקיר קורס","Orbit around the transformer station":"הקפה סביב תחנת הטרנספורמציה","Clearing rubble beside the open floors":"פינוי הריסות ליד הקומות הפתוחות","Street closed for the demolition crew":"רחוב סגור לטובת צוות ההריסה","Low flight over the panel surface":"טיסה נמוכה מעל משטח הפאנלים","The arm reaches the top floor":"הזרוע מגיעה לקומה העליונה","Top-down: connecting the cables":"מבט מלמעלה: חיבור הכבלים","The facade torn open, seen from the roofline":"החזית נפערת, במבט מקו הגג","Cabling under the inverter station":"כבילה מתחת לתחנת הממירים","Excavator opening the corner of the building":"מחפר פותח את פינת הבניין","Overhead: pulling cables into the trench":"מלמעלה: משיכת כבלים אל התעלה","Cable and conduit work from above":"עבודות כבלים וצנרת במבט מלמעלה","Operator's hands on the machine remote":"ידי המפעיל על השלט של המכונה","Street-level view of the excavator at work":"המחפר בעבודה, במבט מגובה הרחוב","Or Bahar filming a new house":"אור בכר מצלם בית חדש","Or Bahar flying on a residential street":"אור בכר מטיס ברחוב מגורים",
"Hello,":"שלום,","I'm Or.":"אני אור.","Drone photographer for over ten years. I plan every flight, fly safely by the rules and deliver edited, ready-to-use footage.":"צלם רחפן כבר יותר מעשר שנים. אני מתכנן כל טיסה, מטיס בבטחה ולפי הכללים, ומוסר חומר ערוך ומוכן לשימוש.","Licensed":"מורשה","Commercial drone license, Civil Aviation Authority of Israel":"רישיון הטסה מסחרי לרחפנים, רשות התעופה האזרחית (רת״א)","Registered":"רשום","All drones registered with the Civil Aviation Authority":"כל הרחפנים רשומים ברשות התעופה האזרחית",
"Flight request":"בקשת טיסה","Flight plan":"תוכנית טיסה","Cleared for take-off":"מאושר להמראה","Taking off\u2026":"ממריאים\u2026","Book a shoot":"הזמנת צילום","Full name":"שם מלא","Phone":"טלפון","Email (optional)":"אימייל (לא חובה)","What do you need filmed?":"מה צריך לצלם?","Municipality":"רשות מקומית","Something else":"משהו אחר","Preferred date":"תאריך מועדף","Location":"מיקום","A few details about the project":"כמה פרטים על הפרויקט","Send request":"שליחת הבקשה","Send on WhatsApp":"שליחה בוואטסאפ","Sending opens your email app with the request filled in. Nothing is stored on this site.":"השליחה פותחת את אפליקציית המייל שלכם עם הבקשה מוכנה. שום דבר לא נשמר באתר.","Request ready for take-off":"הבקשה מוכנה להמראה","Request sent":"הבקשה נשלחה","Your request is on its way to Or's inbox. He will get back to you soon.":"הבקשה בדרך לתיבת המייל של אור. הוא יחזור אליכם בהקדם.","Open my email app":"פתיחת אפליקציית המייל","Your request goes straight to Or's inbox. If this device cannot send it, your email app opens with the request ready.":"הבקשה נשלחת ישר לתיבת המייל של אור. אם המכשיר לא מצליח לשלוח, אפליקציית המייל תיפתח עם הבקשה מוכנה.","Your email app should now be open with everything filled in. Press send there and I'll get back to you.":"אפליקציית המייל אמורה להיפתח עכשיו עם כל הפרטים. לחצו שם על שליחה ואחזור אליכם.","WhatsApp should now be open with your request written out. Press send there and I'll get back to you.":"וואטסאפ אמור להיפתח עכשיו עם הבקשה כתובה. לחצו שם על שליחה ואחזור אליכם.","Send on WhatsApp instead":"לשלוח בוואטסאפ במקום","Copy the request":"העתקת הבקשה","Edit":"עריכה","Please add your name.":"נא למלא שם.","Please add a phone number or an email so I can get back to you.":"נא למלא טלפון או אימייל כדי שאוכל לחזור אליכם.","That email address doesn't look complete.":"כתובת האימייל נראית חסרה.","Request copied":"הבקשה הועתקה","Copy is not available here":"אי אפשר להעתיק כאן","Copied":"הועתק","Selected, ready to copy":"מסומן ומוכן להעתקה",
"Hi Or,":"היי אור,","I'd like to book a drone shoot.":"אשמח להזמין צילום רחפן.","Name:":"שם:","Phone:":"טלפון:","Email:":"אימייל:","Project:":"פרויקט:","Preferred date:":"תאריך מועדף:","Location:":"מיקום:","Details:":"פרטים:","Sent from your aerial gallery.":"נשלח מגלריית הצילומים שלך.","Drone shoot request –":"בקשה לצילום רחפן –",
"Or Bahar · All rights reserved. All photos and videos © Or Bahar.":"אור בכר · כל הזכויות שמורות. כל התמונות והסרטונים © אור בכר.","Contact":"יצירת קשר","Contact Or Bahar":"יצירת קשר עם אור בכר",
"Boarding pass":"כרטיס עלייה","Flight OB 10":"טיסה OB 10","Welcome offer":"הטבת היכרות","off":"הנחה","your first shoot":"על הצילום הראשון","Planning a shoot? Message Or directly and mention this pass.":"מתכננים צילום? שלחו לאור הודעה ישירה וציינו את הכרטיס הזה.","Claim on WhatsApp":"מימוש בוואטסאפ","Call":"חיוג","Close":"סגירה","Welcome offer: 10% off your first shoot":"הטבת היכרות: 10% הנחה על הצילום הראשון",
"Live set · tap to mute":"סט חי · הקישו להשתקה","Tap to play":"הקישו לניגון","Music on. Tap the DJ to mute.":"המוזיקה פועלת. הקישו על הדי־ג׳יי להשתקה.","Music off. Tap the DJ to play.":"המוזיקה כבויה. הקישו על הדי־ג׳יי לניגון.","Turn music on":"הפעלת המוזיקה","Mute music":"השתקת המוזיקה",
"Full-screen view":"תצוגת מסך מלא","Previous":"הקודם","Next":"הבא","Length":"אורך","Resolution":"רזולוציה","Altitude":"גובה","Camera tilt":"הטיית מצלמה","Date":"תאריך","Time":"שעה",
"Before take-off":"לפני ההמראה","Questions & answers":"שאלות ותשובות","Tap a question. The short answers are here, the long ones are one message away.":"הקישו על שאלה. התשובות הקצרות כאן, והארוכות במרחק הודעה אחת.",
"What happens if it rains?":"מה קורה אם יורד גשם?","We fly only in suitable conditions. A drone cannot fly in the rain, so if the weather turns we set a new date.":"מטיסים רק בתנאים מתאימים. בגשם אי אפשר להטיס, לכן אם מזג האוויר משתנה קובעים מועד חדש.",
"Do you have a licence?":"יש לך רישיון?","Yes. A commercial drone licence from the Civil Aviation Authority of Israel, and every drone is registered.":"כן. רישיון הטסה מסחרי מרשות התעופה האזרחית (רת״א), וכל הרחפנים רשומים.",
"Where do you fly?":"איפה אתה מטיס?","All over Israel. The gallery runs from the north down to Eilat. If it is allowed to fly there, we will get there.":"בכל הארץ. הגלריה נמתחת מהצפון ועד אילת. אם מותר להטיס שם, אנחנו נגיע לשם.",
"What do I get at the end?":"מה מקבלים בסוף?","4K video and high-resolution stills, unedited, for marketing, progress reports, presentations and social media. Editing can be added at an extra charge.":"וידאו ב־4K ותמונות ברזולוציה גבוהה, ללא עריכה, לשיווק, לדוחות התקדמות, למצגות ולרשתות החברתיות. אפשר להוסיף עריכה בתוספת תשלום.",
"When do I get the footage?":"מתי מקבלים את החומר?","We agree on a delivery date before take-off, so you know exactly when to expect it. No refreshing your inbox.":"קובעים מועד מסירה עוד לפני ההמראה, כך שתדעו בדיוק מתי לצפות לחומר. בלי לרענן את תיבת המייל.",
"How much does it cost?":"כמה זה עולה?","It depends on the location and the flight time. Editing, if you want it, is priced separately. Send a few details and you get a clear quote, with 10% off your first shoot.":"תלוי במיקום ובזמן הטיסה. עריכה, אם רוצים, מתומחרת בנפרד. שלחו כמה פרטים ותקבלו הצעת מחיר ברורה, עם 10% הנחה על הצילום הראשון.",
"Can you fly inside a building?":"אפשר להטיס בתוך מבנה?","Yes. A small FPV drone flies through rooms and corridors and out of the window in one continuous shot. There is one in the videos.":"כן. רחפן FPV קטן עובר בין חדרים ומסדרונות ויוצא מהחלון בשוט אחד רציף. יש דוגמה בסרטונים.",
"How high can you fly?":"לאיזה גובה אפשר להגיע?","50 metres above ground level, in line with the Civil Aviation Authority rules.":"50 מטר מעל פני הקרקע, לפי כללי רת״א.",
"How far ahead should I book?":"כמה זמן מראש כדאי להזמין?","The earlier the better: clear days and sunset hours go first. In a hurry? Message me, sometimes the sky cooperates.":"כמה שיותר מוקדם: ימים בהירים ושעות שקיעה נתפסים ראשונים. דחוף? שלחו הודעה, לפעמים השמיים משתפים פעולה.",

"Your project deserves a view from above.":"הפרויקט שלכם שווה מבט מלמעלה.","Tell me what you need filmed and I will get back to you with a plan and a quote.":"ספרו לי מה צריך לצלם, ואחזור אליכם עם תוכנית והצעת מחיר.","Message me on WhatsApp":"שלחו לי הודעה בוואטסאפ","Fill in the booking form":"למילוי טופס ההזמנה",
"Language":"שפה","Welcome to":"ברוכים הבאים ל","Or Bahar · Aerial photography":"אור בכר · צילום אווירי","Or's gallery":"הגלרייה של אור","Aerial film and photo, all over Israel":"וידאו וצילום אווירי, בכל הארץ","Take me to Or's gallery":"קח אותי לגלרייה של אור","Soft music · you can turn it off any time":"מוזיקה שקטה · אפשר לכבות בכל רגע","Sound":"סאונד","Music":"מוזיקה","Music volume":"עוצמת המוזיקה","Quiet":"שקט","Medium":"בינוני","Full":"מלא","Photo sounds":"צלילי תמונות","A soft flick for every photo, even with the music off":"צליל דפדוף עדין לכל תמונה, גם כשהמוזיקה כבויה","Welcome to Or's gallery":"ברוכים הבאים לגלרייה של אור","Footage check":"בדיקת החומר","Editing (optional)":"עריכה (אופציונלי)","Solar":"סולארי","events":"לאירועים","Event":"אירוע","Please add a phone number so I can get back to you.":"הוסיפו מספר טלפון כדי שאוכל לחזור אליכם.","The request opens in WhatsApp, ready to send to Or. Nothing is stored on this site.":"הבקשה נפתחת בוואטסאפ, מוכנה לשליחה לאור. שום דבר לא נשמר באתר.","WhatsApp is open":"וואטסאפ נפתח","Your request is written out there. Press send in WhatsApp and I'll get back to you.":"הבקשה כתובה שם. לחצו על שליחה בוואטסאפ ואחזור אליכם.","Open WhatsApp again":"לפתוח שוב את וואטסאפ","Photos. Swipe sideways, or use the arrow keys.":"תמונות. החליקו הצידה או השתמשו במקשי החצים.","Aircraft ready":"הרחפן מוכן","Aircraft ready · tap to start":"הרחפן מוכן · הקישו להתנעה","Enter the site":"כניסה לאתר","One tap starts the motors and opens the site.":"הקשה אחת מתניעה את המנועים ופותחת את האתר.","Motors armed":"המנועים מוכנים","Back to the top":"חזרה לראש האתר","Jump to the end":"קפיצה לסוף האתר","Skip the gallery":"דילוג על הגלריה","Ready to send":"מוכן לשליחה","Everything is written out. Choose how to send it: one tap and it is with Or.":"הכול כבר כתוב. בחרו איך לשלוח: לחיצה אחת וזה אצל אור.","Send by email":"שליחה במייל","Send on WhatsApp too":"לשלוח גם בוואטסאפ","Open WhatsApp again":"פתיחת וואטסאפ שוב","Your details go only to Or. Nothing is stored on this site.":"הפרטים נשלחים רק לאור. שום דבר לא נשמר באתר.","Select the text and copy it":"סמנו את הטקסט והעתיקו","The request, ready to copy":"הבקשה, מוכנה להעתקה","Rain? We wait.":"גשם? מחכים.","Clear sky. Take-off.":"שמיים נקיים. ממריאים.","Every drone registered":"כל הרחפנים רשומים","Commercial drone licence":"רישיון מסחרי להטסת רחפן","Civil Aviation Authority of Israel":"רשות התעופה האזרחית (רת״א)","Valid":"בתוקף","4K video":"וידאו 4K","High-res stills":"סטילס באיכות גבוהה","Editing: optional extra":"עריכה: בתוספת תשלום","Shoot day":"יום הצילום","Editing":"עריכה","Delivery":"מסירה","Date agreed before take-off":"מועד המסירה נקבע מראש","Quote":"הצעת מחיר","Flight time":"זמן טיסה","Clear quote":"מחיר ברור","First shoot":"צילום ראשון","One continuous shot":"שוט אחד רציף","50 m above the ground":"50 מ׳ מעל הקרקע","The best angle":"הזווית הכי טובה","Taken":"תפוס","Your date":"התאריך שלכם","Or Bahar · drone pilot":"אור בכר · מטיס הרחפן","Or Bahar flying the drone with a DJI remote":"אור בכר מטיס את הרחפן עם שלט DJI","Set the site up the way that suits you":"התאימו את האתר בדיוק לצרכים שלכם","Quick profiles":"פרופילים מהירים","Text":"טקסט","Colours":"צבעים","Reading and navigation aids":"עזרי קריאה וניווט","Motion and sound":"תנועה וצליל","Jump to a part of the page":"קפיצה לחלק בעמוד","Keyboard: Alt + A opens this menu, Tab moves between items, Enter activates and Esc closes.":"מקלדת: Alt + A פותח את התפריט, Tab עובר בין הפריטים, Enter מפעיל ו-Esc סוגר.","Stop reading":"עצירת ההקראה","Highlight headings":"הדגשת כותרות","Invert colours":"היפוך צבעים","Soft colours":"צבעים רכים","Reading guide":"סרגל קריאה","Reading mask":"מסכת קריאה","Read aloud":"הקראה בקול","Magnify text":"זכוכית מגדלת לטקסט","Keyboard navigation":"ניווט במקלדת","Low vision":"ראייה חלשה","Bigger text, high contrast, marked links":"טקסט גדול, ניגודיות גבוהה וקישורים מסומנים","Easy reading":"קריאה נוחה","Clear font, wider spacing, reading guide":"גופן ברור, ריווח רחב וסרגל קריאה","Calm mode":"מצב רגוע","No motion, no music, softer colours":"בלי תנועה, בלי מוזיקה וצבעים רכים","Keyboard and motor":"מקלדת ומוטוריקה","Bold focus, marked links, big cursor":"מיקוד בולט, קישורים מסומנים וסמן גדול","Top of the page":"ראש העמוד","Photo gallery":"גלריית התמונות","Photo wheel":"גלגל התמונות","Films":"סרטונים","About Or":"על אור","On":"פועל","Off":"כבוי","Read aloud is on. Tap or point at any text to hear it.":"ההקראה פועלת. הקישו או הצביעו על טקסט כדי לשמוע אותו.","Skip to content":"דילוג לתוכן","Accessibility options":"אפשרויות נגישות","Accessibility":"נגישות","Text size":"גודל הטקסט","Smaller text":"הקטנת הטקסט","Bigger text":"הגדלת הטקסט","High contrast":"ניגודיות גבוהה","Grayscale":"גווני אפור","Highlight links":"הדגשת קישורים","Readable font":"גופן קריא","Text spacing":"ריווח טקסט","Stop animations":"עצירת אנימציות","Big cursor":"סמן גדול","Stop the music":"השתקת המוזיקה","Reset":"איפוס","Close accessibility options":"סגירת אפשרויות הנגישות","Accessibility statement":"הצהרת נגישות","This site is built so that everyone can use it: it works with a keyboard and with screen readers, text can be enlarged, contrast can be raised and animations can be stopped. If something does not work for you, tell me and I will fix it.":"האתר נבנה כך שכל אחד יוכל להשתמש בו: אפשר לנווט במקלדת ובקורא מסך, להגדיל טקסט, להגביר ניגודיות ולעצור אנימציות. אם משהו לא עובד עבורכם, כתבו לי ואתקן.","Report a problem":"דיווח על בעיה","on":"פעיל","Normal":"רגיל","Animations stopped":"האנימציות נעצרו","Accessibility settings reset":"הגדרות הנגישות אופסו","English":"English","Hebrew":"עברית"
};
var I18N=(function(){
  var lang="en",obs=null,ATTR=["aria-label","placeholder","title","alt"],hasL=/[A-Za-z]{2}/;
  var RX=[
    [/^Photo (\d+)$/,function(m){return "תמונה "+m[1]}],
    [/^Photo (\d+): (.+)$/,function(m){return "תמונה "+m[1]+": "+(core(m[2])||m[2])}],
    [/^Photo wheel, photo (\d+) of (\d+)\. Scroll, or use the up and down arrow keys\.$/,function(m){return "גלגל התמונות, תמונה "+m[1]+" מתוך "+m[2]+". גללו או השתמשו במקשי החצים למעלה ולמטה."}],
    [/^(\d+) m$/,function(m){return m[1]+" מ׳"}],
    [/^Altitude (\d+) m$/,function(m){return "גובה "+m[1]+" מ׳"}],
    [/^Motor (\d) armed$/,function(m){return "מנוע "+m[1]+" מוכן"}],
    [/^Music volume (\d+) percent\. Tap to change\.$/,function(m){return "עוצמת המוזיקה "+m[1]+" אחוז. הקישו לשינוי."}],
    [/^Volume (\d+)%$/,function(m){return "עוצמה "+m[1]+"%"}],
    [/^Play video: (.+)$/,function(m){return "ניגון הסרטון: "+(core(m[1])||m[1])}],
    [/^Open photo (.+)$/,function(m){return "פתיחת התמונה "+(core(m[1])||m[1])}],
    [/^Text size (\d+)%$/,function(m){return "גודל הטקסט "+m[1]+"%"}],
    [/^(.+), (\d+:\d\d)$/,function(m){var t=core(m[1]);return t?t+", "+m[2]:null}],
    [/^(.+?)\. (.+\.)$/,function(m){var a=core(m[1]),b=core(m[2]);return a&&b?a+". "+b:null}]
  ];
  function core(s){
    var h=HE[s];if(h!==undefined)return h;
    for(var i=0;i<RX.length;i++){var m=RX[i][0].exec(s);if(m){var r=RX[i][1](m);if(r!=null)return r}}
    if(s.indexOf(" · ")>0){var p=s.split(" · "),ch=false,o=p.map(function(x){var t=core(x);if(t!=null){ch=true;return t}return x});if(ch)return o.join(" · ")}
    return null}
  function tr(raw){var m=/^(\s*)([\s\S]*?)(\s*)$/.exec(raw),k=m[2].replace(/\s+/g," ");if(!k||!hasL.test(k))return null;var t=core(k);return t==null?null:m[1]+t+m[3]}
  function skip(el){return !el||!el.closest||el.closest("script,style,[data-noi18n],.osd,.hudrow,.gc,svg")}
  function textNode(n){
    if(lang==="he"){if(n.obHe!==undefined&&n.nodeValue===n.obHe)return;if(skip(n.parentNode))return;var t=tr(n.nodeValue);if(t!=null){n.obEn=n.nodeValue;n.obHe=t;n.nodeValue=t}}
    else if(n.obHe!==undefined){if(n.nodeValue===n.obHe)n.nodeValue=n.obEn;n.obHe=n.obEn=undefined}}
  function attrs(el){
    for(var i=0;i<ATTR.length;i++){var a=ATTR[i];if(!el.hasAttribute(a))continue;var v=el.getAttribute(a),st=el.obA||(el.obA={}),rec=st[a];
      if(lang==="he"){if(rec&&rec.he===v)continue;var t=tr(v);if(t!=null){st[a]={en:v,he:t};el.setAttribute(a,t)}}
      else if(rec){if(rec.he===v)el.setAttribute(a,rec.en);st[a]=null}}}
  function walk(root){
    if(root.nodeType===3){textNode(root);return}if(root.nodeType!==1)return;
    var tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),n,list=[];while((n=tw.nextNode()))list.push(n);for(var i=0;i<list.length;i++)textNode(list[i]);
    if(root.hasAttribute&&!skip(root))attrs(root);var els=root.querySelectorAll("[aria-label],[placeholder],[title],[alt]");for(var j=0;j<els.length;j++)if(!skip(els[j]))attrs(els[j])}
  function watch(){
    if(obs||!("MutationObserver" in window))return;
    obs=new MutationObserver(function(recs){if(lang!=="he")return;for(var i=0;i<recs.length;i++){var r=recs[i];
      if(r.type==="characterData")textNode(r.target);
      else if(r.type==="attributes"){if(!skip(r.target))attrs(r.target)}
      else for(var j=0;j<r.addedNodes.length;j++)walk(r.addedNodes[j])}});
    obs.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:ATTR})}
  /* pieces that are built letter by letter need their own handling */
  var heroEn=null,nameEn=null,titleEn=document.title;
  function special(){
    var nm=$("#introName");if(nm){if(nameEn==null)nameEn=nm.innerHTML;nm.innerHTML=lang==="he"?"<span>אור בכר</span>":nameEn;nm.setAttribute("aria-label",lang==="he"?"אור בכר":"Or Bahar")}
    var h1=$(".hero h1");if(h1&&window.obHero){if(lang==="he")obHero('אור בכר<span class="sub">צילום אווירי · וידאו וסטילס</span>',"אור בכר. צילום אווירי, וידאו וסטילס");else obHero('Or Bahar<span class="sub">Aerial film &amp; photo</span>',"Or Bahar. Aerial film and photo")}
    document.title=lang==="he"?"אור גלרייה · תיק עבודות":titleEn}
  function paintSw(){var lf=document.getElementById("langF");if(lf){var o=lang==="he"?"en":"he";lf.setAttribute("data-to",o);lf.setAttribute("lang",o);lf.setAttribute("aria-label",o==="he"?"עברית":"English");lf.lastChild.textContent=o==="he"?"עב":"EN"}[].forEach.call(document.querySelectorAll(".lang"),function(sw){sw.setAttribute("data-l",lang);[].forEach.call(sw.querySelectorAll("button"),function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-lang")===lang))})})}
  function apply(){
    var de=document.documentElement;de.lang=lang;de.dir=lang==="he"?"rtl":"ltr";
    if(window.OBFaq)OBFaq.plain();
    special();walk(document.body);paintSw();if(lang==="he")watch();
    try{window.dispatchEvent(new Event("ob-lang"))}catch(e){}
    try{window.dispatchEvent(new Event("resize"))}catch(e){}}
  var swapT=0;
  function set(l,quiet){
    l=l==="he"?"he":"en";if(l===lang)return;lang=l;store("og-lang",l);
    var de=document.documentElement;clearTimeout(swapT);
    if(quiet||reduce){apply();return}
    de.classList.add("lang-out");swapT=setTimeout(function(){apply();de.classList.remove("lang-out");de.classList.add("lang-in");swapT=setTimeout(function(){de.classList.remove("lang-in")},520)},210)}
  document.addEventListener("click",function(e){var f=e.target.closest&&e.target.closest("#langF");if(f){f.classList.remove("flip");void f.offsetWidth;f.classList.add("flip");set(f.getAttribute("data-to")||"en");return}var b=e.target.closest&&e.target.closest(".lang button");if(b){set(b.getAttribute("data-lang"));if(window.OBMusic&&OBMusic.blip&&OBMusic.isOn())OBMusic.blip(b.getAttribute("data-lang")==="he"?880:660,0.09,"triangle",0.03)}});
  return{set:set,get:function(){return lang},t:function(s){if(lang!=="he")return s;var t=tr(s);return t==null?s:t},init:function(){paintSw();var sv=store("og-lang"),df=window.OB_LANG==="en"?"en":"he";if((sv==="en"||sv==="he"?sv:df)==="he")set("he",true);else{document.documentElement.lang="en";document.documentElement.dir="ltr"}}};
})();
function tx(s){return I18N.t(s)}
I18N.init();

/* ---------- accessibility menu: quick profiles, text, colours, reading aids, motion and sound, page map ---------- */
laterNow("a11y",function(){
  var btn=$("#a11yBtn"),panel=$("#a11y"),veil=$("#a11yVeil"),body=$("#a11yBody");if(!btn||!panel)return;
  var de=document.documentElement,S='fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var hasTTS=("speechSynthesis" in window)&&("SpeechSynthesisUtterance" in window);
  /* [key, label, group, icon] */
  var OPTS=[
    ["font","Readable font","text",'<path d="M5 19l5.5-14h3L19 19M7.8 14h8.4"/>'],
    ["space","Text spacing","text",'<path d="M4 6h16M4 12h16M4 18h16"/><path d="M2 3v18M22 3v18" opacity=".5"/>'],
    ["links","Highlight links","text",'<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'],
    ["heads","Highlight headings","text",'<path d="M6 5v14M18 5v14M6 12h12"/>'],
    ["hc","High contrast","color",'<circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor"/>'],
    ["inv","Invert colours","color",'<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>'],
    ["gray","Grayscale","color",'<path d="M12 3s6.5 6.8 6.5 11.2a6.5 6.5 0 0 1-13 0C5.5 9.8 12 3 12 3z"/>'],
    ["sat","Soft colours","color",'<circle cx="9" cy="9.5" r="5"/><circle cx="15" cy="9.5" r="5"/><circle cx="12" cy="14.5" r="5"/>'],
    ["guide","Reading guide","read",'<path d="M3 12h18"/><path d="M6 7h12M6 17h8" opacity=".45"/>'],
    ["mask","Reading mask","read",'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9.5h18M3 14.5h18"/>'],
    ["speak","Read aloud","read",'<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'],
    ["zoom","Magnify text","read",'<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21M10.5 8v5M8 10.5h5"/>'],
    ["cursor","Big cursor","read",'<path d="M5 3l14 11-6.5 1 4 7.5-3 1.5-4-7.5L5 21z"/>'],
    ["kbd","Keyboard navigation","read",'<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M7.5 14h9"/>'],
    ["still","Stop animations","motion",'<circle cx="12" cy="12" r="9"/><path d="M9.5 8.5v7M14.5 8.5v7"/>'],
    ["mute","Stop the music","motion",'<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5z"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>']
  ];
  /* [id, title, what it does, icon, settings] */
  var PROFS=[
    ["vision","Low vision","Bigger text, high contrast, marked links",'<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',{t:2,hc:1,links:1,cursor:1}],
    ["easy","Easy reading","Clear font, wider spacing, reading guide",'<path d="M4 5.5c2.7-1 5.4-.9 8 .6v13c-2.6-1.5-5.3-1.6-8-.6zM20 5.5c-2.7-1-5.4-.9-8 .6v13c2.6-1.5 5.3-1.6 8-.6z"/>',{font:1,space:1,guide:1}],
    ["calm","Calm mode","No motion, no music, softer colours",'<path d="M3 12h4l2-5 3 10 2.5-7 1.5 2h5"/>',{still:1,mute:1,sat:1}],
    ["motor","Keyboard and motor","Bold focus, marked links, big cursor",'<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M7.5 14h9"/>',{kbd:1,links:1,cursor:1}]
  ];
  var JUMPS=[["top","Top of the page",".hero"],["services","What I film","#services"],["projects","Photo gallery","#projects"],["drum","Photo wheel","#drum"],["cine","Films","#gallery","#tab-videos"],["about","About Or","#about"],["book","Book a shoot","#book"],["faq","Questions & answers","#faq"],["closing","Contact","#closing"]];
  var KEYS=["hc","inv","gray","sat","links","heads","font","space","still","cursor","guide","mask","speak","zoom","kbd"];
  var st={t:0},SC=[1,1.15,1.3,1.5],pct=$("#a11yPct"),steps=$("#a11ySteps"),badge=$("#a11yN"),live=$("#a11yLive"),open=false,lastFocus=null;
  KEYS.forEach(function(k){st[k]=0});
  try{var sv=JSON.parse(store("og-a11y")||"{}");for(var k0 in st)if(sv[k0])st[k0]=sv[k0]}catch(e){}
  if(!hasTTS)st.speak=0;
  function musicOn(){return !!(window.OBMusic&&OBMusic.isOn())}
  function isOn(k){return k==="mute"?!musicOn():!!st[k]}
  /* build the tiles */
  var optBtn={},profBtn={};
  OPTS.forEach(function(o){var g=panel.querySelector('.a11y-grid[data-g="'+o[2]+'"]');if(!g)return;var b=el("button","a11y-opt");b.type="button";b.setAttribute("data-k",o[0]);b.setAttribute("aria-pressed","false");
    b.innerHTML='<svg viewBox="0 0 24 24" '+S+' aria-hidden="true">'+o[3]+'</svg><i class="a11y-sw" aria-hidden="true"></i><span class="a11y-lb"></span>';b.lastChild.textContent=o[1];if(o[0]==="speak"&&!hasTTS)b.hidden=true;g.appendChild(b);optBtn[o[0]]=b});
  var ph=$("#a11yProfs");
  PROFS.forEach(function(p){var b=el("button","a11y-prof");b.type="button";b.setAttribute("data-p",p[0]);b.setAttribute("aria-pressed","false");
    b.innerHTML='<svg class="a11y-pi" viewBox="0 0 24 24" '+S+' aria-hidden="true">'+p[3]+'</svg><b></b><small></small><span class="a11y-ck" aria-hidden="true"><svg viewBox="0 0 24 24"><path pathLength="1" d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>';
    b.querySelector("b").textContent=p[1];b.querySelector("small").textContent=p[2];ph.appendChild(b);profBtn[p[0]]=b});
  [].forEach.call(body.children,function(c,i){c.style.setProperty("--k",String(i))});
  function save(){try{store("og-a11y",JSON.stringify(st))}catch(e){}}
  function tell(m){try{say(m)}catch(_){}if(live){live.textContent="";setTimeout(function(){live.textContent=m},40)}}
  /* text size: every element that holds text gets its own size raised; big headlines grow less than body text */
  var SEL="main p,main li,main h2,main h3,main h4,main a,main button,main label,main input,main textarea,main span,main b,main small,main strong,footer span,.top a,.top button,.dock p,.dock a,.dock small,.dock span,.fab-l,.lb span,.lb p";
  function hasText(e){for(var n=e.firstChild;n;n=n.nextSibling)if(n.nodeType===3&&/\S/.test(n.nodeValue))return true;return /^(INPUT|TEXTAREA)$/.test(e.tagName)}
  function scale(full){
    var f=SC[st.t],els=document.querySelectorAll(SEL),i,e,list=[];
    if(full||f===1)for(i=0;i<els.length;i++){e=els[i];if(e.obFs){e.style.fontSize="";e.obFs=0}}
    if(f===1)return;
    for(i=0;i<els.length;i++){e=els[i];if(e.obFs||e.closest(".osd,.dj,.intro,.a11y,svg")||!hasText(e))continue;list.push(e)}
    var sizes=list.map(function(x){return parseFloat(getComputedStyle(x).fontSize)||16});
    list.forEach(function(x,ix){var b=sizes[ix],kk=1+(f-1)*Math.min(1,22/b);x.obFs=1;x.style.fontSize=(b*kk).toFixed(1)+"px"})}
  var scT=0;function rescale(){clearTimeout(scT);scT=setTimeout(function(){scale(true)},160)}
  setInterval(function(){if(st.t)scale(false)},1500);
  window.addEventListener("resize",function(){if(st.t)rescale()});window.addEventListener("ob-lang",function(){if(st.t)rescale()});
  /* everything the state touches is painted from here */
  var guide=$("#a11yGuide"),mask=$("#a11yMask"),zoomBar=$("#a11yZoom"),stopB=$("#a11yStop");
  function paint(){
    KEYS.forEach(function(k){de.classList.toggle("a11y-"+k,!!st[k])});
    var fl=[];if(st.inv)fl.push("invert(1) hue-rotate(180deg)");if(st.gray)fl.push("grayscale(1)");if(st.sat)fl.push("saturate(.45)");de.style.filter=fl.join(" ");
    for(var k in optBtn)optBtn[k].setAttribute("aria-pressed",String(isOn(k)));
    PROFS.forEach(function(p){var all=true;for(var k2 in p[4]){if(k2==="t"){if(st.t<p[4].t)all=false}else if(!isOn(k2))all=false}profBtn[p[0]].setAttribute("aria-pressed",String(all))});
    var n=(st.t?1:0);KEYS.forEach(function(k){if(st[k])n++});
    if(badge){var was=badge.textContent;badge.hidden=!n;badge.textContent=n?String(n):"";if(n&&was!==String(n)){badge.style.animation="none";void badge.offsetWidth;badge.style.animation=""}}
    pct.textContent=Math.round(SC[st.t]*100)+"%";if(steps)[].forEach.call(steps.children,function(d,i){d.classList.toggle("on",i<=st.t)});
    var mi=$("#a11yMinus"),pl=$("#a11yPlus");if(mi)mi.disabled=st.t===0;if(pl)pl.disabled=st.t===SC.length-1;
    if(guide)guide.hidden=!st.guide;if(mask)mask.hidden=!st.mask;if(zoomBar){zoomBar.hidden=!st.zoom;if(!st.zoom)zoomBar.classList.remove("on")}
    if(st.guide||st.mask)moveAid(aidY)}
  /* one switch. Returns true when the page has to be drawn again (motion on/off) */
  function setKey(k,v,quiet){
    if(k==="mute"){if(window.OBMusic&&v===musicOn()){if(snd)snd.click();else if(v)OBMusic.stop();else OBMusic.start()}return false}
    if(k==="speak"&&!hasTTS)return false;
    var was=!!st[k];st[k]=v?1:0;
    if(v&&k==="hc")st.inv=0;if(v&&k==="inv")st.hc=0;
    if(k==="speak"){if(v){if(!quiet)speak(tx("Read aloud is on. Tap or point at any text to hear it."),null)}else shush()}
    if(k==="still"&&was!==!!v){store("og-still",v?"1":"0");if(v)[].forEach.call(document.querySelectorAll("video"),function(x){try{x.pause()}catch(_){}});return true}
    return false}
  function redraw(){/* the page is drawn again without (or with) motion: same place, no intro */
    setTimeout(function(){try{visit("og-a11y-open","1");location.reload()}catch(_){}},380)}
  function label(k){for(var i=0;i<OPTS.length;i++)if(OPTS[i][0]===k)return OPTS[i][1];return k}
  panel.addEventListener("click",function(e){
    var b=e.target.closest(".a11y-opt"),p=e.target.closest(".a11y-prof"),j=e.target.closest(".a11y-jump button");
    if(b){var k=b.getAttribute("data-k"),v=!isOn(k),re=setKey(k,v);save();
      if(k==="mute"){setTimeout(function(){paint();tell(tx(label(k))+" · "+tx(isOn(k)?"On":"Off"))},80);return}
      paint();if(!(k==="speak"&&v))tell(tx(label(k))+" · "+tx(v?"On":"Off"));if(re)redraw();return}
    if(p){var id=p.getAttribute("data-p"),P=null;PROFS.forEach(function(x){if(x[0]===id)P=x});if(!P)return;var on=p.getAttribute("aria-pressed")!=="true",re2=false;
      for(var k3 in P[4]){if(k3==="t"){st.t=on?Math.max(st.t,P[4].t):0}else if(setKey(k3,on,true))re2=true}
      save();scale(true);setTimeout(paint,90);paint();tell(tx(P[1])+" · "+tx(on?"On":"Off"));if(re2)redraw();return}
    if(j){var sel=j.getAttribute("data-t"),t=document.querySelector(sel);if(!t)return;var pre=j.getAttribute("data-c"),pc=pre&&document.querySelector(pre);if(pc&&pc.getAttribute("aria-selected")!=="true")try{pc.click()}catch(_){}show(false);
      setTimeout(function(){if(!t.hasAttribute("tabindex"))t.setAttribute("tabindex","-1");try{t.scrollIntoView({behavior:"auto",block:"start"})}catch(_){t.scrollIntoView()}try{t.focus({preventScroll:true})}catch(_){}tell(j.textContent)},60)}});
  function bump(){pct.classList.remove("tick");void pct.offsetWidth;pct.classList.add("tick")}
  $("#a11yPlus").addEventListener("click",function(){if(st.t<SC.length-1){st.t++;save();scale(true);paint();bump();tell(tx("Text size")+" "+pct.textContent)}});
  $("#a11yMinus").addEventListener("click",function(){if(st.t>0){st.t--;save();scale(true);paint();bump();tell(tx("Text size")+" "+pct.textContent)}});
  $("#a11yReset").addEventListener("click",function(){var was=st.still,rb=this;for(var k in st)st[k]=0;save();store("og-still","0");shush();paint();scale(true);tell(tx("Accessibility settings reset"));
    rb.classList.remove("a11y-rs");void rb.offsetWidth;rb.classList.add("a11y-rs");if(was)setTimeout(function(){try{location.reload()}catch(_){}},380)});
  /* ---- reading guide and reading mask follow the pointer, the finger or the keyboard focus ---- */
  var aidY=Math.round(window.innerHeight*0.42),aidRaf=0;
  function moveAid(y){aidY=y;if(aidRaf)return;aidRaf=requestAnimationFrame(function(){aidRaf=0;var t="translate3d(0,"+aidY.toFixed(0)+"px,0)";if(st.guide&&guide)guide.style.transform="translate3d(0,"+(aidY+16).toFixed(0)+"px,0)";if(st.mask&&mask)mask.style.transform=t})}
  window.addEventListener("pointermove",function(e){if((st.guide||st.mask)&&e.pointerType!=="touch")moveAid(e.clientY)},{passive:true});
  window.addEventListener("touchstart",function(e){if((st.guide||st.mask)&&e.touches[0])moveAid(e.touches[0].clientY-56)},{passive:true});
  window.addEventListener("touchmove",function(e){if((st.guide||st.mask)&&e.touches[0])moveAid(e.touches[0].clientY-56)},{passive:true});
  /* ---- read aloud and the magnifier bar share one idea: the piece of text under the pointer, finger or focus ---- */
  var cur=null,lastEl=null,lastAt=0,dwell=0;
  function pick(t){if(!t||!t.closest||t.closest("#a11yStop,#a11yZoom,#a11yLive"))return null;return t.closest("a,button,label,summary,h1,h2,h3,h4,p,li,figcaption,blockquote,input,textarea,output,[role=button],[role=radio],[role=tab],[role=option]")}
  function textOf(e){var s="";if(/^(INPUT|TEXTAREA)$/.test(e.tagName)){var lb=e.id&&document.querySelector('label[for="'+e.id+'"]');s=(lb?lb.textContent+": ":"")+(e.type==="password"?"":e.value||"")}
    else s=(e.innerText||e.textContent||"").replace(/\s+/g," ").trim()||e.getAttribute("aria-label")||e.getAttribute("title")||"";return s.slice(0,380)}
  function shush(){try{if(hasTTS)window.speechSynthesis.cancel()}catch(_){}if(cur){cur.classList.remove("a11y-reading");cur=null}if(stopB)stopB.hidden=true}
  function speak(text,e){if(!hasTTS||!text)return;shush();try{var he=de.lang==="he",u=new SpeechSynthesisUtterance(text);u.lang=he?"he-IL":"en-US";u.rate=0.95;
      var vs=window.speechSynthesis.getVoices()||[],pre=he?"he":"en";for(var i=0;i<vs.length;i++)if(vs[i].lang&&vs[i].lang.toLowerCase().indexOf(pre)===0){u.voice=vs[i];break}
      u.onend=u.onerror=function(){if(cur===e||!e){if(cur)cur.classList.remove("a11y-reading");cur=null;if(stopB)stopB.hidden=true}};
      if(e){cur=e;e.classList.add("a11y-reading")}if(stopB)stopB.hidden=false;window.speechSynthesis.speak(u)}catch(_){}}
  function present(e,force){if(!e||(!st.speak&&!st.zoom))return;var n=Date.now();if(!force&&e===lastEl&&n-lastAt<1500)return;var s=textOf(e);if(!s)return;lastEl=e;lastAt=n;
    if(st.zoom&&zoomBar){zoomBar.textContent=s;zoomBar.classList.add("on")}if(st.speak)speak(s,e)}
  document.addEventListener("pointerover",function(e){if((!st.speak&&!st.zoom)||e.pointerType!=="mouse")return;var t=pick(e.target);clearTimeout(dwell);if(t)dwell=setTimeout(function(){present(t)},260)},true);
  document.addEventListener("focusin",function(e){if(st.guide||st.mask){var r=e.target.getBoundingClientRect?e.target.getBoundingClientRect():null;if(r&&r.height)moveAid(r.top+r.height/2)}if(st.speak||st.zoom){var t=pick(e.target);if(t)present(t)}},true);
  document.addEventListener("click",function(e){if(!st.speak&&!st.zoom)return;var t=pick(e.target);if(t&&!t.closest("#a11yBtn"))present(t,true)},true);
  if(stopB)stopB.addEventListener("click",function(e){e.stopPropagation();shush()});
  window.addEventListener("ob-lang",function(){shush()});window.addEventListener("pagehide",shush);
  /* ---- the sheet: opens as a dialog, keeps the focus inside, gives it back when it closes ---- */
  function jumps(){var h=$("#a11yJump");if(!h)return;h.textContent="";JUMPS.forEach(function(j){var t=document.querySelector(j[2]);if(!t||t.hidden||!t.getClientRects().length)return;var b=el("button");b.type="button";b.setAttribute("data-t",j[2]);if(j[3])b.setAttribute("data-c",j[3]);b.textContent=j[1];h.appendChild(b)})}
  function focusables(){return [].filter.call(panel.querySelectorAll("button,summary,a[href]"),function(x){return !x.disabled&&!x.hidden&&x.getClientRects().length})}
  function show(v){
    if(v===open)return;open=v;btn.setAttribute("aria-expanded",String(v));de.classList.toggle("a11y-open",v);
    if(v){lastFocus=document.activeElement;jumps();panel.hidden=false;if(veil)veil.hidden=false;paint();void panel.offsetWidth;panel.classList.add("on");if(veil)veil.classList.add("on");body.scrollTop=0;setTimeout(function(){try{$("#a11yX").focus({preventScroll:true})}catch(_){}},80)}
    else{panel.classList.remove("on");if(veil)veil.classList.remove("on");setTimeout(function(){if(!open){panel.hidden=true;if(veil)veil.hidden=true}},reduce?0:460);if(lastFocus&&lastFocus.focus)try{lastFocus.focus({preventScroll:true})}catch(_){}}}
  btn.addEventListener("click",function(e){e.stopPropagation();show(!open)});
  $("#a11yX").addEventListener("click",function(){show(false)});
  if(veil)veil.addEventListener("click",function(){show(false)});
  document.addEventListener("keydown",function(e){
    if(e.altKey&&!e.ctrlKey&&!e.metaKey&&(e.code==="KeyA"||e.key==="a"||e.key==="A"||e.key==="ש")){e.preventDefault();show(!open);return}
    if(!open)return;
    if(e.key==="Escape"){e.preventDefault();e.stopPropagation();show(false);return}
    if(e.key==="Tab"){var f=focusables();if(!f.length)return;var a=document.activeElement,first=f[0],last=f[f.length-1];
      if(e.shiftKey&&(a===first||!panel.contains(a))){e.preventDefault();last.focus()}else if(!e.shiftKey&&(a===last||!panel.contains(a))){e.preventDefault();first.focus()}}},true);
  document.addEventListener("click",function(e){if(open&&!e.target.closest("#a11y,#a11yBtn,#a11yStop"))show(false)});
  var sk=$("#skipL");if(sk)sk.addEventListener("click",function(e){e.preventDefault();var m=$("main");if(m){m.setAttribute("tabindex","-1");try{m.focus({preventScroll:true})}catch(_){}var h=$(".hero");(h||m).scrollIntoView()}});
  /* the music can be switched from elsewhere: keep its tile honest while the sheet is open */
  setInterval(function(){if(open&&optBtn.mute){var v=String(isOn("mute"));if(optBtn.mute.getAttribute("aria-pressed")!==v)paint()}},700);
  paint();if(st.t)setTimeout(function(){scale(true)},600);
  /* a short hello from the button, once per visit, after the intro */
  if(!reduce&&visit("og-a11y-hi")!=="1"){var hw=setInterval(function(){if(introGone){clearInterval(hw);setTimeout(function(){btn.classList.add("hi");visit("og-a11y-hi","1")},2600)}},400)}
  if(visit("og-a11y-open")==="1"){visit("og-a11y-open","0");setTimeout(function(){show(true)},500)}
  window.OBA11y={open:function(){show(true)},close:function(){show(false)},state:function(){return st}};
},!!store("og-a11y"));
/* ---------- straight to the top / straight to the end ---------- */
(function(){
  var up=$("#jmpUp"),dn=$("#jmpDn"),veil=$("#jmpVeil");if(!up||!dn)return;
  var busy=false,tick=0;
  function maxY(){var d=document.documentElement;return Math.max(0,Math.max(d.scrollHeight,document.body.scrollHeight)-window.innerHeight)}
  var de=document.documentElement,lastY=0,offOn=false,sU=null,sD=null,mCache=0,mAt=0;
  /* on phones the controls are one small row at the bottom: it steps aside while the page is being read downwards and returns on the way up, at the top and at the end */
  function off(v){if(v===offOn)return;offOn=v;de.classList.toggle("nav-off",v)}
  function paint(){tick=0;var y=window.pageYOffset||0,now=Date.now();if(now-mAt>700){mCache=maxY();mAt=now}var m=mCache,a=y<120,b=y>m-120;
    if(a!==sU){sU=a;up.setAttribute("aria-disabled",String(a))}if(b!==sD){sD=b;dn.setAttribute("aria-disabled",String(b))}
    var dy=y-lastY;if(y<160||y>m-160)off(false);else if(dy>10)off(true);else if(dy<-10)off(false);if(Math.abs(dy)>10||y<160)lastY=y}
  function jump(toEnd){
    if(busy)return;busy=true;var d=document.documentElement,old=d.style.scrollBehavior;
    /* a phone that is still coasting from a flick ignores a jump; switching scrolling off for one frame stops the coasting first */
    function move(){d.style.scrollBehavior="auto";var ov=d.style.overflowY,y=toEnd?maxY():0;d.style.overflowY="hidden";window.scrollTo(0,y);
      requestAnimationFrame(function(){d.style.overflowY=ov;window.scrollTo(0,toEnd?maxY():0);
        /* the page can still grow while pictures further down take their place: once more a moment later */
        setTimeout(function(){window.scrollTo(0,toEnd?maxY():0);d.style.scrollBehavior=old;if(veil)veil.classList.remove("on");busy=false;mAt=0;lastY=window.pageYOffset||0;paint();off(false)},toEnd?280:160)})}
    if(veil&&!reduce){veil.classList.add("on");setTimeout(move,170)}else move()}
  up.addEventListener("click",function(){if(up.getAttribute("aria-disabled")==="true")return;jump(false)});
  dn.addEventListener("click",function(){if(dn.getAttribute("aria-disabled")==="true")return;jump(true)});
  window.addEventListener("scroll",function(){if(!tick)tick=requestAnimationFrame(paint)},{passive:true});
  window.addEventListener("resize",function(){mAt=0;paint()});paint();
  document.addEventListener("focusin",function(e){if(e.target&&e.target.closest&&e.target.closest(".a11y-btn,.langf,.jmp,.fab"))off(false)});
})();

/* ---------- keep the page light: nothing animates or decodes while it is out of sight, and the small extras wait while a finger is scrolling ---------- */
(function(){
  /* the moment of the last scroll or drag; the DJ and other extras skip their frames for a beat after it */
  window.obBusyAt=0;var mark=function(){window.obBusyAt=performance.now()};
  window.addEventListener("scroll",mark,{passive:true});window.addEventListener("touchmove",mark,{passive:true});
  var cw=setInterval(function(){if(!introGone)return;clearInterval(cw);setTimeout(function(){document.documentElement.classList.add("calm")},3600)},300);
  if(!("IntersectionObserver" in window))return;
  /* hero film: decode only while the hero is on screen */
  var hero=$(".hero");if(hero&&hv){var hvVis=true;new IntersectionObserver(function(en){hvVis=en[0].isIntersecting;if(!hv.dataset.on)return;if(!hvVis){if(!hv.paused)hv.pause()}else if(!document.hidden&&!lb.classList.contains("open")){var p=hv.play();if(p&&p.catch)p.catch(function(){})}},{threshold:0.02}).observe(hero)}
  /* phones: whole sections that are far from the screen are put to sleep (not painted, their loops paused), and wake up well before they
     scroll back in. A phone browser keeps a drawing surface for everything it might have to show; with a long page that is what runs it out
     of memory. This keeps the cost the same no matter how long the page is. */
  if(!canHover){var zs=[].slice.call(document.querySelectorAll("main > .hero, main > .mq, main > #services, main > #projects, main > .gwrap, main > #about, main > #faq, main > #closing"));
    if(zs.length){var zio=new IntersectionObserver(function(en){en.forEach(function(x){x.target.classList.toggle("zz",!x.isIntersecting)})},{rootMargin:"220% 0px 220% 0px"});zs.forEach(function(z){zio.observe(z)})}}
  /* closing strip and marquee: pause their loops when they leave the screen */
  [["#closing","away"],[".mq","away"]].forEach(function(a){var e=$(a[0]);if(!e)return;e.classList.add(a[1]);new IntersectionObserver(function(en){e.classList.toggle(a[1],!en[0].isIntersecting)},{rootMargin:"80px 0px"}).observe(e)});
})();

/* ---------- music: one quiet level, and one switch to turn it off (in the bottom row and at the top) ----------
   The photo flick has its own channel and is always there, music or not. */
(function(){
  if(!window.OBMusic)return;
  var M=OBMusic;M.setLevel(0.5);M.fx(true);
  var SPK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="vs-b" d="M11 5L6 9H3v6h3l5 4z" fill="currentColor" fill-opacity=".18"/><path class="vs-w1" d="M14.6 9.6a3.4 3.4 0 0 1 0 4.8"/><path class="vs-w2" d="M17.2 7.2a6.8 6.8 0 0 1 0 9.6"/><path class="vs-w3" d="M19.8 4.8a10.2 10.2 0 0 1 0 14.4"/><path class="vs-x" d="M15.5 9.5l5 5M20.5 9.5l-5 5"/></svg>';
  var nb=el("button","nav-snd");nb.id="navSnd";nb.type="button";nb.innerHTML=SPK;document.body.appendChild(nb);
  function paint(){var on=M.isOn();nb.setAttribute("data-l",on?"2":"0");nb.setAttribute("aria-pressed",String(on));nb.setAttribute("aria-label",on?"Mute music":"Turn music on")}
  nb.addEventListener("click",function(){if(M.isOn()){M.stop();store("og-music","off")}else{M.setLevel(0.5);M.start();store("og-music","on")}if(typeof paintSnd==="function")paintSnd();paint();nb.classList.remove("tap");void nb.offsetWidth;nb.classList.add("tap")});
  /* the button at the top keeps doing what it did; the bottom one follows it */
  document.addEventListener("click",function(e){if(e.target&&e.target.closest&&e.target.closest("#sndBtn"))setTimeout(paint,0)});
  setInterval(paint,1500);paint();
})();

G.runLater=runLater;G.pending=pending;
(function(){
  var ric=window.requestIdleCallback||function(f){return setTimeout(f,60)};
  function nxt(){var q=null,i,k;for(k=0;k<PRI.length&&!q;k++)for(i=0;i<LQ.length;i++)if(LQ[i]&&LQ[i][0]===PRI[k]){q=LQ[i];break}if(!q)for(i=0;i<LQ.length;i++)if(LQ[i]){q=LQ[i];break}if(!q)return;runLater(q[0]);ric(nxt,{timeout:500})}
  function go(){ric(nxt,{timeout:500})}
  if(G.gone)setTimeout(go,300);else G.onGone(function(){setTimeout(go,300)});
})();
})();

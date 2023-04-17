const Binance=require('binance-api-node').default; const wbm = require('wbm');const chromium = require('chromium');const admin=require("firebase-admin"); const crypto=require('crypto'); var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest; const fs=require('fs'); const readline=require('readline'); const si=require('systeminformation'); const os=require("os"); const NetworkSpeed=require('network-speed');var geoip=require('geoip-lite'); var bodyparser=require('simple-bodyparser'); var express=require('express');const { error } = require('console'); app=express(); PORT=8101; app.use(bodyparser()); app.post("/hook",function(req,res){const responseText=req.query['hub.challenge']; res.send(responseText); res.status(200).end(); console.log(req.body);}); app.listen(PORT,()=>console.log("server now running on %d",PORT)); app.all('/',(req,res)=>{fetchUrl("https://api.ipify.org",function(error,meta,body){res.send("ip "+body);});}); fetchUrl("https://api.ipify.org?format=json",function(error,meta,body){console.log(JSON.parse(body));console.log(geoip.lookup(JSON.parse(body).ip));});console.log(os.hostname()+" "+os.type()+" "+os.platform()+" mem"+os.totalmem()+" freem"+os.freemem()+" "+os.homedir()+" "+os.uptime()+"secUptime "+os.release());console.log(os.cpus());si.system().then(data=>{console.log(data);});si.cpu().then(data=>{console.log(data);});si.battery().then(data=>{console.log(data);});getNetworkDownloadSpeed(); async function getNetworkDownloadSpeed(){const baseUrl='https://eu.httpbin.org/stream-bytes/500000'; const fileSizeInBytes=500000; const speed=await new NetworkSpeed().checkDownloadSpeed(baseUrl,fileSizeInBytes); console.log('Downloding Speed:',speed);};  setInterval(function(){request({method:"POST",url:"https://zz-dzj7.onrender.com/hook",body:'...'});},500000);   readline.emitKeypressEvents(process.stdin); if(process.stdin.isTTY)process.stdin.setRawMode(true); process.stdin.on("keypress",(str,key)=>{if(key.name=="y") console.log("Start...");}); 
admin.initializeApp({credential:admin.credential.cert({"project_id":"hihelloai","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDypjbbeSQaTUb4\nQ2QsePVYpsXhCbX00LLQpdMi7m/R2CGeNmPQGUNOd8h+O4ZPP80ir01sE8maNmwT\n7SDEUlN95x5ajQTVRQyRFx7Y/aytgIlOtW/TFs/bk8V+Z+RgGYpmkYUN51TI8zAH\nYbjpHLAxoRuzyIgvB8fNv2FsILVYJkc8xOTRw/ZmFlQ6B3YyE5sCZPrVS2v6JuqE\nHsoRZ1C0l+/u+qRRMdd1m2qdjmPiz7YLFnQa+mIghBG437khk1MRB2C6RVWdB5rZ\noON/5P4NiyX1ZlCsk7fxydzkvtyq3Kbvwvh5a1VKsRyL82mS8PQOLabayLOPSeP2\n+28980dRAgMBAAECggEANwqBExPNnrG80X/n7zaY4L0j0cI0Jg5ZIX8b/6Z6cu1F\n4u+PgJraa6g8MHYsJznfvGhrdYKfjn2d0n9NmXrbOYn9lqi6We5JxXerJamVS94G\nR3ZcoVNhXvuMJvpGEY55mH6V4euBjfur/2CpYyeAyCE1eXiZe6GWLxOkc7SPrii/\nlQYud2QBMgfIfgQ5jffY4xE8zUqx5xVFqKjymwDWZHxW00oKl4MTEYnPTZ10Elwl\nd2NmH3ZR31EWPGDC86qggi+N7VK8OjJ2la2WlF7czXtrfqHZcJDFfJ/KHp4G4Yu3\nSZr5Xi2C2Edgv3AN6GYXCySJW0uXuUUquOCBrB3dCQKBgQD9wCD9dfMi7uhXnbZ6\ni8tT4VbgjMWf5Vo6YiFT/7kd+Pbb1dzLls2QRgEELJk0xz3zcJ2jsODPSc2AbVgF\nrMMjdjud+QYqDmvUM2W+CJDp8+YLQD6kHtbs3SQ624csNMd/OG05+rOCKl3ztuKB\n0kbtXWADzhSh6aOFd9pxXYvzZwKBgQD0zORRNAc7lIGrXiNSVZAbaGFZTRyppOFo\nomj/qWcWgMHGXwRT7mdDsmUa/auxOqGj9XwPW5e1QGVl1vbsLFtKSE8DdFQeNlvX\nCnOOaJjn6AvKY+uBHczx+Za923o0GiY5OU+P+tQMeWKsujAwYYDylx4VHwJ5OxL2\nNV6Y4oM0hwKBgEEMH2jZ85ng5G6RX1XKwDSgb0Tg0UhL4vVUcna19x5X0/BGwnLu\nFYQGbfxD8oI1EQx2sfJkRTzeDm/9l7LctqlAhcfZLltZlwquokY0q/FNNIttzKEF\nxtKxXbg4zk3mub1DGbzjJ2EWuz7egvIElWoDpblT+rYGzoRIVRb6hAXBAoGAUdvu\nAUVvobnAPqjFEPQxsyiNXQpPKl9LTOz6RXvFUB4QLiB51wMint2Zt5PaBPLBOI2P\nRadwLJjzD0H54fHXORjC6znMIyo0Pc1t5NIPR4Ut5CjTiKKJdOTsRmKNE70myP3k\nIBZVMDKrD21XTeZc80IbOh7beeSKK7CfCGq+SyMCgYEA1sA71QNNe+pTY87JUww6\ndzlGqoAn/XOCjoB6L89oEOwZ6WKxW1eIiuMZQq9BJfgelhUoPRl0zDkNXnjDcat/\nIWhFaCZzb4Z+5CAztN17H8CuXYoRE3YApmkX99wdlZWtzifn4b8HqS6iLvWkbI13\ne38rgrrlECUOeCVtQeFkNdM=\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-uear5@hihelloai.iam.gserviceaccount.com",}),databaseURL:"https://hihelloai-default-rtdb.asia-southeast1.firebasedatabase.app"});  setTimeout(function(){console.log('Started after 25min....................');
//ahtt('ETH',0.005); 
//mahl('BNB',0.02);//htt('JOE', 10);htt('TRX',100);htt('ARB',5); htt('MATIC',5);//htt('LTC',0.08);htt('LINK',0.8)htt('MANA',11); htt('OP',3); htt('APT',0.5);htt('SAND',11);mahl('BTC',0.001); 
mahl('ADA',20); //mahl('THETA',7); mahl('HOOK',3.5); mahl('GALA',200); mahl('DOT',1.5); mahl('BCH',0.05); mahl('TRX',100); //htt('AGIX',20); htt('DUSK',30); htt('FET',0); htt('DASH',0); htt('MASK',0); htt('GMT',0); htt('IMX',0); htt('INJ',0); htt('OCEAN',0); htt('EOS',0); htt('ATOM',0); htt('CFX',0); htt('FIL',0); htt('TRU',0); htt('NEO',0); htt('UNI',0); htt('HBAR',0); htt('APE',0); htt('VET',0); htt('RENU',0); htt('SHIB',0); htt('SOL',0); htt('LUNA2',0); htt('GMX',0);

},2000); function ahtt(coin,amtv){const data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp; if(hplp==0){admin.database().ref("ait/"+coin+"").once("value", function(snapshot){var hplptrend1=snapshot.val().hplptrend; var hplp1=snapshot.val().hplp;try{const data=JSON.parse(fs.readFileSync('aitdata.json')); data[coin].hplp=hplp1; data[coin].hplptrend=hplptrend1;fs.writeFileSync('aitdata.json',JSON.stringify(data));console.log(coin+hplptrend1+hplp1);}catch(err){};});};}; 
setInterval(function(){var dataQueryString="symbol="+(coin)+"USDT&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={"akey":'c0YsmtusT2SmLPifFfZQeNw1zl1eS2LaFlX321GiVpNQueTdwT6EBnkaLSUHWPGj',"skey":'O38iHsCL1xGwTWipKVY0sXLjFP7T9gGdZLIcszeCqDRd5Y8QpYc9J3j9bYd7GaSn'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex'); var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var cp=(getCountryByCode('LONG')[0].markPrice**1); try{const data=JSON.parse(fs.readFileSync('aitdata.json')); data[coin].cp=cp; fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){};var data=fs.readFileSync('aitdata.json','utf8'); if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp;var hplptrend=JSON.parse(data)[coin].hplptrend;if(hplptrend=='L' && cp<hplp-(cp*0.015)){console.log(coin+"S↓"+cp); try{const data=JSON.parse(fs.readFileSync('aitdata.json'));data[coin].hplp=cp;data[coin].hplptrend='S';fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='S' && cp-(cp*0.015)>hplp){console.log(coin+"L↑"+cp); try{const data=JSON.parse(fs.readFileSync('aitdata.json')); data[coin].hplp=cp; data[coin].hplptrend='L'; fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){};}else if(hplptrend=='L' && cp-(cp*0.001)>=hplp || hplptrend=='S' && cp<=hplp-cp*0.001){try{const data=JSON.parse(fs.readFileSync('aitdata.json')); data[coin].hplp=cp; fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){};};}; var lep=(getCountryByCode('LONG')[0].entryPrice);var lamt=getCountryByCode('LONG')[0].positionAmt;var sep=(getCountryByCode('SHORT')[0].entryPrice);var samt=-1*getCountryByCode('SHORT')[0].positionAmt;var data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp;var hplptrend=JSON.parse(data)[coin].hplptrend;
if(lep!=0 && lep<cp && hplptrend=='S'){var dataQueryString="symbol="+(coin)+"USDT&side=SELL&positionside=LONG&type=MARKET&quantity="+(lamt)+"&recvWindow=20000&timestamp="+Date.now(); var keys={"akey" : 'c0YsmtusT2SmLPifFfZQeNw1zl1eS2LaFlX321GiVpNQueTdwT6EBnkaLSUHWPGj', "skey":'O38iHsCL1xGwTWipKVY0sXLjFP7T9gGdZLIcszeCqDRd5Y8QpYc9J3j9bYd7GaSn'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
if(sep!=0 && hplptrend=='L'){var dataQueryString="symbol="+(coin)+"USDT&side=BUY&positionside=SHORT&type=MARKET&quantity="+(samt)+"&recvWindow=20000&timestamp="+Date.now(); var keys={"akey" : 'c0YsmtusT2SmLPifFfZQeNw1zl1eS2LaFlX321GiVpNQueTdwT6EBnkaLSUHWPGj', "skey":'O38iHsCL1xGwTWipKVY0sXLjFP7T9gGdZLIcszeCqDRd5Y8QpYc9J3j9bYd7GaSn'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
if(hplptrend=='L'&&lamt<amtv*0.5||hplptrend=='L'&&lamt<amtv*1.5&&lep!=0&&cp<lep-(cp*0.02)*2 || hplptrend=='L'&&lamt<amtv*4&&lep!=0&&cp<lep-(cp*0.015)*10){if(hplptrend=='L' && lamt<amtv*1.5 && lep!=0 && cp<lep-(cp*0.02)){lamtv=amtv*2;}else if(hplptrend=='L' && lamt<amtv*4 && lep!=0 && cp<lep-(cp*0.015)*10){lamtv=amtv*6;}else{lamtv=amtv;}; var dataQueryString="symbol="+(coin)+"USDT&side=BUY&positionside=LONG&type=MARKET&quantity="+(lamtv)+"&recvWindow=20000&timestamp="+Date.now(); var keys={"akey":'c0YsmtusT2SmLPifFfZQeNw1zl1eS2LaFlX321GiVpNQueTdwT6EBnkaLSUHWPGj', "skey":'O38iHsCL1xGwTWipKVY0sXLjFP7T9gGdZLIcszeCqDRd5Y8QpYc9J3j9bYd7GaSn'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send(); };
if(samt<amtv*0.5 && hplptrend=='S'){if(lamt!=0&&amtv<lamt*0.5){samtv=lamt*0.5;}else{samtv=amtv;}; var dataQueryString="symbol="+(coin)+"USDT&side=SELL&positionside=SHORT&type=MARKET&quantity="+(samtv)+"&recvWindow=20000&timestamp="+Date.now();  var keys={"akey" : 'c0YsmtusT2SmLPifFfZQeNw1zl1eS2LaFlX321GiVpNQueTdwT6EBnkaLSUHWPGj', "skey":'O38iHsCL1xGwTWipKVY0sXLjFP7T9gGdZLIcszeCqDRd5Y8QpYc9J3j9bYd7GaSn'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};  
};};ourRequest.send();},2500);setInterval(function(){var data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp;var hplptrend=JSON.parse(data)[coin].hplptrend;admin.database().ref("ait/"+coin+"").set({hplptrend:hplptrend,hplp:hplp});};},50000);setInterval(function(){var data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp;var hplptrend=JSON.parse(data)[coin].hplptrend;var cp=JSON.parse(data)[coin].cp;console.log(coin+cp+"  "+hplptrend+hplp);};},500000);};

function mahl(coin,amtv){const data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined||data!=error){var hplp=JSON.parse(data)[coin].hplp; if(hplp==0){admin.database().ref("ait/"+coin+"").once("value", function(snapshot){var hplptrend1=snapshot.val().hplptrend; var hplp1=snapshot.val().hplp;try{const data=JSON.parse(fs.readFileSync('aitdata.json')); data[coin].hplp=hplp1; data[coin].hplptrend=hplptrend1;fs.writeFileSync('aitdata.json',JSON.stringify(data));console.log(coin+hplptrend1+hplp1);}catch(err){};});};}; var keys={"akey":'c0YsmtusT2SmLPifFfZQeNw1zl1eS2LaFlX321GiVpNQueTdwT6EBnkaLSUHWPGj',"skey":'O38iHsCL1xGwTWipKVY0sXLjFP7T9gGdZLIcszeCqDRd5Y8QpYc9J3j9bYd7GaSn'};
setInterval(function(){var dataQueryString="symbol="+(coin)+"USDT&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now(); var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature;var ourRequest=new XMLHttpRequest();ourRequest.open('GET',url,true);ourRequest.setRequestHeader('X-MBX-APIKEY',keys['akey']);ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText);function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});};var lep=(getCountryByCode('LONG')[0].entryPrice);var lamt=getCountryByCode('LONG')[0].positionAmt;var sep=(getCountryByCode('SHORT')[0].entryPrice);var samt=-1*getCountryByCode('SHORT')[0].positionAmt;var cp=(getCountryByCode('LONG')[0].markPrice**1); try{const data=JSON.parse(fs.readFileSync('aitdata.json')); data[coin].cp=cp; fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){}; var data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp;var hplptrend=JSON.parse(data)[coin].hplptrend;if(hplptrend=='L' && cp-(cp*0.001)>=hplp || hplptrend=='S' && cp<=hplp-cp*0.001){try{const data=JSON.parse(fs.readFileSync('aitdata.json'));data[coin].hplp=cp;fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){};};}; 
Binance().candles({symbol:coin+'USDT',interval:'5m',limit:125}).then((candles)=>{if(candles!=''||candles!=undefined||candles!=error){var cln=candles;mah1h125=((((cln[0].high*1)+(cln[1].high*1)+(cln[2].high*1)+(cln[3].high*1)+(cln[4].high*1)+(cln[5].high*1)+(cln[6].high*1)+(cln[7].high*1)+(cln[8].high*1)+(cln[9].high*1)+(cln[10].high*1)+(cln[11].high*1)+(cln[12].high*1)+(cln[13].high*1)+(cln[14].high*1)+(cln[15].high*1)+(cln[16].high*1)+(cln[17].high*1)+(cln[18].high*1)+(cln[19].high*1)+(cln[20].high*1)+(cln[21].high*1)+(cln[22].high*1)+(cln[23].high*1)+(cln[24].high*1)+(cln[25].high*1)+(cln[26].high*1)+(cln[27].high*1)+(cln[28].high*1)+(cln[29].high*1)+(cln[30].high*1)+(cln[31].high*1)+(cln[32].high*1)+(cln[33].high*1)+(cln[34].high*1)+(cln[35].high*1)+(cln[36].high*1)+(cln[37].high*1)+(cln[38].high*1)+(cln[39].high*1)+(cln[40].high*1)+(cln[41].high*1)+(cln[42].high*1)+(cln[43].high*1)+(cln[44].high*1)+(cln[45].high*1)+(cln[46].high*1)+(cln[47].high*1)+(cln[48].high*1)+(cln[49].high*1)+(cln[50].high*1)+(cln[51].high*1)+(cln[52].high*1)+(cln[53].high*1)+(cln[54].high*1)+(cln[55].high*1)+(cln[56].high*1)+(cln[57].high*1)+(cln[58].high*1)+(cln[59].high*1)+(cln[60].high*1)+(cln[61].high*1)+(cln[62].high*1)+(cln[63].high*1)+(cln[64].high*1)+(cln[65].high*1)+(cln[66].high*1)+(cln[67].high*1)+(cln[68].high*1)+(cln[69].high*1)+(cln[70].high*1)+(cln[71].high*1)+(cln[72].high*1)+(cln[73].high*1)+(cln[74].high*1)+(cln[75].high*1)+(cln[76].high*1)+(cln[77].high*1)+(cln[78].high*1)+(cln[79].high*1)+(cln[80].high*1)+(cln[81].high*1)+(cln[82].high*1)+(cln[83].high*1)+(cln[84].high*1)+(cln[85].high*1)+(cln[86].high*1)+(cln[87].high*1)+(cln[88].high*1)+(cln[89].high*1)+(cln[90].high*1)+(cln[91].high*1)+(cln[92].high*1)+(cln[93].high*1)+(cln[94].high*1)+(cln[95].high*1)+(cln[96].high*1)+(cln[97].high*1)+(cln[98].high*1)+(cln[99].high*1)+(cln[100].high*1)+(cln[101].high*1)+(cln[102].high*1)+(cln[103].high*1)+(cln[104].high*1)+(cln[105].high*1)+(cln[106].high*1)+(cln[107].high*1)+(cln[108].high*1)+(cln[109].high*1)+(cln[110].high*1)+(cln[111].high*1)+(cln[112].high*1)+(cln[113].high*1)+(cln[114].high*1)+(cln[115].high*1)+(cln[116].high*1)+(cln[117].high*1)+(cln[118].high*1)+(cln[119].high*1)+(cln[120].high*1)+(cln[121].high*1)+(cln[122].high*1)+(cln[123].high*1)+(cln[124].high*1))/125)); 
mal1h125=((((cln[0].low*1)+(cln[1].low*1)+(cln[2].low*1)+(cln[3].low*1)+(cln[4].low*1)+(cln[5].low*1)+(cln[6].low*1)+(cln[7].low*1)+(cln[8].low*1)+(cln[9].low*1)+(cln[10].low*1)+(cln[11].low*1)+(cln[12].low*1)+(cln[13].low*1)+(cln[14].low*1)+(cln[15].low*1)+(cln[16].low*1)+(cln[17].low*1)+(cln[18].low*1)+(cln[19].low*1)+(cln[20].low*1)+(cln[21].low*1)+(cln[22].low*1)+(cln[23].low*1)+(cln[24].low*1)+(cln[25].low*1)+(cln[26].low*1)+(cln[27].low*1)+(cln[28].low*1)+(cln[29].low*1)+(cln[30].low*1)+(cln[31].low*1)+(cln[32].low*1)+(cln[33].low*1)+(cln[34].low*1)+(cln[35].low*1)+(cln[36].low*1)+(cln[37].low*1)+(cln[38].low*1)+(cln[39].low*1)+(cln[40].low*1)+(cln[41].low*1)+(cln[42].low*1)+(cln[43].low*1)+(cln[44].low*1)+(cln[45].low*1)+(cln[46].low*1)+(cln[47].low*1)+(cln[48].low*1)+(cln[49].low*1)+(cln[50].low*1)+(cln[51].low*1)+(cln[52].low*1)+(cln[53].low*1)+(cln[54].low*1)+(cln[55].low*1)+(cln[56].low*1)+(cln[57].low*1)+(cln[58].low*1)+(cln[59].low*1)+(cln[60].low*1)+(cln[61].low*1)+(cln[62].low*1)+(cln[63].low*1)+(cln[64].low*1)+(cln[65].low*1)+(cln[66].low*1)+(cln[67].low*1)+(cln[68].low*1)+(cln[69].low*1)+(cln[70].low*1)+(cln[71].low*1)+(cln[72].low*1)+(cln[73].low*1)+(cln[74].low*1)+(cln[75].low*1)+(cln[76].low*1)+(cln[77].low*1)+(cln[78].low*1)+(cln[79].low*1)+(cln[80].low*1)+(cln[81].low*1)+(cln[82].low*1)+(cln[83].low*1)+(cln[84].low*1)+(cln[85].low*1)+(cln[86].low*1)+(cln[87].low*1)+(cln[88].low*1)+(cln[89].low*1)+(cln[90].low*1)+(cln[91].low*1)+(cln[92].low*1)+(cln[93].low*1)+(cln[94].low*1)+(cln[95].low*1)+(cln[96].low*1)+(cln[97].low*1)+(cln[98].low*1)+(cln[99].low*1)+(cln[100].low*1)+(cln[101].low*1)+(cln[102].low*1)+(cln[103].low*1)+(cln[104].low*1)+(cln[105].low*1)+(cln[106].low*1)+(cln[107].low*1)+(cln[108].low*1)+(cln[109].low*1)+(cln[110].low*1)+(cln[111].low*1)+(cln[112].low*1)+(cln[113].low*1)+(cln[114].low*1)+(cln[115].low*1)+(cln[116].low*1)+(cln[117].low*1)+(cln[118].low*1)+(cln[119].low*1)+(cln[120].low*1)+(cln[121].low*1)+(cln[122].low*1)+(cln[123].low*1)+(cln[124].low*1))/125));
// if(mah1h125<cp){try{const data=JSON.parse(fs.readFileSync('aitdata.json'));data[coin].hplp=cp;data[coin].hplptrend='L';fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){};}else if(cp<mal1h125){try{const data=JSON.parse(fs.readFileSync('aitdata.json'));data[coin].hplp=cp;data[coin].hplptrend='S';fs.writeFileSync('aitdata.json',JSON.stringify(data));}catch(err){};};
// if(lep!=0 && cp<mal1h125 || lep!=0 && amtv*0.5<lamt && lep<hplp-hplp*0.01 && cp<hplp-hplp*0.005){if(lep!=0 && amtv*0.5<lamt && lep<hplp-hplp*0.01 && cp<hplp-hplp*0.005){lamtv=lamt*0.5;}else{lamtv=lamt;};var dataQueryString="symbol="+(coin)+"USDT&side=SELL&positionside=LONG&type=MARKET&quantity="+(lamtv)+"&recvWindow=20000&timestamp="+Date.now();var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 && mah1h125<cp || sep!=0 && amtv*0.5<samt && hplp<sep-hplp*0.01 && hplp<cp-hplp*0.005){if(sep!=0 && amtv*0.5<samt && hplp<sep-hplp*0.01 && hplp<cp-hplp*0.005){samtv=samt*0.5;}else{samtv=samt;};var dataQueryString="symbol="+(coin)+"USDT&side=BUY&positionside=SHORT&type=MARKET&quantity="+(samtv)+"&recvWindow=20000&timestamp="+Date.now();var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv*0.5 && mah1h125<cp){var dataQueryString="symbol="+(coin)+"USDT&side=BUY&positionside=LONG&type=MARKET&quantity="+(amtv)+"&recvWindow=20000&timestamp="+Date.now();var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();};
// if(samt<amtv*0.5 && cp<mal1h125){var dataQueryString="symbol="+(coin)+"USDT&side=SELL&positionside=SHORT&type=MARKET&quantity="+(amtv)+"&recvWindow=20000&timestamp="+Date.now();var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();}; 
};});};ourRequest.send();},4000);setInterval(function(){var data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp;var hplptrend=JSON.parse(data)[coin].hplptrend;admin.database().ref("ait/"+coin+"").set({hplptrend:hplptrend,hplp:hplp});};},50000);setInterval(function(){var data=fs.readFileSync('aitdata.json','utf8');if(data!=''||data!=undefined){var hplp=JSON.parse(data)[coin].hplp;var hplptrend=JSON.parse(data)[coin].hplptrend;var cp=JSON.parse(data)[coin].cp;console.log(coin+cp+" mah1h125"+mah1h125+" mal1h125"+mal1h125+" "+hplptrend+hplp);


wbm.start({chromiumArgs:['--no-sandbox'],executablePath:chromium.path}).then(async()=>{const phones=['7250030955'];
const message=coin+cp+" mah1h125"+mah1h125+" mal1h125"+mal1h125+" "+hplptrend+hplp;await wbm.send(phones,message);await wbm.end();}).catch(err=>console.log(err));

};},15000);};




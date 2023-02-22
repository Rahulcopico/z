const crypto=require('crypto');  var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;  const storage=require('node-sessionstorage'); const fs = require('fs');  var express=require('express'), app=express(), bodyparser=require('simple-bodyparser'), PORT=8000; app.use(bodyparser()); setInterval(function(){request({method: "POST", url: "https://a2aitstable.onrender.com", body: '...'});},500000);   app.post("/hook", function(req,res){const responseText=req.query['hub.challenge']; res.send(responseText);  res.status(200).end();  console.log(req.body);   }); app.listen(PORT,()=>console.log("server now running on %d",PORT));

funeth(); function funeth(){var coin='eth'; var COINUSDT='ETHUSDT'; var feerv=2; var qutrv=4; var halfrv=8; var dourv=20; var amtv=0.004; var tofixdv=0;    setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;  
fetchUrl("https://api.binance.com/api/v3/klines?symbol="+(COINUSDT)+"&interval=5m&limit=3", function(error, meta,body){var ma3 = ((((JSON.parse(body)[0][4]*1)+(JSON.parse(body)[1][4]*1)+(JSON.parse(body)[2][4]*1))/3).toFixed(tofixdv));  fetchUrl("https://api.binance.com/api/v3/klines?symbol="+(COINUSDT)+"&interval=15m&limit=5", function(error, meta,body){var ma15 = ((((JSON.parse(body)[0][4]*1)+(JSON.parse(body)[1][4]*1)+(JSON.parse(body)[2][4]*1)+(JSON.parse(body)[3][4]*1)+(JSON.parse(body)[4][4]*1))/5).toFixed(tofixdv));   console.log(coin+ma3+" "+ma15);     
// if(lep!=0 &&(hplptrend=='S' || cp<lep-halfrv)){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 &&(hplptrend=='L' || sep+halfrv<cp)){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
});});};ourRequest.send();});});},2000);  setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;
if(hplp+feerv<cp && hplptrend=='L' || cp<hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend}), function(err){if(err)throw err;});};    if(hplp+dourv<cp && hplptrend=='S'){console.log(coin+"L↑"+hplp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"L"}), function(err){if(err)throw err;});};    if(cp<hplp-dourv && hplptrend=='L'){console.log(coin+"S↓"+hplp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"S"}), function(err){if(err)throw err;});};  };ourRequest.send();});});}, 1800);
setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt; console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp); };ourRequest.send();});});},500000);  };

funmatic(); function funmatic(){{var coin='matic'; var COINUSDT='MATICUSDT'; var feerv=0.002; var qutrv=0.005; var halfrv=0.15; var dourv=0.03; var amtv=4; var tofixdv=4;     setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;  
fetchUrl("https://api.binance.com/api/v3/klines?symbol="+(COINUSDT)+"&interval=5m&limit=3", function(error, meta,body){var ma3 = ((((JSON.parse(body)[0][4]*1)+(JSON.parse(body)[1][4]*1)+(JSON.parse(body)[2][4]*1))/3).toFixed(tofixdv));  fetchUrl("https://api.binance.com/api/v3/klines?symbol="+(COINUSDT)+"&interval=15m&limit=5", function(error, meta,body){var ma15 = ((((JSON.parse(body)[0][4]*1)+(JSON.parse(body)[1][4]*1)+(JSON.parse(body)[2][4]*1)+(JSON.parse(body)[3][4]*1)+(JSON.parse(body)[4][4]*1))/5).toFixed(tofixdv));   console.log(coin+ma3+" "+ma15);     
// if(lep!=0 &&(hplptrend=='S' || cp<lep-halfrv)){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 &&(hplptrend=='L' || sep+halfrv<cp)){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
});});};ourRequest.send();});});},2000);  setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;
if(hplp+feerv<cp && hplptrend=='L' || cp<hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend}), function(err){if(err)throw err;});};    if(hplp+dourv<cp && hplptrend=='S'){console.log(coin+"L↑"+hplp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"L"}), function(err){if(err)throw err;});};    if(cp<hplp-dourv && hplptrend=='L'){console.log(coin+"S↓"+hplp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"S"}), function(err){if(err)throw err;});};  };ourRequest.send();});});}, 1800);
setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt; console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp); };ourRequest.send();});});},500000);  };

funlink(); function funlink(){var coin='link'; var COINUSDT='LINKUSDT'; var feerv=0.01; var qutrv=0.03; var halfrv=0.7; var dourv=0.15; var amtv=0.7; var tofixdv=4;       setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;  
fetchUrl("https://api.binance.com/api/v3/klines?symbol="+(COINUSDT)+"&interval=5m&limit=3", function(error, meta,body){var ma3 = ((((JSON.parse(body)[0][4]*1)+(JSON.parse(body)[1][4]*1)+(JSON.parse(body)[2][4]*1))/3).toFixed(tofixdv));  fetchUrl("https://api.binance.com/api/v3/klines?symbol="+(COINUSDT)+"&interval=15m&limit=5", function(error, meta,body){var ma15 = ((((JSON.parse(body)[0][4]*1)+(JSON.parse(body)[1][4]*1)+(JSON.parse(body)[2][4]*1)+(JSON.parse(body)[3][4]*1)+(JSON.parse(body)[4][4]*1))/5).toFixed(tofixdv));   console.log(coin+ma3+" "+ma15);     
// if(lep!=0 &&(hplptrend=='S' || cp<lep-halfrv)){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CL  "+olourRequest.responseText);}; olourRequest.send();   };
// if(sep!=0 &&(hplptrend=='L' || sep+halfrv<cp)){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"CS  "+olourRequest.responseText);}; olourRequest.send();   };
// if(lamt<amtv && hplptrend=='L'){var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OL  "+olourRequest.responseText);}; olourRequest.send();  };
// if(samt<amtv && hplptrend=='S'){var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey":'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp);  console.log(coin+"OS  "+olourRequest.responseText);}; olourRequest.send();};    
});});};ourRequest.send();});});},2000);  setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;
if(hplp+feerv<cp && hplptrend=='L' || cp<hplp-feerv && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend}), function(err){if(err)throw err;});};    if(hplp+dourv<cp && hplptrend=='S'){console.log(coin+"L↑"+hplp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"L"}), function(err){if(err)throw err;});};    if(cp<hplp-dourv && hplptrend=='L'){console.log(coin+"S↓"+hplp); fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"S"}), function(err){if(err)throw err;});};  };ourRequest.send();});});}, 1800);
setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'VaRGIouNmm4T0B8DxP3bAi4Yj7ga3rJrHV5Ga4KRqeexC0eIej9OoxShF2CLEWB5', "skey" : 'SUL8CN7gG9CyF5rbbg0jKTr2zqMPXgfXLzfC1NeibdWHLwy080gNtUnXpA0WTyzs'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt; console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp); };ourRequest.send();});});},500000);  };

const crypto=require('crypto');  var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;  const storage=require('node-sessionstorage'); const fs = require('fs');  var express=require('express'), app=express(), bodyparser=require('simple-bodyparser'), PORT=8000; app.use(bodyparser()); setInterval(function(){request({method: "POST", url: "https://z-3k8g.onrender.com/hook", body: '...'});},500000);   app.post("/hook", function(req,res){const responseText=req.query['hub.challenge']; res.send(responseText);  res.status(200).end();  console.log(req.body);   }); app.listen(PORT,()=>console.log("server now running on %d",PORT));

funhook(); function funhook(){var coin='hook'; var COINUSDT='HOOKUSDT'; var feerv=0.01; var qutrv=0.03; var halfrv=0.07; var dourv=0.15; var amtv=2; var tofixdv=4;     setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb; var clcs=(JSON.parse(data)).clcs;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;
if(lep!=0 &&(hplptrend=='S' || cp<hplp && cp<lep-qutrv || cp<lep-qutrv)){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:cp}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("CL  "+olourRequest.responseText);}; olourRequest.send();   };
if(sep!=0 &&(hplptrend=='L' || hplp<cp && sep-qutrv<cp || sep+qutrv<cp)){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:cp}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("CS  "+olourRequest.responseText);}; olourRequest.send();   };
if(lamt<amtv && hplptrend=='L' && otb=='L' || lamt<amtv && clcs!=0 && hplptrend=='L' && clcs+halfrv<cp){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:"S", clcs:clcs}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("OL  "+olourRequest.responseText);}; olourRequest.send();  };
if(samt<amtv && hplptrend=='S' && otb=='S' || samt<amtv && clcs!=0 && hplptrend=='S' && cp<clcs-halfrv){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:"L", clcs:clcs}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("OS  "+olourRequest.responseText);}; olourRequest.send();};    
};ourRequest.send();});});}, 2000);  setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb; var clcs=(JSON.parse(data)).clcs;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;
if(hplp+feerv/3<cp && hplptrend=='L'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:clcs}), function(err){if(err)throw err;});}; if(cp<hplp-feerv/3 && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:clcs}), function(err){if(err)throw err;});}; if(hplp+dourv<cp && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"L", otb:otb, clcs:clcs}), function(err){if(err)throw err;});}; if(cp<hplp-dourv && hplptrend=='L'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"S", otb:otb, clcs:clcs}), function(err){if(err)throw err;});};  };ourRequest.send();});});}, 1800);
setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb; var clcs=(JSON.parse(data)).clcs;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt; console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb+" "+clcs);  };ourRequest.send();});});},500000);  };

funbch(); function funbch(){var coin='bch'; var COINUSDT='BCHUSDT'; var feerv=0.3; var qutrv=0.5; var halfrv=1; var dourv=2.5; var amtv=0.04; var tofixdv=2;     setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb; var clcs=(JSON.parse(data)).clcs;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;
if(lep!=0 &&(hplptrend=='S' || cp<hplp && cp<lep-qutrv || cp<lep-qutrv)){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:cp}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(lamt)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("CL  "+olourRequest.responseText);}; olourRequest.send();   };
if(sep!=0 &&(hplptrend=='L' || hplp<cp && sep-qutrv<cp || sep+qutrv<cp)){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:cp}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(samt)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("CS  "+olourRequest.responseText);}; olourRequest.send();   };
if(lamt<amtv && hplptrend=='L' && otb=='L' || lamt<amtv && clcs!=0 && hplptrend=='L' && clcs+halfrv<cp){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:"S", clcs:clcs}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp+++feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("OL  "+olourRequest.responseText);}; olourRequest.send();  };
if(samt<amtv && hplptrend=='S' && otb=='S' || samt<amtv && clcs!=0 && hplptrend=='S' && cp<clcs-halfrv){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:"L", clcs:clcs}), function(err){if(err)throw err;});  var dataQueryString="symbol="+(COINUSDT)+"&side=SELL&positionside=SHORT&type=LIMIT&timeInForce=GTC&quantity="+(amtv)+"&price="+((cp---feerv).toFixed(tofixdv))+"&recvWindow=20000&timestamp=" + Date.now();  var keys={"akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey":'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'};  var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/order?' + dataQueryString + '&signature=' + signature;  var olourRequest=new XMLHttpRequest(); olourRequest.open('POST',url,true); olourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); olourRequest.onload=function(){console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);  console.log("OS  "+olourRequest.responseText);}; olourRequest.send();};    
};ourRequest.send();});});}, 2000);  setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb; var clcs=(JSON.parse(data)).clcs;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;
if(hplp+feerv/3<cp && hplptrend=='L'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:clcs}), function(err){if(err)throw err;});}; if(cp<hplp-feerv/3 && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:hplptrend, otb:otb, clcs:clcs}), function(err){if(err)throw err;});}; if(hplp+dourv<cp && hplptrend=='S'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"L", otb:otb, clcs:clcs}), function(err){if(err)throw err;});}; if(cp<hplp-dourv && hplptrend=='L'){fs.writeFile('localStorage_data/'+coin+'data.json', JSON.stringify({hplp:cp, hplptrend:"S", otb:otb, clcs:clcs}), function(err){if(err)throw err;});};  };ourRequest.send();});});}, 1800);
setInterval(function(){fs.readFile('localStorage_data/'+coin+'data.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb; var clcs=(JSON.parse(data)).clcs;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(tofixdv); var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide==positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice); var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt; console.log(coin+cp+"  lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb+" "+clcs);  };ourRequest.send();});});},500000);  };

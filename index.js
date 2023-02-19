const crypto=require('crypto');  var request=require('request'); var fetchUrl=require('fetch').fetchUrl; var XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;  const storage=require('node-sessionstorage'); const fs = require('fs');  var express=require('express'), app=express(), bodyparser=require('simple-bodyparser'), PORT=8000;  app.use(bodyparser());  setInterval(function(){request({method: "POST", url: "https://z-3k8g.onrender.com/hook", body: '...'}); }, 500000);
app.post("/hook", function(req,res){const responseText=req.query['hub.challenge']; res.send(responseText);  res.status(200).end();  console.log(req.body);   }); app.listen(PORT,()=>console.log("server now running on %d",PORT));


function Funrun(){var coin='hbar'; var COINUSDT='HBARUSDT'; var feerv=0.002; var qutrv=0.005; var halfrv=0.015; var dourv=0.04; var amtv=5; var tofixdv=0;  setInterval(function(){fs.readFile('localStorage_data/hbardata.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(4);
var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide == positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice);  var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;   if(hplp+feerv/3<cp && hplptrend=='L'){storage.setItem('hplp', cp);}; if(cp<hplp-feerv/3 && hplptrend=='S'){storage.setItem('hplp', cp);}; if(hplp+dourv<cp && hplptrend=='S'){storage.setItem('hplptrend', 'L'); storage.setItem('otb', 'OS'); storage.setItem('hplp', cp);}; if(cp<hplp-dourv && hplptrend=='L'){storage.setItem('hplptrend', 'S'); storage.setItem('otb', 'OL'); storage.setItem('hplp', cp);}; fs.writeFile('localStorage_data/hbardata.json', JSON.stringify({hplp:hplp, hplptrend:hplptrend, otb:otb}), function(err){if(err)throw err;});
console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);   };ourRequest.send(); }); });}, 10000);};Funrun();



function Funrun(){var coin='sol'; var COINUSDT='SOLUSDT'; var feerv=0.002; var qutrv=0.005; var halfrv=0.015; var dourv=0.04; var amtv=5; var tofixdv=0;  setInterval(function(){fs.readFile('localStorage_data/soldata.json', function(err, data){if(err)throw err;  var hplp=(JSON.parse(data)).hplp; var hplptrend=(JSON.parse(data)).hplptrend; var otb=(JSON.parse(data)).otb;  fetchUrl("https://api.binance.com/api/v3/ticker/price?symbol="+(COINUSDT)+"", function(error, meta, body){var cp=(JSON.parse(body.toString()).price*1).toFixed(4);
var dataQueryString="symbol="+(COINUSDT)+"&side=BUY&positionside=LONG&timeInForce=GTC&recvWindow=20000&timestamp="+Date.now();  var keys={ "akey" : 'q0BJWt8urghSipcelMY0JabluzLw12H09uvQua5XXIbBGTC4HPEuOg4LTzIItXbe', "skey" : 'ByzRh0wACKoN1mKZqFMigQrWemH9GyJxsO5XGOG3KT1iB117GzyNpYFUtJIFiZSp'}; var signature=crypto.createHmac('sha256',keys['skey']).update(dataQueryString).digest('hex');  var url='https://fapi.binance.com/fapi/v1/positionRisk?'+dataQueryString+'&signature='+signature; var ourRequest=new XMLHttpRequest(); ourRequest.open('GET',url,true); ourRequest.setRequestHeader('X-MBX-APIKEY', keys['akey']); ourRequest.onload=function(){var oddata=JSON.parse(ourRequest.responseText); function getCountryByCode(positionSide){return oddata.filter(function(oddata){return oddata.positionSide == positionSide});}; var lep=(getCountryByCode('LONG')[0].entryPrice);  var lamt=getCountryByCode('LONG')[0].positionAmt; var sep=(getCountryByCode('SHORT')[0].entryPrice); var samt=-1*getCountryByCode('SHORT')[0].positionAmt;   if(hplp+feerv/3<cp && hplptrend=='L'){storage.setItem('hplp', cp);}; if(cp<hplp-feerv/3 && hplptrend=='S'){storage.setItem('hplp', cp);}; if(hplp+dourv<cp && hplptrend=='S'){storage.setItem('hplptrend', 'L'); storage.setItem('otb', 'OS'); storage.setItem('hplp', cp);}; if(cp<hplp-dourv && hplptrend=='L'){storage.setItem('hplptrend', 'S'); storage.setItem('otb', 'OL'); storage.setItem('hplp', cp);}; fs.writeFile('localStorage_data/soldata.json', JSON.stringify({hplp:hplp, hplptrend:hplptrend, otb:otb}), function(err){if(err)throw err;});
console.log(coin+cp+"   lep"+lep+" lamt"+lamt+" sep"+sep+" samt"+samt+" "+hplptrend+hplp+" "+otb);   };ourRequest.send(); }); });}, 10000);};Funrun();


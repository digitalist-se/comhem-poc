const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const request = require('request');
var apiResponse = null;

/////////////////////////////////////////////
// ALLOW CORS TO localhost:3000 dev server
/////////////////////////////////////////////
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
/////////////////////////////////////////////
// APP CONFIGURATION
/////////////////////////////////////////////
app.use(allowCrossDomain);




app.use(express.static(__dirname+'/public/proxy.json'));
app.get("/channels", (req, res) => {
 res.sendFile(path.resolve(__dirname+'/public',"proxy.json"))
 console.log(apiResponse);
 res.send(apiResponse);
});
app.get("/programs", (req, res) => {
 res.sendFile(path.resolve(__dirname+'/public',"proxy.json"))
 res.send(apiResponse);
});





/////////////////////////////////////////////
// REQUEST
/////////////////////////////////////////////
var options = {
  url: 'http://83.255.232.105:8080/webapi/events/current',
  // url: 'https://api-staging.tv.comhem.se/webapi/system',
  headers: {
    'webapi-version' : "99",
    'api-key': "HZvTr4YV8B"
  }
};
const callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    apiResponse = JSON.parse(body);
      console.log(apiResponse);
  } else {
    console.log(error);
  }
}
request.get(options, callback);






app.listen(port);
console.log("Server started!");

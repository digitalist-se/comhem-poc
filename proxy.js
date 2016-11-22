const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const request = require('request');

// var Agent = require('socks5-http-client/lib/Agent');

app.use(express.static(__dirname+'/public/proxy.html'));
app.get("*", (req, res) => {
 res.sendFile(path.resolve(__dirname+'/public',"proxy.html"))

  request
    .get('https://api-staging.tv.comhem.se/webapi/system', options)
    .on('response', (response) => {
      // res.send(response.toJSON());
      console.log(response.toJSON());
    });
  // res.send(request(options, callback));


});


var options = {
  url: 'https://api-staging.tv.comhem.se/webapi/channel',
  headers: {
    'webapi-version' : "99",
    'api-key': "HZvTr4YV8B"
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    // app.set(info)
    console.log(info);
    // return info;
  } else {
    console.log("Det funkade inte");
  }
}

request.get(options, callback);

app.listen(port);
console.log("Server started!");

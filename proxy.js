const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

var request = require('request');

app.use(express.static(__dirname+'/public'));
app.get("*", (req, res) => {
 res.sendFile(path.resolve(__dirname+'/public',"proxy.html"))
 // res.send('Hello World!!!!');
});


var options = {
  url: 'https://api-staging.tv.comhem.se/webapi/customer',
  headers: {
    'webapi-version' : 99,
    'api-key': "HZvTr4YV8B"
  }
};



function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    // app.set(info)
    // console.log(info);
    // console.log(info.forks_count + " Forks");
  }
}

// request(options, callback);
// request(options, callback).pipe(request.put('localhost:8080'))

request('http://google.com/doodle.png').pipe(fs.createWriteStream('doodle.png'))



app.listen(port);
console.log("Server started");

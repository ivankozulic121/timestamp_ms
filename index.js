// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date?", (req,res) => {
  if (Number(req.params.date)){

  let date = new Date(Number(req.params.date))
  res.json({"unix": +date, "utc": date.toUTCString()} )
}
  //console.log(date);
  else{
  if(!req.params.date)
  //console.log(date.toString());
  //console.log(typeof(date));
  //console.log(date);
  
 { let date = new Date(Date.now())
  if (date.toString == "Invalid Date") res.json({"error": "Invalid date"})
  else {
  res.json(
    {"unix": +Date.now(), "utc":  date.toUTCString()})}
  
  }
  else {
  let date = new Date(req.params.date);
  if (date.toString == "Invalid Date") res.json({"error": "Invalid date"})
  else{
  res.json({"unix": +date, "utc": date.toUTCString()});
}
  }
  }
  
})



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

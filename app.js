// http://timbot.co

var app = require('express')()
  , http = require('http');

app.get('/', function (req, res) {
  res.end(JSON.stringify(
    {
      name: 'Tim Sze',
      description: 'Back-End Software Engineer',
      email: 'me@timbot.co',
      phone: '650.517.3250',
      linkedin: 'http://www.linkedin.com/pub/tim-sze/12/7a1/590',
      github: 'http://github.com/timmysze'
    }
  ));
});

app.set('port', process.env.PORT || 3000);

http.createServer(app).listen(app.get('port'), function(){
  console.log('timbot on port ' + app.get('port'));
});

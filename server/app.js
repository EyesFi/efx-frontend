var createError = require('http-errors');
var express = require('express');
var path = require('path');
var log4js = require('log4js');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
const FileStore = require('session-file-store')(session);
var cors = require('cors')
var compression = require('compression')

var moment = require('moment');


var app = express();

const allowedOrigins = ['http://lys.eyes.finance:8080', 'http://*.eyesfi.com', 'http://lys.eyes.finance','https://www.eyesfi.com','https://eyesfi.com','https://st.eyesfi.com','https://fs1.eyesfi.club','https://image.eyesfi.club'];
const options =  cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(compression());

app.locals.moment = moment;
//config render template
const nunjucks = require('nunjucks');
const env = nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.use(log4js.connectLogger(log4js.getLogger("express")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use("/pub", express.static(path.join(__dirname, 'public')));

app.disable('etag');

//MEM session
app.use(session({
  store:new FileStore(),
  secret: 'qcwhg-@gfz578$)gd2rshxldvs2s-=gv*(&nb%q^',
  name: 'efweb_sid_v2',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: {maxAge: 60000 * 60 * 24 },  //设置maxAge是80000ms，即3h后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: false,
}));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//get session user 
app.use(function (req, res, next) {
  res.locals.user = req.session.user;
  if(res.locals.locale == 'en'){
      res.locals.EtherScanHost = 'etherscan.io';
  }else {
      res.locals.EtherScanHost = 'cn.etherscan.com';
  }
  next();
});

//internal routers
var index = require('./routes/index');

app.use('/efwapi', index);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// no stacktraces leaked to user
app.use(function (err, req, res,next) {
  if(req.path && req.path.endsWith(".json")){
      return res.status(200).json({status:err.status,"message":err.status == 404?"api not found":err.message});
  }else{
      if(err.status == 404){
        return res.status(404).render('404.html');
      }else {
        return res.status(500).render('500.html', {
            message:err.message,
            error:err
          });
      }
  }
});

module.exports = app;

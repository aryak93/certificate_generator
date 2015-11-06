var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var openssl = require('openssl-wrapper');
var swig = require('swig');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/
app.get('/hello',function(req,res)
{
  console.log("Hello");
});

app.get('/start',function(req,res)
{
    //console.log("Hello World");



   /* var newkey = "rsa";
    var keyout = "C:\\Users\\arysengupta\\Documents\\Certifications_test\\openssl-0.9.8e_X64\\bin\\demoCA\\private\\cakey.pem";
    var out = "C:\\Users\\arysengupta\\Documents\\Certifications_test\\openssl-0.9.8e_X64\\bin\\demoCA\\cacert.pem"
    var password = "abcd1234";
    var config = path.join("C:","Users","arysengupta","Documents","Certifications_test","openssl-0.9.8e_X64","openssl.cnf")
    //var config = "C:\Users\arysengupta\Documents\Certifications_test\openssl-0.9.8e_X64\openssl.cnf";
    console.log("Config - "+config);
    return openssl.exec("req.x509", {newkey: newkey+':512',keyout : keyout, out:out, passout: 'pass:' + password, config:config}, function(err, buffer) {
      console.log("XYZ");
      if(err)
      {
        console.log("------------"+err);
      }
      console.log("***************"+buffer.toString());
    res.redirect("/");
  });
  

 /* var KEYTOOL_COMMAND = "C:\\Program Files\\Java\\jdk1.8.0_60\\bin\\keytool";
  //var ktArgs = ["-genkey", "-v", "-keystore", "test.keystore", "-alias", "test", "-keyalg", "RSA", "-keysize" ,"2048", "-validity", "10000"];
  var ktArgs = ["-help"];
  var spawn = require("child_process").spawn;
  var cmd = spawn(KEYTOOL_COMMAND, ktArgs);
  cmd.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

});*/

/*function cmd_exec(cmd, args, cb_stdout, cb_end) {
  var spawn = require('child_process').spawn,
    child = spawn(cmd, args),
    me = this;
  me.exit = 0;  // Send a cb to set 1 when cmd exits
  child.stdout.on('data', function (data) { cb_stdout(me, data) });
  child.stdout.on('end', function () { cb_end(me) });
}
foo = new cmd_exec('netstat', ['-rn'], 
  function (me, data) {me.stdout += data.toString();},
  function (me) {me.exit = 1;}
);
function log_console() {
  console.log(foo.stdout);
}
setTimeout(
  // wait 0.25 seconds and print the output
  log_console,
250);
*/

/*function run_cmd(cmd, args, callBack ) {
    var keytoolPath = path.join('C:','Program Files','Java','jdk1.8.0_60','bin')
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
}


run_cmd( "ls", ["-help"], function(text) { 
    console.log (text);
    res.redirect('/'); 
  });

*/

  var cmd = "Keytool -genkey -alias keytestalias -keystore C:\\Users\\arysengupta\\Documents\\Certifications_test\\openssl-0.9.8e_X64\\keystore\\keystoretest.keystore -keyalg rsa -dname \"CN=arysengupta, OU=ES, O=Lexmark,L=Kolkata, S=WB, C=IN\" -storepass abcd1234 -keypass abcd1234"
  var exec = require('child_process').exec;
  exec(cmd, {
    cwd: 'C:\\Program Files\\Java\\jdk1.8.0_60\\bin'
}, function(error, stdout, stderr) {
   console.log("Hello"+stdout);
   console.log("Error"+error);
   console.log("Std error = "+stderr);
});

//run_cmd("Keytool -genkey -alias keytestalias -keystore C:\\Users\\arysengupta\\Documents\\Certifications_test\\openssl-0.9.8e_X64\\keystore\\keystoretest.keystore -keyalg rsa -dname \"CN=arysengupta, OU=ES, O=Lexmark,L=Kolkata, S=WB, C=IN\" -storepass abcd1234 -keypass abcd1234")

});
module.exports = app;

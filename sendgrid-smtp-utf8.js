var dotenv = require('dotenv');
dotenv.load();

var sendgrid_username   = process.env.SENDGRID_USERNAME;
var sendgrid_password   = process.env.SENDGRID_PASSWORD;
var from                = process.env.FROM;
var tos                 = process.env.TOS.split(',');

var email = require("emailjs");
var server = email.server.connect({
  user:     sendgrid_username,
  password: sendgrid_password,
  host:     "smtp.sendgrid.net",
  tls:      true
});

var smtpapi = require('smtpapi');
var header = new smtpapi();
header.setTos(tos);
header.addSubstitution('fullname', ['田中 太郎', '佐藤 次郎', '鈴木 三郎']);
header.addSubstitution('familyname', ['田中', '佐藤', '鈴木']);
header.addSubstitution('place', ['office', 'home', 'office']);
header.addSection('office', '中野');
header.addSection('home', '目黒');
header.addCategory('Category1');

var message = {
  from:         from,
  to:           tos,
  subject:      '[sendgrid-emailjs-example] フクロウのお名前はfullnameさん',
  text:         'familynameさんは何をしていますか？\r\n 彼はplaceにいます。',
  'x-smtpapi':  header.jsonString(),
  attachment:
  [
    {data: '<strong>familynameさんは何をしていますか？</strong><br />彼はplaceにいます。', alternative: true},
    {path: "./gif.gif", name: "owl.gif"}
  ]
};

server.send(message, function(err, mes) {console.log(err || mes); });

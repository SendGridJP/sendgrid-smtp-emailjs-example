# sendgrid-smtp-nodemailer-example

本コードはSendGridのSMTPサービス利用サンプル([emailjs](https://github.com/eleith/emailjs))です。

## 使い方

```bash
git clone http://github.com/sendgridjp/sendgrid-smtp-emailjs-example.git
cd sendgrid-smtp-emailjs-example
cp .env.example .env
# .envファイルを編集してください
npm install
node sendgrid-smtp-utf8.js
node sendgrid-smtp-jis.js
```

## .envファイルの編集
.envファイルは以下のような内容になっています。

```bash
SENDGRID_USERNAME=your_username
SENDGRID_PASSWORD=your_password
TOS=you@youremail.com,friend1@friendemail.com,friend2@friendemail.com
FROM=you@youremail.com
```
SENDGRID_USERNAME:SendGridのユーザ名を指定してください。  
SENDGRID_PASSWORD:SendGridのパスワードを指定してください。  
TOS:宛先をカンマ区切りで指定してください。  
FROM:送信元アドレスを指定してください。  

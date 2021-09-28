import { readFileSync } from 'fs';
import { mailgun } from 'mailgun-js';
import { config } from 'dotenv';

config();

const { EMAIL_TOKEN, EMAIL_DOMAIN, EMAIL_FROM, EMAIL_SUBJECT } = process.env

exports.handler = async event => {
  const email = JSON.parse(event.body).payload.email

  const mg = mailgun({apiKey: EMAIL_TOKEN, domain: EMAIL_DOMAIN});
  const template = readFileSync('email-template.html', 'utf-8');
  
  const data = {
    from: EMAIL_FROM,
    to: email,
    subject: EMAIL_SUBJECT,
    text: template
  };

  mg.messages().send(data, function (error, body) {
    console.log(body);
  });
}
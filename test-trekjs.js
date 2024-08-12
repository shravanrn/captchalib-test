'use strict'

const fs = require('fs');
const captcha = require('trek-captcha');
const total = 20;

async function run() {
  fs.mkdirSync('gen/trekjs/', { recursive: true});
  for (let i = 1; i <= total; i++) {
    const { token, buffer } = await captcha({size: 7});
    fs.createWriteStream('gen/trekjs/' +  i.toString() +'.gif').end(buffer);
    fs.createWriteStream('gen/trekjs/' +  i.toString() +'.txt').end(token);
  }

}

run()
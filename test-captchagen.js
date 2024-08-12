'use strict'

const fs = require('fs');
const captchagen = require('captchagen');
const total = 20;

function randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

fs.mkdirSync('gen/captchagen/', { recursive: true});

for (let i = 1; i <= total; i++) {
    var text = randomString(10);
    var captcha = captchagen.create({ text: text, width: 690, height: 230, fontSize: 4 });
    captcha.generate();
    fs.createWriteStream('gen/captchagen/' +  i.toString() +'.png').end(captcha.buffer());
    fs.createWriteStream('gen/captchagen/' +  i.toString() +'.txt').end(captcha.text());
}


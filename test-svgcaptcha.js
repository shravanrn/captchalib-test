'use strict'

const fs = require('fs');
const svgCaptcha = require('svg-captcha');
const total = 20;

function run(name, color) {
    fs.mkdirSync('gen/svgcaptcha-' + name + '/', { recursive: true});

    for (let i = 1; i <= total; i++) {
        var captcha = svgCaptcha.create({ size:10, color: color});
        fs.createWriteStream('gen/svgcaptcha-' + name + '/' +  i.toString() +'.svg').end(captcha.data);
        fs.createWriteStream('gen/svgcaptcha-' + name + '/' +  i.toString() +'.txt').end(captcha.text);
    }
}

run('bw', false);
run('color', true);
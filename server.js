'use strict'

const http = require('http')
const url = require('url')
const fs = require('fs')

const app = require('./src')

http.createServer((req, res) => {
  const path = url.parse(req.url).path

  const filename =
    path === '/build/bundle.js' ? 'build/bundle.js' :
    path === 'index.css' ? 'index.css' : null;

  if (filename) {
    return res.end(fs.readFileSync(__dirname + '/' + path))
  }

  const appHtml = app.toString(path)
  const html = fs.readFileSync('index.html')
    .toString('utf-8')
    .replace('APP_HTML', appHtml)
  res.end(html)
}).listen(3000)


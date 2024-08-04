const fs = require('fs');
const path = require('path');

class Venan {
  constructor() {
    this.routes = {
      GET: {},
      POST: {},
      PUT: {},
      DELETE:{}
    };
    this.staticPath = null;
  }

  get(path, handler) {
    this.routes.GET[path] = handler;
  }

  post(path, handler) {
    this.routes.POST[path] = handler;
  }
  put(path, handler) {
    this.routes.PUT[path] = handler;
  }
  delete(path, handler) {
    this.routes.DELETE[path] = handler;
  }

  serveStatic(directory) {
    this.staticPath = directory;
  }

  handle(req, res) {
    const { method, url } = req;

    if (this.staticPath && method === 'GET') {
      const filePath = path.join(this.staticPath, url === '/' ? 'index.html' : url);
      const ext = path.extname(filePath);
      let contentType = 'text/html';

      switch (ext) {
        case '.js':
          contentType = 'application/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
        case '.jpeg':
          contentType = 'image/jpeg';
          break;
        case '.gif':
          contentType = 'image/gif';
          break;
        case '.ico':
          contentType = 'image/x-icon';
          break;
        default:
          contentType = 'text/html';
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end('Not Found');
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', contentType);
          res.end(data);
        }
      });
      return;
    }

    const handler = this.routes[method] ? this.routes[method][url] : null;

    if (handler) {
      handler(req, res);
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  }

  listen(port, callback) {
    const http = require('http');
    const server = http.createServer((req, res) => {
      this.handle(req, res);
    });
    server.listen(port, callback);
    return server;
  }
}

module.exports = {
  Venan
};

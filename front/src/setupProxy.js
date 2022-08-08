const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/todo', {
      target: 'http://localhost:5001',
      changeOrigin: true,
    })
  );
};
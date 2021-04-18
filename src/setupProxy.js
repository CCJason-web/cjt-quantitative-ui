const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/quantity-search',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true,
    })
  );

  app.use('/quantity-authentication',
    createProxyMiddleware({
      target: 'http://localhost:8082',
      changeOrigin: true,
    })
  );
};
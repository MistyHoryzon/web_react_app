const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
app.use(
'/api', // путь, который вы хотите проксировать
createProxyMiddleware({
target: 'http://127.0.0.1:8000', // адрес вашего прокси-сервера
changeOrigin: true,
})
);
};

module.exports = {
    proxy: {
        '/apis': {
            target: 'http://papa-daily.zhongan.com',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/apis': ''
            }
        }
    }
}

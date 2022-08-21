'use strict'

module.exports = {
    // 基础配置 详情看文档
    publicPath: './',
    //publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        // host: 'lolriotmall-wx.qq.com',
        host: 'localhost',
        // port: 8080,
        // open: true,
        disableHostCheck: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/admin': {
                target: 'http://42.192.151.251:8888', //代理到 目标路径
                secure: false,           //如果是https接口，需要配置这个参数
                changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
                pathRewrite: {
                    '^/admin': 'http://42.192.151.251:8888' // 路径重写
                }
            },
        },
    },
}

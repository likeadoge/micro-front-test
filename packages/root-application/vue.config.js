const { name } = require('./package')

module.exports = {
    publicPath: './',
    lintOnSave: false,

    devServer: {
        port: 3000,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd',// 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
}
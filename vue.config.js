/*
 * @file name: 
 * @Descripttion: 
 * @version: 
 * @Author: langxue
 * @Date: 2022-10-14 21:20:10
 * @LastEditors: langxue
 * @LastEditTime: 2022-12-02 15:58:27
 */
const path = require('path');
const CompressionWebpackPlugin = require("compression-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, '.', dir);
}

module.exports = {
  productionSourceMap: true,
  devServer: {},
  configureWebpack: {
    plugins: [
    ],
    output: {},
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    
    config.plugin('compressionPlugin').use(CompressionWebpackPlugin).tap(() => [
      {
        test: /.js$|.html$|.css/, //匹配文件名
        threshold: 10240, //超过10k进行压缩
        deleteOriginalAssets: false //是否删除源文件
      }
    ])
    config.optimization.splitChunks({
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'chunk-libs',
          test: /[\/]node_modules[\/]/,
          priority: 10,
          chunks: 'initial', // 仅限于最初依赖的第三方
          reuseExistingChunk: true
        },
        elementPlus: {
          name: 'chunk-elementPlus', // split elementPlus into a single package
          priority: 20, // 优先级应大于 libs 中，否则将会打包到 libs中
          test: /[\/]node_modules[\/]_?element-plus(.*)/
        },
        // 公共组件库
        commons: {
          name: 'chunk-commons', // 指定 chunks 名称
          test: resolve('src/components'), // 符合组的要求就给构建 vendors
          priority: 30, // 数字越大优先级越高，默认为0，自定义一般是负数，决定 cacheGroups 中相同条件下每个组执行的优先顺序
          reuseExistingChunk: false, // 当前 chunk 如果包含了从 main 里面分离出来的模块，则重用这个模块，这样的问题是会影响 chunk 的名称
          maxInitialRequests: 1, // 最大初始化加载次数，毅哥入口文件可以并行加载的最大文件数量，默认3
          minSize: 0 // 表示在分离前的最小模块大小，默认为0，最小为30000
        },
        echarts: {
          name: 'chunk-echarts',
          test: /[\/]node_modules[\/]_?echarts(.*)/,
          priority: 40,
        }
      }
    });

    config.optimization.runtimeChunk("single");
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.module
      .rule("bpmn")
      .test(/\.bpmn$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end()
  }
}
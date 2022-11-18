/*
 * @file name: 
 * @Descripttion: 
 * @version: 
 * @Author: langxue
 * @Date: 2022-10-14 21:20:10
 * @LastEditors: langxue
 * @LastEditTime: 2022-11-18 11:03:34
 */
module.exports = {
  productionSourceMap: true,
  devServer: {},
  configureWebpack: {
    plugins: [
    ],
    output: {},
  },
  chainWebpack: config => {
    config.module
      .rule("bpmn")
      .test(/\.bpmn$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end()
  }
}
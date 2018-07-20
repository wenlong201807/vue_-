const path = require('path');
const HtmlWebPlugin = require('html-webpack-plugin');

const htmlplugin = new HtmlWebPlugin({
  template: path.join(__dirname, './src/index.html'),
  filename: 'index.html'
})

module.exports = {
  mode: 'development',
  plugins: [
    htmlplugin
  ]
}
module.exports = {
  entry: './main.js',
  output: {
    filename: "bunle.js"
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
    ]
  }
};

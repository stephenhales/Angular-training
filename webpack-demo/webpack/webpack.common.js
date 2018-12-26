module.exports = {
  entry: {
    app: './src/ts/app.ts',
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ts-loader',
        }],
      },   
      {
        test: /\.scss$/,
        use: [
          // creates style nodes from JS strings
          { loader: 'style-loader' },
          // translates CSS into CommonJS
          { loader: 'css-loader', options: { sourceMap: true } },
          // compiles Sass to CSS
          { loader: 'sass-loader', options: { sourceMap: true } }, 
        ]
      }   
    ]
  },
  devtool: 'source-map',
};
const nodeExternals = require('webpack-node-externals');

module.exports = [{
  target: 'node',
  mode: 'development',
  entry: './src/server.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
  },
  devtool: 'source-map',
  externals: nodeExternals(),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    }],
  },
},
{
  mode: 'development',
  entry: './src/client.js',
  output: {
    path: `${__dirname}/static`,
    filename: 'client.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    }],
  },
},
];

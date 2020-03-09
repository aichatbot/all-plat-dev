const nodeExternals = require('webpack-node-externals');

module.exports = [{
  mode: 'development',
  entry: './src/server.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
  },
  devtool: 'source-map',
  externals: nodeExternals(),
},
{
  mode: 'development',
  entry: './src/client.js',
  output: {
    path: `${__dirname}/static`,
    filename: 'client.js',
  },
  devtool: 'source-map',
}];

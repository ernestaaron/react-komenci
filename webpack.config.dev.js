import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development'),
  __DEV__: true
};

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', // more info: https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: true, // set to false to see a list of every file being bundled.
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  output: {
    path: `${__dirname}/src`, // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: 'http://localhost:5000/', // Use absolute paths to avoid the way that URLs are resolved by Chrome when they're parsed from a dynamically loaded CSS blob. Note: Only necessary in Dev.
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS), // Tells React to build in dev mode.
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({  // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/assets/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
  ],
  module: {
    loaders: [
      { // json
        test: /\.json$/,
        loader: "json-loader"
      },

      { // scripts
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      },
      { // fonts - EOT format
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      { // fonts - WOOF format
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"
      },
      { // fonts - TTF format
        test: /\.ttf(\?v=\d+.\d+.\d+)?$/,
        loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
      },
      { // fonts - SVG format
        test: /\.svg(\?v=\d+.\d+.\d+)?$/,
        include: path.join(__dirname, 'src', 'assets', 'fonts'),
        loader: 'file-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
      },
      { // images
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'src', 'assets', 'fonts'),
        loaders: ['file-loader?name=images/[name].[ext]']
      },
      { // ico files - usually just for the favicon.ico
        test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'
      },
      { // css files
        test: /(\.css|\.scss)$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      }
    ]
  }
// # >>>> custom [keep-this-line]
};

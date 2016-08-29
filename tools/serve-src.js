// Dev Web Server that loads the code in memory and supports hot reloading
// and synchronized ui/functionality test using browsersync


// Require Browsersync along with webpack and middleware for it
import browserSync from 'browser-sync';
// Required for react-router browserHistory
// see https://github.com/BrowserSync/browser-sync/issues/204#issuecomment-102623643
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const bundler = webpack(config);

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
  port: 5000,
  ui: {
    port: 5001 // port where browsersync admin site will be avaialble
  },
  server: {
    baseDir: 'src', // base folder to serve

    middleware: [
      // todo:
      historyApiFallback(),

      // make sure browsersync is aware of webpack compilations
      webpackDevMiddleware(bundler, {
        // middleware can't access config, providing public path
        publicPath: config.output.publicPath,

        // coulored output === pretty outuput
        stats: { colors: true },

        // hide files being bundled
        noInfo: true

        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),

      // bundler should be the same as above
      webpackHotMiddleware(bundler)
    ]
  },

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/*.html'
  ]
});

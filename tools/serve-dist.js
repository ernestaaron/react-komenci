// configures browsersync to serve the application from the dist folder,
// allowing you to test how produciton would behave
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';

// Run Browsersync
browserSync({
  port: 5000,
  ui: {
    port: 5001
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});

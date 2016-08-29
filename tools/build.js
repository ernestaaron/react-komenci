// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
import webpack from 'webpack';
import config from '../webpack.config.prod';
import logger from './logger';

process.env.NODE_ENV = 'production'; // this assures React is built in prod mode and that the Babel dev config doesn't apply.

logger.info('Generating minified bundle for production via Webpack. This will take a moment...');

webpack(config).run((error, stats) => {
  if (error) { // so a fatal error occurred. Stop here.
    logger.error(error);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => logger.error(error));
  }

  if (jsonStats.hasWarnings) {
    logger.warn('Webpack generated the following warnings: ');
    jsonStats.warnings.map(warning => logger.warn(warning));
  }

  logger.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  logger.success('Your app is compiled in production mode in /dist. It\'s ready to roll!');

  return 0;
});

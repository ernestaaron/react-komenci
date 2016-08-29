import yargs from 'yargs';
import logger from './logger';

const argv = yargs.argv;
const platform = argv.platform || 'dev';

/* eslint-disable no-console */
logger.success('Starting app in ' + platform + ' mode...');

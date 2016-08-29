import chalk from 'chalk';

const argsToArray = args => {
  return Array.prototype.slice.call(args);
};

/* eslint-disable no-console */

const success = function() {
  console.log.apply(arguments, argsToArray(arguments).map(arg => {
    return chalk.green(arg);
  }));
};

const error = function() {
  console.error.apply(this, argsToArray(arguments).map(arg => {
    return chalk.red(arg);
  }));
};

const warn = function() {
  console.warn.apply(this, argsToArray(arguments).map(arg => {
    return chalk.yellow(arg);
  }));
};

const info = function() {
  console.info.apply(this, argsToArray(arguments).map(arg => {
    return chalk.blue(arg);
  }));
};

const log = function() {
  console.log.apply(this, argsToArray(arguments).map(arg => {
    return chalk.gray(arg);
  }));
};

export default {
  success,
  error,
  warn,
  info,
  log
};

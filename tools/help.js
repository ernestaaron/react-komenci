const chalk = require('chalk');

const help = () => {
  const breakM1 = '\n                ';
  const breakM2 = '\n                                ';

  /*eslint-disable no-console*/
  console.log("The most used commands are:");
  console.log("");
  console.log("  `"+chalk.cyan("npm start") + "` - starts the project in development mode and keep watching for changes" + breakM1 +
                                                  "on source files recompiling code and reloading page when needed" + breakM1 +
                                                  "It automatically executes tests and lint files as they are modified");
  console.log("  `"+chalk.cyan("npm build") + "` - process the source code and build the final pieces needed in" + breakM1 +
                                                  "production, storing them on a distribution folder called `dist`.");
  console.log("  `"+chalk.cyan("npm test") + "`  - run the all unit tests available, and creates code coverage report.");
  console.log("\n");

  process.stdin.resume(); // initializes the STDIN reading process
  process.stdout.write(`Press Enter/Return to see more commands or Ctrl+C to exit. `);
  process.stdin.once('data', function() {
    console.log("\n");
    console.log("All the other commands for testing, code coverage, linting will also be called" + "\n" +
                "by the previous commands, but you are free to call them individually as needed:");
    console.log("\n");
    console.log("  `"+chalk.cyan("npm run build:start") + "`       - same as `npm build`, but it also starts a local node " + breakM2 +
                                                                    "server that will point to the distribution folder.");
    console.log("  `"+chalk.cyan("npm run test:watch") + "`        - same as `npm test`, but it keeps watching for" + breakM2 +
                                                                    "changes on files, and re-executing tests as needed");
    console.log("  `"+chalk.cyan("npm run lint") + "`              - verify code styling rules from your code, based on the" + breakM2 +
                                                                    "eslint configuration file (`.eslintrc`)");
    console.log("  `"+chalk.cyan("npm run lint:watch") + "`        - same as `npm lint`, but it keeps watching for changes," + breakM2 +
                                                                    "notifying you of any inconsistencies as they happen");
    console.log("  `"+chalk.cyan("npm run test:cover") + "`        - generate a test coverage report");
    console.log("  `"+chalk.cyan("npm run test:cover:travis") + "` - generate a test coverage report to be used by travis" + breakM2 +
                                                                    "continuous integration service");
    console.log("  `"+chalk.cyan("npm run help") + "`              - shows this help content");
    console.log("\n");

    process.exit(0);
  });
  /*eslint-enable no-console*/
};

help();

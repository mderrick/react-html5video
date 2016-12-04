/* eslint-disable no-console */

const ghpages = require('gh-pages');
const pkg = require('./../package.json');
const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const distPath = path.join(__dirname, '../demo/dist');

const deploy = (options = {}) => {
    ghpages.publish(distPath, Object.assign({
        message: pkg.version
    }, options), (err) => {
        if (err) {
            error([err]);
            return;
        }
        console.log(chalk.green('Demo has succesfully deployed.'));
    });
};

const error = (errs = []) => {
    errs.forEach((err) => {
        console.log(chalk.red(err));
    });
    process.exit(1);
};

try {
    fs.accessSync(distPath, fs.F_OK);
    if (process.env.TRAVIS) {
        if (process.env.GITHUB_TOKEN) {
            deploy({
                repo: `https://${process.env.GITHUB_TOKEN}@github.com/${process.env.TRAVIS_REPO_SLUG}.git`,
                user: {
                    name: 'Travis CI'
                }
            });
        } else {
            error(['process.env.GITHUB_TOKEN with "repo" access is required to deploy gh-pages.']);
        }
    } else {
        // Deploys using git origin, username and email.
        deploy();
    }
} catch (e) {
    error([
        `${distPath} does not exist.`,
        'Please run "npm i && npm run i:demo && npm run build:demo" and try again.'
    ]);
}

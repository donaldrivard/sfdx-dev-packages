#!/usr/bin/env node
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const shell = require('../utils/shelljs');

const packageRoot = require('../utils/package-path');
const SfdxDevConfig = require('../utils/sfdx-dev-config');

const nyc = require.resolve('nyc/bin/nyc');

const config = new SfdxDevConfig(packageRoot);
const testConfig = config.get('test') || {};

let command = `${nyc} mocha`;

if (!testConfig.mochaOpts) {
  command +=
    ' --require ts-node/register --require source-map-support/register';
}

const includes = testConfig.testsPath || '**/*.test.ts';
command += ` --recursive "${includes}"`;

try {
  shell.exec(command, {
    cwd: packageRoot
  });
} catch (err) {
  process.exitCode = 1;
}

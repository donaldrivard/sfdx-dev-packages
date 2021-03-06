#!/usr/bin/env node
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const shell = require('../utils/shelljs');

const packageRoot = require('../utils/package-path');
const prettierConfig = require.resolve('@salesforce/dev-config/prettier');

shell.exec(
  `prettier --config ${prettierConfig} --write '+(src|test)/**/*.+(ts|js|json)'`,
  {
    cwd: packageRoot
  }
);

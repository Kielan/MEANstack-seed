'use strict';

/*
 * gulpfile.js
 * ===========
 * Each task has been broken out into
 * its own file in gulp/tasks. Any file in that folder gets automatically
 * required by the loop in ./gulp/index.js (required below).
 *
 * To add a new task, simply add a new task file to gulp/tasks.
 */

global.isProd = false;

require('./gulp');

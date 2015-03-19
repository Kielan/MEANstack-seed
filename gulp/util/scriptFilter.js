'use strict';

var path = require('path');

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
// helpful if you fuck with ~swap files

module.exports = function(name) {

  return /(\.(js)$)/i.test(path.extname(name));

};

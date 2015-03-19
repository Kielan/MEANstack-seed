'use strict';

var dest = './build';
var src = './asset';

module.exports = {
    
  browserSync: {
    server: {
      // Serve our build folder
      baseDir: dest
    }
  },
    browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/angularModules/app.js',
      dest: dest,
      outputName: 'global.js'
	// Additional file extentions to make optional
	//dependencies below (remember comma above)
    }]
  }
    
};

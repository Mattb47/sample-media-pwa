var copy = require('copy')

// original copy pattern:
//copy('src/client/**/*.*', '!src/client/scripts/**/*.*', 'dist/client', function(err, files)

copy('src/client/**/*.*', 'dist/client', function(err, files) {
  //
  if (err) return console.error(err);
  files.forEach(function(file) {
    console.log(file.relative);
  });
});


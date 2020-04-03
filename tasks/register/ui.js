module.exports = function(grunt) {
  var folderName = grunt.option("target");
  var isProduction = grunt.option("production");
  if (isProduction) {
    grunt.registerTask("ui", ["ejs:ui", "concat:production", "prod"]);
  } else {
    grunt.registerTask("ui", ["ejs:ui"]);
  }
};

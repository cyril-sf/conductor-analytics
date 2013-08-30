module.exports = {
  compile: {
    options: {
      templateName: function(filename) {
        return filename.replace(/templates\//,'').replace(/\.handlebars$/,'');
      }
    },
    files: {
      "tmp/public/templates.js": "templates/*.handlebars"
    }
  }
};

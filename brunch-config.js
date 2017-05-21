// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'js/vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'js/app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'css/app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  sass: {
    options: {
        includePaths: ['node_modules/susy/sass/', 'node_modules/breakpoint-sass/stylesheets/', 'node_modules/slick-carousel/slick/']
    }
  }
};

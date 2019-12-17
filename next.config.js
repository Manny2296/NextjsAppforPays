const withSass = require("@zeit/next-sass");
module.exports = withSass();
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
cssLoaderOptions: {
url: false
}
})
const withImages = require('next-images');

module.exports = withImages(withSass({
    webpack(config, options) {
        return config
      }
}));
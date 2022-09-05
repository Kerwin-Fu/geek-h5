const path = require('path')
const pxToViewport = require('postcss-px-to-viewport-8-plugin')
const vw = pxToViewport({
  viewportWidth: 375
})

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@scss': path.resolve(__dirname, 'src/assets/styles')
    }
  },
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [vw]
        }
      }
    }
  }
}

module.exports = {
  images: {
    loader: 'imgix',
    path: `${process.env.HOST}` || 'localhost:3000',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.HOST : '',
}
module.exports = {
  images: {
    loader: 'imgix',
    path: `${process.env.HOST}:3000` || 'localhost:3000',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.HOST : '',
}
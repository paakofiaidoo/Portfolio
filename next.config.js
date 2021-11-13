module.exports = {
  images: {
    loader: 'imgix',
    path: process.env.NEXT_PUBLIC_BASE_PATH || 'localhost:3000',

  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
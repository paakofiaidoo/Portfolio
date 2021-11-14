
const loader = () => {
  if (process.env.VERCEL_URL) {
    return {};
  } else if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return {
      images: {
        loader: 'imgix',
        path: `${process.env.HOST}/${process.env.NEXT_PUBLIC_BASE_PATH}`,
      }
    };
  } else {
    return {};
  }
}

module.exports = {
  ...loader(),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
//VERCEL_URL

const loader = ()=>{
  if (process.env.VERCEL_URL) {
    return {
      loader: 'imgix',
      path: process.env.VERCEL_URL,
    };
  } else if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return {
      loader: 'imgix',
      path: `${process.env.HOST}/${process.env.NEXT_PUBLIC_BASE_PATH}`,
    };
  } else {
    return {
      loader: 'imgix',
      path: 'localhost:3000',
    };
  }
}

module.exports = {
  images: {
   ...loader(),

  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
//VERCEL_URL
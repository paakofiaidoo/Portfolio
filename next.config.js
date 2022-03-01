
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
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  env: {
    // declare here all your variables
    BASE_URL: process.env.BASE_URL,
    REST_URL: process.env.REST_URL,
    API_KEY: process.env.API_KEY,
    APP_ID: process.env.APP_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
  }
}
//VERCEL_URL

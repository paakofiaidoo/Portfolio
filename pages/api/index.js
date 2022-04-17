export function getStrapiURL(path = "") {
  // console.log("getStrapiURL", process.env.REST_URL);
  return `${process.env.REST_URL || "https://personal-strapi-api.herokuapp.com/api"
    }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
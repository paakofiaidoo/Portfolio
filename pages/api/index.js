export function getStrapiURL(path = "") {
    // console.log("getStrapiURL", process.env.REST_URL);
    return process.env.NODE_ENV === "development" ? `${"http://localhost:1337/api"}${path}` : `${process.env.REST_URL || "https://pk-portfolio-api.herokuapp.com/api"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

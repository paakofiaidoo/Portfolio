import "firebase/analytics";
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
// const analytics = analytics.isSupported() ? getAnalytics(app) : {};
const analytics = typeof window !== "undefined" ? getAnalytics(app) : {};

// }
const logEventFun = (opt) => {
    // @ts-ignore
    logEvent(analytics, opt);
};
export { analytics, logEventFun, app };

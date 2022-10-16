import "firebase/analytics";
import { initializeApp, getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// import { getMessaging } from "firebase/messaging";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseURL: process.env.DATABASE_URL,
};

// if (getApp().name) {

// }
const app = initializeApp(firebaseConfig);
// const analytics = analytics.isSupported() ? getAnalytics(app) : {};

const analytics = typeof window !== "undefined" ? getAnalytics(app) : {};

// }
const logEventFun = (opt) => {
    // @ts-ignore
    logEvent(analytics, opt);
};

const db = getDatabase(app);

export { analytics, logEventFun, app, db };

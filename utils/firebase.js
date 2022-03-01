// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALKlNZmjNS1W0vj1juoQfVYyFGDUH_dvA",
    authDomain: "my-portfolio-f28f3.firebaseapp.com",
    projectId: "my-portfolio-f28f3",
    storageBucket: "my-portfolio-f28f3.appspot.com",
    messagingSenderId: "749579626406",
    appId: "1:749579626406:web:ba146ae156124a5f729167",
    measurementId: "G-PR9SEYTBCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');
// console.log(getApps());
// //get the type of a variable
// console.log(analytics);


export { analytics }
// import firebase from "firebase/app";
// import 'firebase/analytics';

// const firebaseConfig = {
//     apiKey: "AIzaSyALKlNZmjNS1W0vj1juoQfVYyFGDUH_dvA",
//     authDomain: "my-portfolio-f28f3.firebaseapp.com",
//     projectId: "my-portfolio-f28f3",
//     storageBucket: "my-portfolio-f28f3.appspot.com",
//     messagingSenderId: "749579626406",
//     appId: "1:749579626406:web:ba146ae156124a5f729167",
//     measurementId: "G-PR9SEYTBCS"
// };

// // if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// // }
// const analytics = firebase.analytics;
// console.log(firebase);
// export { firebase, analytics };
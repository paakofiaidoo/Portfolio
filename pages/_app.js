import '../styles/globals.css'
import '../styles/Normalizer.css'
import '../styles/index.scss'
import axios from "axios";
import { useState, useEffect } from 'react';
import { detect } from 'detect-browser';
import { getStrapiURL } from './api';
import Head from 'next/head'

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


let send = false

function MyApp({ Component, pageProps }) {
  //get user ip address
  const [ip, setIp] = useState('');
  const [browser, setBrowser] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
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
    // analytics();
    const browser = detect();
    setBrowser(browser);
    axios.get('https://api.ipify.org?format=json')
      .then(res => {
        setIp(res.data.ip);
      })
      .catch(err => {
        // console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('https://ipapi.co/' + ip + '/json/')
      .then(res => {
        setLocation(res.data);
        // console.log(res.data);
      })
      .catch(err => {
        // console.log(err);
      })
  }, [ip]);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      // console.log("development");
      if (location && browser && !send) {
        // console.log("send");
        axios.post((getStrapiURL("/visitors")), {
          data: {
            location: location,
            browser: browser,
          }
        })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
        send = true;
      }

    }
  }, [location, browser]);

  return <>
    <Head>
      <title>Paa-Kofi Aidoo</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

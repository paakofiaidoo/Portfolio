import '../styles/globals.css'
import '../styles/Normalizer.css'
import '../styles/index.scss'
import axios from "axios";
import { useState, useEffect } from 'react';
import { detect } from 'detect-browser';
import { getStrapiURL } from './api';
import Head from 'next/head'
import 'firebase/analytics'
import { analytics, logEventFun } from '../src/firebase'


let send = false

function MyApp({ Component, pageProps }) {
  //get user ip address
  const [ip, setIp] = useState('');
  const [browser, setBrowser] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    logEventFun('opened');
    analytics
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
      if (location && browser && !send && location.org !== "AMAZON-02") {
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

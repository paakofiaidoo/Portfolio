import '../styles/globals.css'
import '../styles/Normalizer.css'
import '../styles/index.scss'
import axios from "axios";
import { useState, useEffect } from 'react';
import { detect } from 'detect-browser';
import { getStrapiURL } from './api';

function MyApp({ Component, pageProps }) {
  //get user ip address
  const [ip, setIp] = useState('');
  const [browser, setBrowser] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const browser = detect();
    setBrowser(browser);
    axios.get('https://api.ipify.org?format=json')
      .then(res => {
        setIp(res.data.ip);
        console.log(res.data.ip);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('https://ipapi.co/' + ip + '/json/')
      .then(res => {
        setLocation(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [ip]);

  useEffect(() => {
    console.log("run", getStrapiURL("/visitors"), process.env.REST_URL);

    if (process.env.NODE_ENV !== 'development') {
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

    }
  }, [location, browser]);


  return <Component {...pageProps} />
}

export default MyApp

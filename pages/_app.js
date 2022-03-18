import Head from 'next/head'
import '../styles/globals.css'
import React, { Component, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* you can add metadata here, for all pages */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  )
    
}

  useEffect(() => {
    window.location.href = "https://google.com/about";
  }, []);

  return (
    <div>
      <h1>This page is not available</h1>
      <p>You are redirecting to google.com/about</p>
    </div>
  );


export default MyApp

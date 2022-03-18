import Head from 'next/head'
import '../styles/globals.css'

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

export async function getServerSideProps(context) {
  const res = await fetch(`https://.../data`)
  const data = await res.json()
  // or use context.resolvedUrl for conditional redirect
  // if(context.resolvedUrl == "/")
  if (!data) {
    return {
      redirect: {
        destination: 'http://positivityminds.com/',
        permanent: true,
      },
    }
  }

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default MyApp

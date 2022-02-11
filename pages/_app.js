import Head from "next/head";
import './styles/style.scss'


function MyApp({ Component, pageProps}) {
  return (
    <div>
      <Head>
        <title>Jobs Next.js</title>
        <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700,900"
            rel="stylesheet"
          />
      </Head>
      <main className="">
        <Component {...pageProps} />
      </main>
    </div>
  );
}



export default MyApp;

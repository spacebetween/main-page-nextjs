import { v4 as uuidv4 } from "uuid";
import App from "next/app";
import Head from "next/head";

import './styles/style.scss'
function MyApp({ Component, pageProps }) {
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

MyApp.getInitialProps = async (appContext) => {

  const appProps = await App.getInitialProps(appContext);
    const token = uuidv4();
  return { ...appProps, token };
};

export default MyApp;

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import "../styles/globals.css";

interface IPropMyApp {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: IPropMyApp) {
  return <Component {...pageProps} />;
}

export default MyApp;

import { ToastContainer } from "react-toastify";
import NextProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../states";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <NextProgress />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

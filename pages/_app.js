import { ToastContainer } from "react-toastify";
import NextProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../states";
import "react-toastify/dist/ReactToastify.css";
import DefaultLoading from "../components/shared/DefaultLoading";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <DefaultLoading />
        <NextProgress />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;

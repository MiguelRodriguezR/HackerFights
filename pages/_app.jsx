import "../styles/globals.css";
import firebase, { FirebaseContext } from "../firebase";
import useAuth from "../hooks/useAuth";
import Head from "next/head";


function MyApp({ Component, pageProps }) {

  const user = useAuth();
  console.log(user);
  return (
    <FirebaseContext.Provider
      value={{
        user,
        firebase,
      }}
    >
      <Head>
        <title>Hacker Fights</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;

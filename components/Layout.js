import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";
import NavBarSimple from "./NavBarSimple";

import "./Layout.scss";
import "./index.scss";

import navButtons from "../config/buttons";

const Layout = props => {
  const appTitle = `> WHATABYTE`;

  return (
    <div className="Layout">
      <Head>
        <title>WHATABYTE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <div id="outer-container" className="Content">
        <main id="page-wrap">

        
        {props.children}
        </main>
        </div>
      <NavBarSimple/>  
    </div>
  );
};

export default Layout;
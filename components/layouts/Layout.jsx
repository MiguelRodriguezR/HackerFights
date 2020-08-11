import React from "react";
import LeftMenu from "./LeftMenu";
import TopMenu from "./TopMenu";

const Layout = (props) => {
  return (
    <>
      <LeftMenu></LeftMenu>
      <TopMenu></TopMenu>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

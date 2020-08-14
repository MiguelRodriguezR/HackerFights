import React from "react";
import LeftMenu from "./LeftMenu";
import TopMenu from "./TopMenu";
import styled from "@emotion/styled";

const Container = styled.div`
  margin-left: 70px;
  margin-top: 80px;
  /* width: 100%; */
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  main {
    width: 100%;
    max-width: 1400px;
  }
`;

const Layout = (props) => {
  return (
    <Container>
      <LeftMenu></LeftMenu>
      <TopMenu></TopMenu>
      <main>{props.children}</main>
    </Container>
  );
};

export default Layout;

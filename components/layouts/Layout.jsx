import React from "react";
import LeftMenu from "./LeftMenu";
import TopMenu from "./TopMenu";
import styled from "@emotion/styled";


const Container = styled.div`
  margin-left: 80px;
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

import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #222222;
  padding: 9px;
  padding-top: 12px;
  width: 40px;
  position: fixed;
  overflow: hidden;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.2s ease-in-out;

  &:hover {
    width: 150px;
  }
`;

const Option = styled.div`
  margin-bottom: 15px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  .icon {
    color: #c3c3c3;
    width: 40px;
    display: flex;
    justify-content: center;
    .material-icons {
      font-size: 2em;
    }
    img {
      width: 40px;
    }
  }
  .text {
    color: #c3c3c3;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const LeftMenu = () => {
  return (
    <Container>
      <Option>
        <div className="icon">
          <img className="logo" src="/static/img/singleLogo.png" alt="" />
        </div>
        <div className="text">Home</div>
      </Option>
      <Option>
        <div className="icon">
          <i className="material-icons">settings_ethernet</i>
        </div>
        <div className="text">Kata</div>
      </Option>
    </Container>
  );
};

export default LeftMenu;

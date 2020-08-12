import React from "react";
import styled from "@emotion/styled";
import firebase from "../../firebase";
import Router from "next/router";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  .view {
    padding: 13px;
    display: flex;
    align-items: center;
    div {
      margin-right: 13px;
    }

    .photo {
      img {
        width: 35px;
      }
    }
  }

  .menu {
    margin-top: 5px;
    font-size: 0.9em;
    display: none;
    .element {
      padding: 13px;
      cursor: pointer;
      border-top: solid 1px gray;
      padding: 8px;
      display: flex;
      .icon {
        .material-icons {
          font-size: 1.3em;
        }
      }
      .text {
        margin-left: 5px;
      }
    }
  }

  &:hover {
    background-color: #282828;

    .menu {
      display: block;
    }
  }
`;

const TopMenu = () => {
  const logout = async () => {
    await firebase.logout();
    Router.push("/login");
  };

  return (
    <>
      <Container>
        <div className="view">
          <div className="photo">
            <img className="logo" src="/static/img/default-avatar.png" alt="" />
          </div>
          <div className="rank">rank</div>
          <div className="honor">52</div>
        </div>
        <div className="menu">
          <div className="element">
            <div className="icon">
              <i className="material-icons">power_settings_new</i>
            </div>
            <div className="text" onClick={logout}>
              Log Out
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TopMenu;

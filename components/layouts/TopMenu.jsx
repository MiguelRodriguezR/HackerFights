import React from "react";
import styled from "@emotion/styled";
import firebase from "../../firebase";
import Router from "next/router";
import useUserInfo from "../../hooks/useUserInfo";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  .view {
    padding: 13px;
    display: flex;
    align-items: center;
    div {
      margin-right: 15px;
    }

    .photo {
      img {
        width: 35px;
      }
    }

    .rank {
      font-size: 0.8em;
      padding: 5px;
      color: orange;
      border-top: solid 2px orange;
      border-bottom: solid 2px orange;
      background-color: #181919;
      z-index: 3;
      transform: scale(0.8, 0.8);

      &:before,
      &:after {
        content: " ";
        border-top: 2px solid orange;
        border-right: 2px solid orange;
        display: inline-block;
        position: absolute;
        height: 16px;
        width: 13px;
        background-color: #181919;
        z-index: -1;
      }

      &:before {
        transform: rotate(210deg) skewY(20deg);
        margin-left: -13px;
        margin-top: -1px;
      }

      &:after {
        transform: rotate(34deg) skewY(20deg);
        margin-left: -1px;
        margin-top: -1px;
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

  const {userInfo} = useUserInfo();

  const logout = async () => {
    await firebase.logout();
    Router.push("/login");
  };

  return (
    <>
      <Container>
        <div className="view">
          <div className="photo">
            <img className="logo" src={ userInfo.urlAvatar ? userInfo.urlAvatar : "/static/img/default-avatar.png"} alt="" />
          </div>
          <div className="rank">{userInfo.rank} rim</div>
          <div className="honor">{userInfo.honor}</div>
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

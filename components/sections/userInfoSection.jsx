import React from "react";
import useUserInfo from "../../hooks/useUserInfo";
import styled from "@emotion/styled";

const Container = styled.div`
    width: 100%;
    padding: 10px;
    background-color:#1D1D1F;
    display: flex;
    .left{
        width: 80px;
        img{

            width: 80px;
            height: 80px;
        }
    }

    .right{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        .top{
            padding: 7px;
            padding-left: 20px;
            padding-right: 20px;
            background-color: #303133;
            .username{
                font-size: 1.3rem;
                font-weight: 500;
            }
        }

        .info-container{
            margin-top: 6px;
            .info{
                margin-bottom: 4px;
                display: flex;
                .title{
                    color: #B0B0B0;
                    margin-right: 5px;
                }
            }
        }
    }
`;

const UserInfoSection = () => {
  const { userInfo } = useUserInfo();
  const created = new Date(userInfo.created)  

  return (
    <Container>
      <div className="left">
          <img src={userInfo.urlAvatar ? userInfo.urlAvatar : "/static/img/default-avatar.png"} alt=""/>
      </div>
      <div className="right">
        <div className="top">
          <div className="username">{userInfo.name}</div>
        </div>
        <div className="info-container">
          <div className="info">
            <div className="title">Rank: </div>
            <div className="desc">{userInfo.rank}</div>
          </div>
          <div className="info">
            <div className="title">Honor: </div>
            <div className="desc">{userInfo.honor}</div>
          </div>
          <div className="info">
            <div className="title">Member Since: </div>
            <div className="desc">{created.toLocaleDateString()}</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserInfoSection;

import React from "react";
import useKatas from "../../hooks/useKatas";
import styled from "@emotion/styled";
import Rank from "../fragments/rank";

const Container = styled.div`
  margin-bottom: 10px;
  padding: 18px;
  background-color: #262729;
  border-radius: 8px;
  .content {
    display: flex;
    justify-content: space-between;
    .left {
      .title {
        display: flex;
        .text {
          margin-left: 20px;
          font-size: 1.3em;
        }
      }
    }
    .right {
      width: 20%;
      display: flex;
      justify-content: flex-end;
      img {
        width: 60px;
        margin-left: 10px;
      }
    }
  }
`;

const KataListSection = () => {
  const { katas } = useKatas();

  console.log({ katas });

  return (
    <>
      {katas.map((kata) => (
        <Container>
          <div className="content">
            <div className="left">
              <div className="title">
                <Rank rank={kata.rank}></Rank>
                <div className="text">{kata.title}</div>
              </div>
            </div>
            <div className="right">
              {kata.languages.map((language) => (
                <img
                  className="logo"
                  src={`/static/img/${language}.png`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </Container>
      ))}
    </>
  );
};

export default KataListSection;

import React from "react";
import useKatas from "../../hooks/useKatas";
import styled from "@emotion/styled";
import Rank from "../fragments/rank";
import Link from "next/link";

const Container = styled.div`
  margin-bottom: 10px;
  padding: 18px;
  background-color: #262729;
  border-radius: 8px;
  transition: all 0.2s ease-in;
  cursor: pointer;
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

  &:hover{
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  }
`;

const KataListSection = () => {
  const { katas } = useKatas();

  return (
    <>
      {katas.map((kata) => (
        <Link key={kata.id} href="/description/[id]" as={`/description/${kata.id}`}>
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
                  key={language}
                  className="logo"
                  src={`/static/img/${language}.png`}
                  alt=""
                />
              ))}
            </div>
          </div>
        </Container>
        </Link>
      ))}
    </>
  );
};

export default KataListSection;

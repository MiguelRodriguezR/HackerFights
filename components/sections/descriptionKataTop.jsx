import React from "react";
import styled from "@emotion/styled";
import Rank from "../fragments/rank";
import Router from "next/router";
import Link from "next/link";

const Container = styled.div`
  margin-bottom: 10px;
  padding: 18px;
  background-color: #262729;
  transition: all 0.2s ease-in;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      .title {
        display: flex;
        .text {
          margin-left: 20px;
          font-size: 1.3em;
        }
      }
    }
    .center {
      select {
        cursor: pointer;
        padding: 15px;
        color: white;
        background-color: #222325;
        border: none;

        option {
          padding: 15px;
          background-color: #151616;
          color: white;
        }

        &:hover {
          background-color: #1e1f21;
        }
      }
    }
    .actions {
      .train {
        border: solid 1px #6795de;
        border-radius: 3px;
        color: #6795de;
        background-color: #1e1f21;
        display: flex;
        align-items: center;
        padding: 8px;
        cursor: pointer;
        transition: all 0.2s ease-out;
        font-size: 0.7em;
        font-weight: 300;

        i {
          font-size: 1.5em;
          margin-right: 5px;
        }

        &:hover {
          border-color: #91b2e7;
          color: #91b2e7;
          background-color: #0b0c0c;
        }
      }
    }
  }
`;

const DescriptionKataTop = ({ kata }) => {
  if (!kata.languages) return <h3>Loading...</h3>;
  return (
    <Container>
      <div className="content">
        <div className="left">
          <div className="title">
            <Rank rank={kata.rank}></Rank>
            <div className="text">{kata.title}</div>
          </div>
        </div>
        <div className="center">
          <select name="" id="">
            {kata.languages.map((language) => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>
        <div className="actions">
          <Link key={kata.id} href="/train/[id]" as={`/train/${kata.id}`}>  
            <button className="train">
              <i className="material-icons">play_arrow</i> TRAIN
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default DescriptionKataTop;

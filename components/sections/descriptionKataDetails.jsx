import React from "react";
import styled from "@emotion/styled";
import Parser from "html-react-parser";

const Container = styled.div`
  margin-bottom: 10px;
  padding: 18px;
  background-color: #262729;
  transition: all 0.2s ease-in;
  .details {
    color: #efefe3;
    line-height: 1.6;
    pre {
      background-color: #171719;
      padding: 10px;
      border-radius: 4px;
      overflow-x: scroll;
      code {
        display: block;
        white-space: pre-wrap;
      }
    }
  }
`;

const Selector = styled.div`
  color: #c0c0c0;
  margin-bottom: 10px;
  font-weight: bold;
  text-decoration: underline;
`;

const DescriptionKataDetails = ({ kata }) => {
  if (!kata.details) return <h3>Loading...</h3>;
  return (
    <>
      <Selector>Details</Selector>
      <Container>
        <div className="details">{Parser(kata.details)}</div>
      </Container>
    </>
  );
};

export default DescriptionKataDetails;

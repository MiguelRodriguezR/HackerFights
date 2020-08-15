import React from "react";
import styled from "@emotion/styled";
import ranksHelper from "../../helpers/ranksHelper";

const RankStyle = styled.div`
  font-size: 0.8em;
  padding: 5px;
  color: ${(props) => (props.color ? props.color : "white")};
  border-top: solid 2px ${(props) => (props.color ? props.color : "white")};
  border-bottom: solid 2px ${(props) => (props.color ? props.color : "white")};
  background-color: #181919;
  transform: scale(0.8, 0.8);
  width: 40px;

  &:before,
  &:after {
    content: " ";
    border-top: 2px solid ${(props) => (props.color ? props.color : "white")};
    border-right: 2px solid ${(props) => (props.color ? props.color : "white")};
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
`;

const Rank = ({ rank }) => {
  const rankHelper = ranksHelper;
  rank = rank ? rank : "1";
  return (
    <RankStyle
      color={rankHelper.find((r) => Number(r.rank) === Number(rank)).color}
    >
      {rank} rim
    </RankStyle>
  );
};

export default Rank;

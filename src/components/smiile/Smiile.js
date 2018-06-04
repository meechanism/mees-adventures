import React from "react";
import styled from "styled-components";

const SmiileDate = styled.span`
  font-size: 8px;
  color: #fff;
`;

const SmiileFeel = styled.span`
  font-weight: bold;
  color: #fff;
  display: block;
  margin-top: 0.5rem;
`;

const StyledSmiile = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 2px;
  border-radius: 2px;
  text-align: center;
  background: ${props => getFeelColor(props.feel)};
`;

const getFeelColor = feel => {
  let color = "#000000";
  switch (feel) {
    case ":(":
      color = "#e56567";
      break;
    case ":)":
      color = "#609217";
      break;
  }
  return color;
};

const Smiile = ({ date, feel, tags }) => {
  return (
    <StyledSmiile feel={feel}>
      <SmiileDate>{date}</SmiileDate>
      <SmiileFeel>{feel}</SmiileFeel>
    </StyledSmiile>
  );
};

export default Smiile;

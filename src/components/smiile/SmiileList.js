import React from "react";
import styled from "styled-components";
import SmiileData from "../../data/smiile.json";
import Smiile from "./Smiile";

const SmiileList = styled.div`
  margin: 1rem;
`;

export default () => {
  return (
    <SmiileList>
      {Object.entries(SmiileData).map(([key, value]) => {
        return <Smiile key={key} date={key} {...value} />;
      })}
    </SmiileList>
  );
};

import React from "react";
import styled from "styled-components";

export const TopMenuList: React.FC = ({ children }) => {
  return <StyledTopMenuList>{children}</StyledTopMenuList>;
};

const StyledTopMenuList = styled.ul`
  color: rgba(255, 255, 255, 0.88);
  letter-spacing: -0.4px;
  display: block;
  margin-right: 24px;

  .on {
    color: #fff;
    font-weight: 500;
  }

  li {
    margin-left: 24px;
    list-style-type: none;
    float: left;
  }

  li:hover {
    color: #fff;
    font-weight: 500;
    cursor: pointer;
  }
`;

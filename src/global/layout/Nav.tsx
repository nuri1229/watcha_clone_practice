import React from "react";
import styled from "styled-components";

export const Nav: React.FC = ({ children }) => {
  return <StyledNav>{children}</StyledNav>;
};

export const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
  z-index: 500;
  font-size: 14px;
  letter-spacing: -0.4px;
  width: 100%;
  height: 72px;
  padding: 0px 4%;
  border: 1px solid red;
  box-sizing: border-box;
`;

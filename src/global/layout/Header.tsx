import React from "react";
import styled from "styled-components";

export const Header: React.FC = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export const StyledHeader = styled.header`
  width: 100%;
`;

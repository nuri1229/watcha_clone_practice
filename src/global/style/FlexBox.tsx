import React from "react";
import styled from "styled-components";

interface FlexBoxProps {
  justifyContent: string;
}

export const FlexBox: React.FC<FlexBoxProps> = ({ children, justifyContent }) => {
  return <StyledFlexBox justifyContent={justifyContent}>{children}</StyledFlexBox>;
};

const StyledFlexBox = styled.div<FlexBoxProps>`
  display: flex;

  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  height: inherit;
`;

import React from "react";
import styled from "styled-components";
import img_jumbotron from "asset/images/jumbotron_image.jpg";
import img_me_before_you from "asset/images/me_before_you.png";
import { FlexBox } from "global/style";
import { Slider } from "global/hoc";

export const JumboTron: React.FC = () => {
  return (
    <StyledJumboTron>
      <StyledArrowBox direction={"right"} left={"0"}>
        {"<"}
      </StyledArrowBox>
      <FlexBox justifyContent={"space-between"}>
        <div className="text_wrapper">
          <img src={img_me_before_you} />
          <h2>
            '어바웃 타임'을 잇는
            <br />올 연말의 로맨스
          </h2>
        </div>
      </FlexBox>
      <StyledArrowBox direction={"left"} left={"calc(100% - 4%)"}>
        {">"}
      </StyledArrowBox>
    </StyledJumboTron>
  );
};

const StyledJumboTron = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-image: url(${img_jumbotron});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 543.33px;
  opacity: 0.9;

  .text_wrapper {
    /* position: absolute; */
    width: 30%;
    /* top: 25%; */
    padding: 0 4%;

    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
      opacity: 1;
      object-fit: cover;
    }

    h2 {
      color: #ffffff;
      white-space: pre-wrap;
      min-width: 35.15625vw;
      margin-top: 0.8593750000000001vw;
      font-size: 1.328125vw;
      font-weight: 400;

      letter-spacing: -0.0234375vw;
      line-height: 1.875vw;
    }
  }

  .jumbotron_arrow {
    position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4%;
    color: #ffffff;
    cursor: pointer;
    left: 0;
    top: 0;
    height: inherit;

    /* background-image: -webkit-gradient(linear, left right, from(rgba(25, 25, 25, 0)), to(rgba(80, 80, 80, 0.2)), color-stop(0.5, #333333)); */
    background-image: linear-gradient(to right, rgba(25, 25, 25, 1), rgba(255, 255, 255, 0));
  }
`;

interface ArrowBoxPropx {
  direction: string;
  left: string;
}
const StyledArrowBox = styled.div<ArrowBoxPropx>`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4%;
  color: #ffffff;
  cursor: pointer;
  left: ${(props) => props.left};
  top: 0;
  height: inherit;

  /* background-image: -webkit-gradient(linear, left right, from(rgba(25, 25, 25, 0)), to(rgba(80, 80, 80, 0.2)), color-stop(0.5, #333333)); */
  background-image: ${(props) =>
    props.direction === "right" ? "linear-gradient(to right, rgba(25, 25, 25, 1), rgba(255, 255, 255, 0))" : "linear-gradient(to left, rgba(25, 25, 25, 1), rgba(255, 255, 255, 0))"};
`;

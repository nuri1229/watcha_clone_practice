import React, { useRef } from "react";
import styled from "styled-components";
import img_jumbotron from "asset/images/jumbotron_image.jpg";
import harry_potter from "asset/images/harry_potter.jpg";
import img_me_before_you from "asset/images/me_before_you.png";
import harry_potter_title from "asset/images/harry_potter_title.png";
import { FlexBox } from "global/style";
import Slider from "react-slick";
import { HocSlider } from "global/hoc";

const ArrowBox: React.FC<{ onClickHandler: () => void; direction: "prev" | "next" }> = ({ onClickHandler, direction }) => {
  return (
    <StyledArrowBox direction={direction} onClick={onClickHandler}>
      <div>{direction === "prev" ? "<" : ">"}</div>
    </StyledArrowBox>
  );
};

export const JumboTron: React.FC = () => {
  // eslint-disable-next-line prefer-const
  let ref: Slider | null = null;

  return (
    <HocSlider PrevArrow={ArrowBox} NextArrow={ArrowBox} ref={ref}>
      <StyledJumboTron backgroundImageUrl={harry_potter}>
        <FlexBox justifyContent={"space-between"}>
          <div className="text_wrapper">
            <img src={harry_potter_title} />
            <h2>
              호그와트행 열차가 출발합니다.
              <br />
              왓챠 & 귤을 준비하세요
            </h2>
          </div>
        </FlexBox>
      </StyledJumboTron>
      <StyledJumboTron backgroundImageUrl={img_jumbotron}>
        <FlexBox justifyContent={"space-between"}>
          <div className="text_wrapper">
            <img src={img_me_before_you} />
            <h2>
              '어바웃 타임'을 잇는
              <br />올 연말의 로맨스
            </h2>
          </div>
        </FlexBox>
      </StyledJumboTron>
    </HocSlider>
  );
};

interface StyledJumboTronProps {
  backgroundImageUrl: string;
}

const StyledJumboTron = styled.div<StyledJumboTronProps>`
  width: 100%;
  box-sizing: border-box;
  background-image: url(${(props) => props.backgroundImageUrl});
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

interface StyledArrowBoxProps {
  direction: "prev" | "next";
}

const StyledArrowBox = styled.div<StyledArrowBoxProps>`
  box-sizing: border-box;
  width: 4%;

  height: 100%;
  z-index: 1;

  div {
    height: 100%;
    box-sizing: border-box;
    width: 4%;
    color: #ffffff;
    cursor: pointer;
    position: absolute;
    top: 0;
    ${(props) => (props.direction === "prev" ? "left: 0;" : "right:0;")}
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${(props) =>
      props.direction === "prev" ? "linear-gradient(to right, rgba(25, 25, 25, 1), rgba(255, 255, 255, 0));" : "linear-gradient(to left, rgba(25, 25, 25, 1), rgba(255, 255, 255, 0));"};
  }
`;

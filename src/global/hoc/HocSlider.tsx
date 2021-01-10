import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";

interface HocSliderProps {
  PrevArrow: React.FC<{ onClickHandler: () => void; direction: "prev" | "next" }>;
  NextArrow: React.FC<{ onClickHandler: () => void; direction: "prev" | "next" }>;
  ref: Slider | null;
}

export const HocSlider: React.FC<HocSliderProps> = ({ PrevArrow, NextArrow, children, ref }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow onClickHandler={() => ref?.slickPrev()} direction={"prev"} />,
    nextArrow: <NextArrow onClickHandler={() => ref?.slickNext()} direction={"next"} />,
  };

  return (
    <Slider ref={(e) => (ref = e)} {...settings}>
      {children}
    </Slider>
  );
};

export function HocSliderButtonProps(component: JSX.Element, direction: "prev" | "next", ref: Slider | null): JSX.Element {
  console.log(component);

  const onClickHandler = () => {
    if (direction === "prev") ref?.slickPrev();
    else ref?.slickNext();
  };

  return <StyledTest onClick={onClickHandler}>{component}</StyledTest>;
}

const StyledTest = styled.div`
  border: 1px solid red;
`;

interface StyledSliderProps {
  viewIndex: number;
}

export const StyledSlider = styled.div<StyledSliderProps>`
  white-space: nowrap;
  box-sizing: border-box;

  position: relative;
  width: 100%;
  overflow-x: hidden;

  .wrapper {
    position: relative;
    width: 100%;
    height: 543.33px;
    margin: auto;
  }

  .sliders {
    width: 100%;
    height: 543.33px;
    position: absolute;

    transition: 0.2s;

    transform: translate(-100%, 0);

    &.active {
      transform: translate(0, 0);

      & ~ .sliders {
        transform: translate(100%, 0);
      }
    }
  }
`;

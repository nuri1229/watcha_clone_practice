import React, { useState } from "react";
import styled from "styled-components";

const array = ["sliders1", "sliders2"];

export const Slider: React.FC = ({ children }) => {
  const initValue: {
    viewIndex: number;
    sliders: string[];
  } = {
    viewIndex: 1,
    sliders: [...array.slice(array.length - 1), ...array.slice(0, array.length - 1)],
  };
  const [sliderState, setSliderSate] = useState<typeof initValue>(initValue);
  const { viewIndex, sliders } = sliderState;

  return (
    <>
      <div>
        <span>test</span>
      </div>
      <div
        onClick={() => {
          const sliders = document.querySelectorAll(".sliders");
          const first = sliders[0];
          const last = sliders[sliders.length - 1];
          const wrapper = document.querySelector(".wrapper");
          wrapper?.removeChild(last);
          wrapper?.insertBefore(last, first);

          const active = document.querySelector(".active");
          console.log("active", active);
          active?.classList.remove("active");
          if (active?.previousSibling) (active?.previousSibling as Element).classList.add("active");
          else document.querySelectorAll(".sliders")[0].classList.add("active");
        }}>
        이전
      </div>
      <div
        onClick={() => {
          const sliders = document.querySelectorAll(".sliders");
          const first = sliders[0];
          const wrapper = document.querySelector(".wrapper");
          wrapper?.removeChild(first);
          wrapper?.appendChild(first);

          const active = document.querySelector(".active");
          console.log("active", active);
          active?.classList.remove("active");

          if (active?.nextSibling) (active?.nextSibling as Element).classList.add("active");
          else (document.querySelectorAll(".sliders")[document.querySelectorAll(".sliders").length - 1] as Element).classList.add("active");
        }}>
        다음
      </div>
      <StyledSlider viewIndex={viewIndex}>
        <div className="wrapper">
          {sliders.map((e, index) => {
            return <div key={`${e}${index}`} className={`sliders ${e} ${index === 1 ? "active" : ""}`} />;
          })}
        </div>
        {/* <div className="wrapper">
          <div className="slider" />
        </div> */}
      </StyledSlider>
    </>
  );
};

interface StyledSliderProps {
  viewIndex: number;
}

export const StyledSlider = styled.div<StyledSliderProps>`
  white-space: nowrap;
  box-sizing: border-box;
  border: 2px solid red;

  position: relative;
  width: 100%;
  overflow-x: hidden;

  .wrapper {
    position: relative;
    width: 100%;
    min-height: 300px;
    margin: auto;
  }

  .sliders {
    width: 100%;
    height: 300px;
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

  .sliders1 {
    background: red;
  }

  .sliders2 {
    background: blue;
  }

  .sliders3 {
    background: orange;
  }

  .sliders4 {
    background: white;
  }

  .sliders5 {
    background: purple;
  }
`;

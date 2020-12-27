import React, { useState } from "react";
import styled from "styled-components";

const array = ["sliders1", "sliders2", "sliders3"];

export const Slider: React.FC = ({ children }) => {
  const initValue: {
    viewIndex: number;
    middleArray: string[];
    leftArray: string[];
    rightArray: string[];
  } = {
    viewIndex: 0,
    middleArray: [...array],
    leftArray: [],
    rightArray: [],
  };
  const [sliderState, setSliderSate] = useState<typeof initValue>(initValue);
  const { viewIndex, leftArray, middleArray, rightArray } = sliderState;

  return (
    <>
      <div>
        <span>test</span>
      </div>
      <div
        onClick={() => {
          if (viewIndex === 0) {
            setSliderSate({
              ...sliderState,
              viewIndex: middleArray.length - 1,
              middleArray: [...array, ...middleArray],
            });
            return;
          }

          // if (viewIndex === array.length) {
          //   setSliderSate({
          //     viewIndex: array.length - 1,
          //     newArray: [...array, ...newArray],
          //   });
          //   return;
          // }
          setSliderSate({ ...sliderState, viewIndex: viewIndex - 1 });
        }}>
        이전
      </div>
      <div
        onClick={() => {
          if (viewIndex === array.length - 1) {
            setSliderSate({
              ...sliderState,
              leftArray: [],
              viewIndex: viewIndex + 1,
              middleArray: [...middleArray, ...array],
            });
            return;
          }
          setSliderSate({ ...sliderState, viewIndex: viewIndex + 1 });
        }}>
        다음
      </div>
      <StyledSlider viewIndex={viewIndex}>
        <div className="wrapper">
          {/* <div className={`sliders sliders1 active`} />
          <div className={`sliders sliders2`} />
          <div className={`sliders sliders3`} /> */}
          {middleArray.map((e, index) => {
            return <div key={`${e}${index}`} className={`sliders ${e} `} />;
          })}
        </div>
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

  .wrapper {
    width: 100%;
    position: absolute;
    /* left: ${(props) => -1 * (props.viewIndex * 100)}%; */
    top: 0;
    /* transition: left 1s; */

    /* animation-duration: 1s;
    animation-name: slidein;
    animation-fill-mode: both;
    animation-play-state: running;*/
  }

  .dummy {
    display: inline-block;
    width: 100%;
    transition: all 1s;
    margin-right: ${(props) => -1 * (props.viewIndex * 100)}%;
  }

  .wrapper:after {
    transform: rotateZ(180deg);
  }

  .margin_controller {
    margin-left: -${(props) => props.viewIndex * 100}%;
  }

  .animation {
    /* animation-duration: 1s;
    animation-name: slidein; */
  }

  @keyframes slidein {
    from {
      left: ${(props) => -1 * ((props.viewIndex + 1) * 100)}%;
    }

    to {
      left: ${(props) => -1 * (props.viewIndex * 100)}%;
    }
  }

  @keyframes slidein {
    from {
      left: ${(props) => -1 * (props.viewIndex - 1 * 100)}%;
    }

    to {
      left: ${(props) => -1 * (props.viewIndex * 100)}%;
    }
  }

  /* @keyframes slidein {
    from {
      left: -100%;
    }

    to {
      left: 0%;
    }
  } */

  .sliders {
    width: 100%;
    height: 200px;
    border: 1px solid #fff;
    box-sizing: border-box;
    /* animation-duration: 1s;
    animation-name: slidein; */
    display: inline-block;
    left: ${(props) => -1 * (props.viewIndex * 100)}%;
    position: relative;
    transition: all 0.2s ease-out;
    /* transition-delay: 1s; */

    /* transform: translate(0, 0);

    &.active {
      transform: translate(0, 0);

      & ~ .slide {
        transform: translate(100%, 0);
      }
    } */
  }

  .run {
    animation-name: slidein;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }

  .out {
    animation-name: slideout;
    animation-duration: 0.3s;
    animation-fill-mode: both;
  }

  .stop {
    animation-play-state: paused;
  }

  .shifting {
    /* animation-name: slidein;
    animation-duration: 0.2s; */
    /* animation-fill-mode: both; */
    /* animation-direction: reverse;*/
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

import React from "react";
import { JumboTron } from "main/component/organisms";
import Slider from "react-slick";
import styled from "styled-components";

export const MainPage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <JumboTron />
      <StyledDiv>
        <div className="container">
          <Slider {...settings}>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
            <div>
              <img src="http://placekitten.com/g/400/200" />
            </div>
          </Slider>
        </div>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  .container {
    padding: 40px;
    /* background: #419be0; */
  }

  .slick-slide img {
    margin: auto;
  }
`;

import React from "react";
import { JumboTron } from "main/component/organisms";
import { Slider } from "global/hoc";

export const MainPage: React.FC = () => {
  return (
    <>
      <JumboTron />
      <Slider />
    </>
  );
};

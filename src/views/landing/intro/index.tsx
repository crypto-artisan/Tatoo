import React from "react";

import { IntroTitle, IntroWrapper } from "./intro.styled";

import introImg from "assets/image/common/intro.png";

const IntroPart = () => {
  return (
    <IntroWrapper>
      <IntroTitle>
        <p className="white">the great year</p>
        <p className="gradient">is on the horizon</p>
      </IntroTitle>
      <img src={introImg} alt="introImg" />
    </IntroWrapper>
  );
};

export default IntroPart;

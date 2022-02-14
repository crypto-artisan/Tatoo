import { Container } from "components";
import React from "react";
import { IntroPart } from "views/landing";
import { LandingWrapper } from "./landing.styled";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <Container>
        <IntroPart />
      </Container>
    </LandingWrapper>
  );
};

export default LandingPage;

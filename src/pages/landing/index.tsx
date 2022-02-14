import { Container } from "components";
import React from "react";
import { IntroPart, RoadMapPart, TeamsPart } from "views/landing";
import { LandingWrapper } from "./landing.styled";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <Container>
        <IntroPart />
        <RoadMapPart />
        <TeamsPart />
      </Container>
    </LandingWrapper>
  );
};

export default LandingPage;

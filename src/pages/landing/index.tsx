import { Container } from "components";
import React from "react";
import {
  IntroPart,
  RoadMapPart,
  TeamsDescPart,
  TeamsPart,
} from "views/landing";
import { LandingWrapper } from "./landing.styled";

const LandingPage = () => {
  return (
    <LandingWrapper>
      <Container>
        <IntroPart />
        <RoadMapPart />
        <TeamsPart />
        <TeamsDescPart />
      </Container>
    </LandingWrapper>
  );
};

export default LandingPage;

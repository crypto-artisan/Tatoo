import { Container } from "components";
import React from "react";
import {
  CommunityPart,
  IntroPart,
  RoadMapPart,
  TeamsDescPart,
  TeamsPart,
} from "views/landing";
import { LandingWrapper } from "./landing.styled";

const LandingPage = () => {
  return (
    <LandingWrapper id="artists">
      <Container>
        <IntroPart />
        <RoadMapPart />
        <TeamsPart />
        <TeamsDescPart />
        <CommunityPart />
      </Container>
    </LandingWrapper>
  );
};

export default LandingPage;

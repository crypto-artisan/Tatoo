import React from "react";
import {
  DescContent,
  DescList,
  DescListItem,
  DescListTitle,
  LinkedInItem,
  MorganSection,
  TeamDescWrapper,
  TitleSection,
} from "./teamdesc.styled";

import { FiArrowDownRight } from "react-icons/fi";

import descImg from "assets/image/common/descImg.png";

const TeamsDescPart = () => {
  return (
    <TeamDescWrapper>
      <TitleSection>
        <p className="teamdesc-title">Our Amazing Team</p>
        <p className="teamdesc-desc">
          {
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget fames sit risus, in quis nulla a. Felis neque aliquam quam eu. Netus est metus quis viverra integer convallis convallis in. Viverra ipsum integer aliquet faucibus. Ac urna et diam."
          }
        </p>
      </TitleSection>
      <DescContent>
        <DescList>
          <DescListTitle>{"CEO & Founder, TatTech"}</DescListTitle>
          <DescListItem>Lorem ipsum dolor sit risus</DescListItem>
          <DescListItem>Lorem ipsum dolor sit</DescListItem>
          <DescListItem>Lorem ipsum dolor</DescListItem>
          <LinkedInItem>
            Linkedin <FiArrowDownRight />
          </LinkedInItem>
        </DescList>
        <img src={descImg} alt="" />
      </DescContent>
      <MorganSection>
        <h3>Mike Morgan</h3>
        <p>
          {
            "Tat Tech / TattooAwards.com is a two-sided SaaS platform for the tattoo industry, one that allows tattoo artists to both drive their current business using Tat Tech's platform as a website and booking engine, as well as monetize their creativity through sharing in sales of merchandise, participate in service offerings, credit card processing, education, and more."
          }
        </p>
      </MorganSection>
    </TeamDescWrapper>
  );
};

export default TeamsDescPart;

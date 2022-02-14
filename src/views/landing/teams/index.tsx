import React from "react";
import {
  MemberCardWrapper,
  MemberImgWrapper,
  MemberInfo,
  MemberSection,
  TeamsDesc,
  TeamsIntroSection,
  TeamsTitles,
  TeamsWrapper,
} from "./teams.styled";

import mem1 from "assets/image/team/mem1.png";
import mem2 from "assets/image/team/mem2.png";
import mem3 from "assets/image/team/mem3.png";
import mem4 from "assets/image/team/mem4.png";
import mem5 from "assets/image/team/mem5.png";
import mem6 from "assets/image/team/mem6.png";

const MemberCard = (props: any) => {
  return (
    <MemberCardWrapper dir={props.dir}>
      <MemberImgWrapper align={props.align}>
        <img src={props.img} alt="mem1" />
      </MemberImgWrapper>
      <MemberInfo>
        <p className="mem-name">{props.name}</p>
        <p className="mem-role">{props.role}</p>
      </MemberInfo>
    </MemberCardWrapper>
  );
};

const TeamsPart = () => {
  return (
    <TeamsWrapper>
      <TeamsIntroSection>
        <TeamsTitles>
          <p className="teams-title">who are we?</p>
          <p className="teams-subtitle">creative teams</p>
        </TeamsTitles>
        <TeamsDesc>
          Art Universe is a company that brings together the best tattoo artists
          in the community to create one of a kind tattoos. The company has 9 of
          the most respected and talented tattoo artists, all with their own
          unique style. With over 12 collections coming out this year, Art
          Universe is sure to bring something for everyone's taste.
        </TeamsDesc>
      </TeamsIntroSection>
      <MemberSection>
        <MemberCard img={mem1} dir={1} name="Jesse Smith" role="co-leader" />
        <MemberCard
          img={mem2}
          dir={0}
          name="Megan Jean Morris"
          align="right"
          role="co-leader"
        />
        <MemberCard img={mem3} dir={1} name="Daris Pir" role="Tattoo Artist" />
        <MemberCard
          img={mem4}
          dir={1}
          align="left"
          name="yomico"
          role="co-leader"
        />
        <MemberCard img={mem5} dir={0} name="Stefano" role="co-leader" />
        <MemberCard img={mem6} dir={1} name="halo" role="Tattoo Artist" />
      </MemberSection>
    </TeamsWrapper>
  );
};

export default TeamsPart;

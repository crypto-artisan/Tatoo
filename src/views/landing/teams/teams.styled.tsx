import styled from "styled-components";

export const TeamsWrapper = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  ::before,
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 1.5px;
    background-image: linear-gradient(
      90deg,
      rgba(148, 26, 11, 0.2) 0%,
      #941a0b 21.14%,
      #bc3a08 78.8%,
      rgba(188, 58, 8, 0.515963) 89.06%,
      rgba(188, 58, 8, 0.2) 100%
    );

    width: 100%;
    left: 0;
  }
  ::before {
    top: 0;
  }
  ::after {
    bottom: 0;
  }
`;

export const TeamsIntroSection = styled.div`
  display: flex;
`;

export const TeamsTitles = styled.div`
  white-space: nowrap;
  font-family: GraublauWeb-bold;
  line-height: 74px;
  text-transform: capitalize;
  p {
    margin: 0;
  }
  .teams-title {
    color: #f4f4f4;
    font-size: 58px;
    -webkit-text-stroke: 1px #bc3a08;
  }
  .teams-subtitle {
    font-size: 62px;
    color: #f4f4f4;
  }
`;

export const TeamsDesc = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  font-family: Gilroy-Regular;
  color: #b8b8b8;
  padding-top: 10px;
  padding-left: 42px;
`;

export const MemberSection = styled.div`
  position: relative;
  display: grid;
  grid-column-gap: 30px;
  padding: 0 43px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 140px;
  ::before,
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    width: 1.5px;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      rgba(148, 26, 11, 0.2) 0%,
      #941a0b 21.14%,
      #bc3a08 78.8%,
      rgba(188, 58, 8, 0.515963) 89.06%,
      rgba(188, 58, 8, 0.2) 100%
    );
  }
  ::before {
    top: 0;
    left: 0;
  }
  ::after {
    top: 0;
    right: 0;
  }
`;

export const MemberCardWrapper = styled.div<{ dir?: number }>`
  ${({ dir }) => (dir === 1 ? "padding-top: 100px;" : "padding-bottom: 100px;")}
  transition: 0.7s all;
`;

export const MemberImgWrapper = styled.div<{ align?: string }>`
  background-color: #941a0b;
  text-align: ${({ align }) => (align ? align : "center")};
  img {
    vertical-align: bottom;
  }
`;

export const MemberInfo = styled.div`
  padding: 27px;
  text-align: center;
  text-transform: capitalize;
  color: #b8b8b8;

  p {
    margin: 0;
  }
  .mem-name {
    font-size: 26px;
    font-weight: 700;
    font-family: GraublauWeb;
    margin-bottom: 13px;
  }
  .mem-role {
    font-size: 16px;
    font-family: Gilroy-Regular;
  }
`;

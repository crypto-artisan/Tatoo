import styled from "styled-components";

export const TeamDescWrapper = styled.div`
  position: relative;
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 1.5px;
    width: 100%;
    background-image: linear-gradient(
      90deg,
      rgba(148, 26, 11, 0.2) 0%,
      #941a0b 21.14%,
      #bc3a08 78.8%,
      rgba(188, 58, 8, 0.515963) 89.06%,
      rgba(188, 58, 8, 0.2) 100%
    );
    bottom: 0;
    right: 0;
  }
  padding: 50px 0;
`;

export const TitleSection = styled.div`
  p {
    margin: 0;
  }
  text-align: center;
  .teamdesc-title {
    font-family: GraublauWeb-bold;
    font-weight: 500;
    font-size: 62px;
    line-height: 62px;
    text-transform: capitalize;
    margin-bottom: 32px;
    -webkit-text-stroke: 2px #bc3a08;
    color: transparent;
  }
  .teamdesc-desc {
    font-family: Gilroy-Regular;
    font-size: 16px;
    color: #b8b8b8;
    max-width: 638px;
    width: 100%;
    margin: auto;
  }
`;

export const DescContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  align-items: center;
  img {
    max-width: 360px;
    width: 100%;
  }
`;

export const DescList = styled.div``;

export const DescListTitle = styled.div`
  color: #bc3a08;
  font-family: GraublauWeb;
  margin-bottom: 30px;
`;

export const DescListItem = styled.div`
  font-size: 16px;
  font-family: Gilroy-Regular;
  display: flex;
  align-items: center;
  color: #f4f4f4;
  padding: 10px 0;
  :before {
    margin-right: 15px;

    content: "";
    width: 10px;
    height: 10px;
    background: #bc3a08;
    transform: rotate(45deg);
    left: 0;
    top: 0;
  }
`;

export const LinkedInItem = styled.a`
  position: relative;
  color: #f4f4f4;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-flex;
  padding-top: 20px;
  align-items: center;
  cursor: pointer;
  transition: 0.2s all;
  svg {
    margin-left: 5px;
  }
  :hover {
    color: #bc3a08;
    ::after {
      transform: scaleX(1);
    }
  }
  ::after {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 1.5px;
    background-color: #bc3a08;
    width: 100%;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
  }
`;

export const MorganSection = styled.div`
  h3 {
    font-family: GraublauWeb;
    font-size: 44px;
    line-height: 44px;
    color: #f4f4f4;
    text-transform: capitalize;
    margin: 50px 0;
    text-align: center;
  }
  p {
    max-width: 739px;
    margin: 0 auto;
    width: 100%;
    font-family: Roboto;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;

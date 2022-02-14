import styled from "styled-components";

export const FooterWrapper = styled.div`
  padding: 50px 0;
  position: relative;
  text-align: center;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-family: GraublauWeb;
  font-size: 16px;
  line-height: 16px;
  color: #b8b8b8;
  ::before {
    transition: all 0.2s ease-in-out;
    position: absolute;
    content: "";
    height: 1px;
    background-image: linear-gradient(
      90deg,
      rgba(148, 26, 11, 0.2) 0%,
      #941a0b 21.14%,
      #bc3a08 78.8%,
      rgba(188, 58, 8, 0.515963) 89.06%,
      rgba(188, 58, 8, 0.2) 100%
    );
    width: 100%;
    top: 0;
    left: 0;
  }
  font-weight: 700;
  span {
    position: relative;
    color: #bc3a08;
    ::after {
      transition: all 0.2s ease-in-out;
      position: absolute;
      content: "";
      height: 1.5px;
      background-color: #bc3a08;
      width: 100%;
      left: 0;
      bottom: -5px;
      transform: scaleX(1);
    }
  }
`;

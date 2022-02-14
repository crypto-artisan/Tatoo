import styled from "styled-components";

export const IntroWrapper = styled.div`
  img {
    width: 93%;
    box-: 0px 0px 90px 20px rgba(0, 0, 0, 0.15);
  }
  text-align: center;
`;

export const IntroTitle = styled.div`
  text-align: center;
  font-family: GraublauWeb;
  font-size: clamp(50px, 5vw, 82px);
  font-weight: bold;
  padding: 80px 0 50px 0;
  text-transform: capitalize;
  p {
    margin: 0;
  }
  .white {
    color: white;
  }
  .gradient {
    background-size: 100%;
    background-repeat: repeat;
    background-image: linear-gradient(270deg, #bc3a08 0.05%, #941a0b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

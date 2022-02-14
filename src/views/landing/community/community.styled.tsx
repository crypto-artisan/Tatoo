import styled from "styled-components";

export const CommunityWrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 50px;
  }
  padding: 50px 0;
`;

export const CommunitySection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const JoinDescSection = styled.div`
  width: 50%;
  h1,
  p {
    margin: 0;
  }
  h1 {
    color: #f4f4f4;
    text-transform: capitalize;
    font-size: 62px;
    line-height: 50px;
    font-family: GraublauWeb;
    margin-bottom: 40px;
  }
  p {
    font-family: Gilroy-Regular;
    font-size: 16px;
    line-height: 24px;
    color: #b8b8b8;
  }
`;

export const GetInTouchForm = styled.div`
  width: 45%;
  & > *:not(:first-child) {
    margin-top: 20px;
  }
`;

export const LinkGroup = styled.div`
  & > *:not(:first-child) {
    margin-left: 30px;
  }
`;

export const LinkItem = styled.a`
  text-transform: uppercase;
  font-family: GraublauWeb;
  transition: 0.2s all;
  color: #b8b8b8;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.3em;
  cursor: pointer;
  :hover {
    color: #bc3a08;
  }
`;

export const FormInputWrapper = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #565656;
  span {
    position: relative;
    padding: 20px 0;
    color: #b8b8b8;
    text-transform: capitalize;
    font-family: GraublauWeb;
    font-size: 22px;
    min-width: 80px;
    width: max-content;
    white-space: nowrap;
    :after {
      content: "";
      bottom: -1.5px;
      left: 0;
      width: 80px;
      height: 3px;
      position: absolute;
      background: linear-gradient(270.03deg, #bc3a08 0.05%, #941a0b 100%);
    }
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
    font-family: GraublauWeb;
    color: #b8b8b8;
    margin-left: 20px;
    width: -webkit-fill-available;
  }
`;

export const GetInTouchButton = styled.div`
  padding: 30px 30px;
  span {
    position: relative;
    cursor: pointer;
    :hover {
      ::after {
        transform: scaleX(1);
      }
    }
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    font-family: GraublauWeb;
    font-weight: 700;
    color: #bc3a08;
    svg {
      margin-left: 10px;
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
  }
`;

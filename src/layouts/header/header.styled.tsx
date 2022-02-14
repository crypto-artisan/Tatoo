import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99999;
  left: 0;
`;

export const HeaderContainer = styled.div`
  transition: 0.2s all;
  margin: auto;
  margin-top: 30px;
  background: #252326;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1160px;
  width: calc(90% - 120px);
  #logoImg {
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    width: calc(100% - 120px);
    margin: 0 !important;
  }
  @media screen and (max-width: 450px) {
    padding: 10px 20px;
    width: calc(100% - 40px);
    margin: 0 !important;
  }
`;

export const MenuLists = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 30px;
  }
`;

export const MenuItem = styled.a<{ active?: boolean }>`
  position: relative;
  color: ${({ active }) => (active ? "#bc3a08" : "#ffffff")};
  text-transform: uppercase;
  text-decoration: none;
  font-family: GraublauWeb;
  transition: 0.2s all;
  cursor: pointer;
  img {
    margin-left: 5px;
  }
  :hover {
    color: #bc3a08;
    :after {
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
    transform: ${({ active }) => (active ? "scaleX(1)" : "scaleX(0)")};
  }
`;

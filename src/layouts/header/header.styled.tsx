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

export const SidebarOverlay = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  transition: all 0.2s;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  background-color: #00000080;
`;

export const SideBarWrapper = styled.div<{ show: boolean }>`
  z-index: 9999999;
  position: fixed;
  transition: all 0.2s;
  width: 100%;
  max-width: 320px;
  height: 100vh;
  top: 0;
  right: ${({ show }) => (show ? "0" : "-320px")};
  background: #000000aa;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 50px auto;
  }
  .logo-wrapper {
    width: 100%;
    text-align: center;
    position: relative;
    svg {
      position: absolute;
      top: 10px;
      right: 10px;
      fill: white;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
`;

export const SideBarItem = styled.a<{ active: boolean }>`
  font-size: 20px;
  text-transform: uppercase;
  color: ${({ active }) => (active ? "#bc3a08" : "white")};
  text-decoration: none;
  width: 60%;
  margin-bottom: 20px;
  transition: all 0.2s;
  :hover {
    color: #bc3a08;
  }
`;

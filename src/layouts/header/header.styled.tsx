import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

export const HeaderContainer = styled.div`
  margin-top: 30px;
  background: #252326;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  #logoImg {
    cursor: pointer;
  }
`;

export const MenuLists = styled.div`
  display: flex;
  & > *:not(:first-child) {
    margin-left: 30px;
  }
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  position: relative;
  color: #ffffff;
  text-transform: uppercase;
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

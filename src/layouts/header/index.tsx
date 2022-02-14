import { Container } from "components";
import {
  HeaderContainer,
  HeaderWrapper,
  MenuItem,
  MenuLists,
} from "./header.styled";

import menuSVG from "assets/image/common/menu.svg";
import logoSVG from "assets/image/common/header-logo.svg";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const header: any = document.getElementById("header");
    if (document.documentElement.scrollTop > 30) {
      header.style.marginTop = 0;
    } else {
      header.style.marginTop = "30px";
    }
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer id="header">
          <MenuLists>
            <MenuItem>artists</MenuItem>
            <MenuItem>roadmap</MenuItem>
          </MenuLists>
          <img id="logoImg" src={logoSVG} alt="logoSVG" />
          <MenuLists>
            <MenuItem>team</MenuItem>
            <MenuItem>
              menu <img src={menuSVG} alt="menuSVG" />
            </MenuItem>
          </MenuLists>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

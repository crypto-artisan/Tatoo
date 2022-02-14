import { Container } from "components";
import {
  HeaderContainer,
  HeaderWrapper,
  MenuItem,
  MenuLists,
} from "./header.styled";

import menuSVG from "assets/image/common/menu.svg";
import logoSVG from "assets/image/common/header-logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState(1);
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

    const menuY: any = [
      {
        id: "artists",
        y: document.getElementById("artists")?.getBoundingClientRect().top,
      },
      {
        id: "roadmap",
        y: document.getElementById("roadmap")?.getBoundingClientRect().top,
      },
      {
        id: "team",
        y: document.getElementById("team")?.getBoundingClientRect().top,
      },
      {
        id: "menu",
        y: document.getElementById("menu")?.getBoundingClientRect().top,
      },
    ];

    for (let i = 0; i < 4; i++) {
      if (menuY[i].y >= 0 && menuY[i].y <= window.innerHeight) {
        setActive(i + 1);
      }
    }
  };

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer id="header">
          <MenuLists>
            <MenuItem href="#artists" active={active === 1}>
              artists
            </MenuItem>
            <MenuItem href="#roadmap" active={active === 2}>
              roadmap
            </MenuItem>
          </MenuLists>
          <img id="logoImg" src={logoSVG} alt="logoSVG" />
          <MenuLists>
            <MenuItem href="#team" active={active === 3}>
              team
            </MenuItem>
            <MenuItem href="#menu" active={active === 4}>
              menu <img src={menuSVG} alt="menuSVG" />
            </MenuItem>
          </MenuLists>
        </HeaderContainer>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;

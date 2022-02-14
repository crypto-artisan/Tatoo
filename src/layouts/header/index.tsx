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
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(1);
  useEffect(() => {
    window.addEventListener("resize", () =>
      setMobile(window.innerWidth >= 1024 ? false : true)
    );
    setMobile(window.innerWidth >= 1024 ? false : true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => {});
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
      <HeaderContainer id="header">
        {!mobile && (
          <MenuLists>
            <MenuItem href="#artists" active={active === 1}>
              artists
            </MenuItem>
            <MenuItem href="#roadmap" active={active === 2}>
              roadmap
            </MenuItem>
          </MenuLists>
        )}
        <a href="#artists">
          <img id="logoImg" src={logoSVG} alt="logoSVG" />
        </a>
        {!mobile && (
          <MenuLists>
            <MenuItem href="#team" active={active === 3}>
              team
            </MenuItem>
            <MenuItem href="#menu" active={active === 4}>
              community
            </MenuItem>
          </MenuLists>
        )}
        {mobile && (
          <MenuItem href="#menu" active={active === 4}>
            menu <img src={menuSVG} alt="menuSVG" />
          </MenuItem>
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

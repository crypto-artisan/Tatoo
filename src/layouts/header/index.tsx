import { Container } from "components";
import {
  HeaderContainer,
  HeaderWrapper,
  MenuItem,
  MenuLists,
  SideBarItem,
  SidebarOverlay,
  SideBarWrapper,
} from "./header.styled";

import { IoClose } from "react-icons/io5";

import menuSVG from "assets/image/common/menu.svg";
import logoSVG from "assets/image/common/header-logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(1);
  const [menuShow, setMenuShow] = useState(false);

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
          <MenuItem onClick={() => setMenuShow(true)}>
            menu <img src={menuSVG} alt="menuSVG" />
          </MenuItem>
        )}
      </HeaderContainer>
      {mobile && (
        <SideBarWrapper show={menuShow}>
          <div className="logo-wrapper">
            <IoClose onClick={() => setMenuShow(false)} />
            <img id="logoImg" src={logoSVG} alt="logoSVG" />
          </div>
          <SideBarItem
            active={active === 1}
            onClick={() => setMenuShow(false)}
            href="#artists"
          >
            artists
          </SideBarItem>
          <SideBarItem
            active={active === 2}
            onClick={() => setMenuShow(false)}
            href="#roadmap"
          >
            roadmap
          </SideBarItem>
          <SideBarItem
            active={active === 3}
            onClick={() => setMenuShow(false)}
            href="#team"
          >
            team
          </SideBarItem>
          <SideBarItem
            active={active === 4}
            onClick={() => setMenuShow(false)}
            href="#menu"
          >
            community
          </SideBarItem>
        </SideBarWrapper>
      )}
      {mobile && (
        <SidebarOverlay onClick={() => setMenuShow(false)} show={menuShow} />
      )}
    </HeaderWrapper>
  );
};

export default Header;

import { Container } from "components";
import {
  HeaderContainer,
  HeaderWrapper,
  MenuItem,
  MenuLists,
} from "./header.styled";

import menuSVG from "assets/image/common/menu.svg";
import logoSVG from "assets/image/common/header-logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContainer>
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

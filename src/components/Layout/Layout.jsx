import { Outlet } from "react-router-dom";
import logo from "../../assets/favicon.png";
import {
  Container,
  Header,
  LogoNavLink,
  StyledNavLink,
  StyledNavigation,
} from "./Layout.styled";

const Layout = () => {
  return (
    <div>
      <Header>
        <LogoNavLink to="/">
          <img src={logo} width="40px"></img>
        </LogoNavLink>
        <StyledNavigation>
          <StyledNavLink to="/">Movies</StyledNavLink>
          <StyledNavLink to="/favourites">Favourites</StyledNavLink>
          <StyledNavLink to="/add">Add movie</StyledNavLink>
        </StyledNavigation>
      </Header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;

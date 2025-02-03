import { StyledNavLink, ClientsPage, Title } from "./styles";

function Clients() {
  return (
    <ClientsPage>
      <Title>Our Clients</Title>
      <StyledNavLink
        to="/clients/adobe"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Adobe
      </StyledNavLink>
      <StyledNavLink
        to="/clients/canon"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Canon
      </StyledNavLink>
      <StyledNavLink
        to="/clients/wacom"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Wacom
      </StyledNavLink>
    </ClientsPage>
  );
}

export default Clients;

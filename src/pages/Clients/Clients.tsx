import { StyledLink, ClientsPage, Title } from "./styles";

function Clients() {
  return (
    <ClientsPage>
      <Title>Our Clients</Title>
      <StyledLink to='adobe'>Adobe</StyledLink>
      <StyledLink to='canon'>Canon</StyledLink>
      <StyledLink to='wacom'>Wacom</StyledLink>
    </ClientsPage>
  );
}

export default Clients;

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: rebeccapurple;
  margin: 10px 0;

  &.active {
    text-decoration: underline;
  }
`

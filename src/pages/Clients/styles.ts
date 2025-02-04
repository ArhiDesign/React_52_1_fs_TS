import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ClientsPage = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  color: rebeccapurple;
  margin: 10px 0;

  &.active {
    text-decoration: underline;
  }
`

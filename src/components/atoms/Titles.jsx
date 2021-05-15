import styled from "styled-components";
import { rem } from "polished";

export const Title = styled.h1`
  font-weight: bold;
  text-decoration: underline;
  cursor: default;
  font-size: ${({ fontSize }) => fontSize || rem("60px")};
`;

export const SubTitle = styled(Title).attrs({ as: "h2" })``;

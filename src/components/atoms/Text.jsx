import styled from "styled-components";
import { rem } from "polished";
export default styled.p`
  font-size: ${rem("25px")};
  cursor: default;
  text-decoration: ${({ underline }) => underline && "underline"};
`;

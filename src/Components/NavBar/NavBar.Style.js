import styled from 'styled-components';
import * as constants from 'Constants';

const StyledHeader = styled.header`
  background-color: ${constants.Dark_Blue};
  height: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  @media (min-width: 25rem) {
  }
`;
const StyledNavBar = styled.nav`
  height: auto;
`;

export { StyledHeader, StyledNavBar };

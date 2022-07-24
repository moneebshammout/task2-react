import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledHeader = styled.header`
  @media (min-width: 25rem) {
    background-color: ${constants.Dark_Blue};
    height: 4rem;
    width: 100%;
    position: fixed;
  }
`;
const StyledNavBar = styled.nav`
  @media (min-width: 25rem) {
    display: flexbox;
    flex-direction: row;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    :first-child {
      padding-left: 1.5rem;
    }
    overflow: hidden;
  }
`;

export { StyledHeader, StyledNavBar };

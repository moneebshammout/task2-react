import { styled } from 'reuse/Packages';
// import * as constants from 'reuse/Constants';

const StyledDesktopNavBar = styled.nav`
  @media (min-width: 25rem) {
    display: none;
  }
  @media (min-width: 50rem) {
    display: flex;
    flex-direction: row;
    height: 4rem;
    position: sticky;
    align-items: center;
    justify-content: space-evenly;
  }
`;
export default StyledDesktopNavBar;

import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopNavBar = styled.nav`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
    display: flex;
    flex-direction: row;
    height: 4rem;
    position: relative;
    align-items: center;
    justify-content: space-evenly;
  `}
`;
export default StyledDesktopNavBar;

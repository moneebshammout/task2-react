import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const StyledHeader = styled.header`
  position: fixed;
  ${media.phone`
    background-color: ${colors.darkBlue};
    height: 4rem;
    width: 100%;
 `}
  ${media.desktop`
    position: relative;
  `}
`;
const StyledNavBar = styled.nav`
  ${media.phone`
    display: flex;
    flex-direction: row;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
    :first-child {
      padding-left: 1.5rem;
    }
    overflow: hidden;
  `}
  ${media.desktop`
    display: none;
  `}
`;

export { StyledHeader, StyledNavBar };

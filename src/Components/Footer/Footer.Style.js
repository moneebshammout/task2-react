import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const DesktopLeftSide = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
 `}
`;
const DesktopLogo = styled.div`
  display: none;
  background-color: ${colors.darkBlue};
  ${media.desktop`
    display: flex;
 `}
`;
const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 1rem;

  background-color: ${colors.darkBlue};
  ${media.desktop`
    flex-direction: row;
    justify-content: center;
    padding-top: 6rem;
  `}
`;

export { StyledFooter, DesktopLogo, DesktopLeftSide };

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
  padding-left: 1rem;
  min-height: 100%;
  margin: 0 auto -9.6rem;
  box-sizing: border-box;
  background-color: ${colors.darkBlue};
  ${media.desktop`
    {flex-direction: row;

    justify-content: center;
    padding-top: 4rem;}
  `}
`;

export { StyledFooter, DesktopLogo, DesktopLeftSide };

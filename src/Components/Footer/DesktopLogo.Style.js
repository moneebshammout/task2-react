import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const StyledDesktopLogo = styled.div`
  display: none;
  background-color: ${colors.darkBlue};
  ${media.desktop`
    display: flex;
 `}
`;
export default StyledDesktopLogo;

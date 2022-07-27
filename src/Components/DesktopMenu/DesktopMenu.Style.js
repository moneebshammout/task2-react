import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopMenu = styled.div`
  display: none;

  ${media.desktop`
    display: flex;
  `}
`;
export default StyledDesktopMenu;

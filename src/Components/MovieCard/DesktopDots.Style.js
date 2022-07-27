import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopDots = styled.div`
  ${media.phone`
    display: none;
  `}
  ${media.desktop`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2rem;
  `}
`;
export default StyledDesktopDots;

import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledDesktopleftSide = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
 `}
`;
export default StyledDesktopleftSide;

import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledOptionContainer = styled.div`
  width: 80%;
  max-height: 10rem;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  position: absolute;
  border: none;
  background-color: transparent;
  ${media.desktop`
    width: 15%;
    height: auto;
  `}
`;

export default StyledOptionContainer;

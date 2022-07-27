import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

const StyledBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 1.3rem;
  padding-top: 4rem;
  ${media.desktop`
    flex-direction: row;
    flex-wrap: wrap;
  `};
`;

export default StyledBody;

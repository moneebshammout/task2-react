import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${constants.Dark_Blue};
  /* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledFooter;

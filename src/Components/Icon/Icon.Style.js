import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const theme = {
  black: constants.Black,
  blue: constants.Light_Blue,
  grey: constants.Grey,
  white: constants.White,
};
const StyledIcon = styled.i`
  font-size: 1.4rem;
  color: ${(props) => theme[props.theme] ?? 'white'};
  display: flex;
  @media (min-width: 25rem) {
  }
`;

export default StyledIcon;

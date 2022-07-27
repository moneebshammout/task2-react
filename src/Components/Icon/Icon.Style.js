import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const theme = {
  black: colors.black,
  blue: colors.lightBlue,
  grey: colors.grey,
  white: colors.white,
};
const hoverCSS = css`
  :hover {
    color: ${colors.lightBlue};
  }
`;
const StyledIcon = styled.i`
  font-size: 1.4rem;
  color: ${(props) => theme[props.theme] ?? 'white'};
  display: flex;
  ${(props) => (props.hoverEffect ? hoverCSS : null)};
  ${media.phone`
  `}
`;

export default StyledIcon;

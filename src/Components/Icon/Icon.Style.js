import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const theme = {
  black: colors.black,
  blue: colors.lightBlue,
  grey: colors.grey,
  lightGrey: colors.lightGrey,
  white: colors.white,
};

const StyledIcon = styled.i`
  font-size: 1.4rem;
  color: ${(props) => theme[props.theme]};
  display: flex;
  &:hover {
    ${(props) =>
      props.hoverEffect
        ? {
            color: `${colors.lightBlue}`,
          }
        : ''}
  }
  ${media.phone`
  `}
`;

export default StyledIcon;

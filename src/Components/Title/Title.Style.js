import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const light = css`
  font-size: 1rem;
  font-weight: 300;
`;
const medium = css`
  font-size: 1rem;
  font-weight: 400;
`;
const bold = css`
  font-size: 1.6rem;
  font-weight: 600;
`;
const popularHeader = css`
  ${media.phone`
    font-size: 1.6rem;
    font-weight: 600;
  `}
  ${media.desktop`
    position: absolute;
    top: 7%;
    left: 10.5%;
  `}
`;
const smallBold = css`
  font-size: 1rem;
  font-weight: 600;
`;
const moviesBold = css`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  :hover {
    color: ${colors.lightBlue};
  }
`;
const smallLight = css`
  font-size: 0.8rem;
  font-weight: 300;
  ${media.desktop`
    font-size: 1rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 6);
 `}
`;
const theme = {
  bold,
  light,
  medium,
  moviesBold,
  popularHeader,
  smallBold,
  smallLight,
};
const StyledTitle = styled.h2`
  display: flex;
  ${(props) => theme[props.theme]}
`;

export default StyledTitle;

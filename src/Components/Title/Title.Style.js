import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const light = css`
  font-size: 1rem;
  font-weight: 300;
`;
const medium = css`
  ${light}
  font-weight: 400;
`;
const selectTitle = css`
  ${medium}
  font-size:0.8;
  text-align: center;
  align-items: center;
  padding-top: 0.6rem;
`;
const bold = css`
  font-size: 1.6rem;
  font-weight: 600;
`;
const popularHeader = css`
  ${media.phone`
    ${bold}
    padding-bottom:1.5rem;
  `}
  ${media.desktop`
    position: absolute;
    top: 7%;
    left: 10.5%;
  `}
`;
const smallBold = css`
  ${bold}
  font-size: 1rem;
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
  ${light}
  font-size: 0.8rem;
  ${media.desktop`
   ${medium}
    color: rgba(0, 0, 0, 6);
 `}
`;
const theme = {
  bold,
  light,
  medium,
  moviesBold,
  popularHeader,
  selectTitle,
  smallBold,
  smallLight,
};
const StyledTitle = styled.h2`
  display: flex;
  ${(props) => theme[props.theme]}
`;

export default StyledTitle;

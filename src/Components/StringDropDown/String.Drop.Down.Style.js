import styled, { css } from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const navDrops = css`
  position: absolute;
  background-color: white;
  cursor: pointer;
  width: 8rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
`;
const movieDrops = css``;
const footerDrops = css``;
const types = {
  footerDrops,
  movieDrops,
  navDrops,
};
const StyledStringDropDown = styled.div`
  ${media.phone`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: ${colors.white};
    border: none;
    padding-bottom: 1rem;
 `}
  ${media.desktop`
    ${(props) => types[props.dropType]};
  `}
`;
export default StyledStringDropDown;

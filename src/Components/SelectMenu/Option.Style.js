import styled, { css } from 'styled-components';
// import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const selectedCSS = css`
  color: ${colors.black};
  font-weight: 700;
  background-color: ${colors.whiteGrey};
  &:hover,
  :focus {
    background-color: ${colors.lightBlue};
    color: ${colors.White};
  }
`;
const StyledOption = styled.div`
  min-width: 100%;
  height: auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

  box-sizing: border-box;
  border: none;
  background-color: ${colors.white};
  //assigning hover effect for the focused option
  ${(props) => (props.selected === props.content ? selectedCSS : null)}
`;

export default StyledOption;

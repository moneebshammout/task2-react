import styled, { css } from 'styled-components';
// import {media} from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const checkedCSS = css`
  border: solid 0.3rem;
  border-color: ${colors.lightBlue};
  height: 0.6rem;
  width: 0.6rem;
`;
const unCheckedCSS = css`
  border: solid 0.1rem;
  height: 1rem;
  width: 1rem;
`;
const StyledCustomRadioButton = styled.span`
  display: flex;
  background-color: white;
  border-radius: 100%;
  ${(props) => (props.checked ? checkedCSS : unCheckedCSS)}
`;

export default StyledCustomRadioButton;

import styled, { css } from 'styled-components';
// import {media} from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const labelCheckedCSS = css`
  font-weight: 600;
`;
const labelUnCheckedCSS = css`
  font-weight: 300;
`;
const Label = styled.label`
  display: flex;
  flex-direction: row;
  position: relative;
  cursor: pointer;
  font-size: 1.1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.5rem;
  ${(props) => (props.checked ? labelCheckedCSS : labelUnCheckedCSS)}
`;
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
const StyledRadioButton = styled.span`
  display: flex;
  background-color: white;
  border-radius: 100%;
  ${(props) => (props.checked ? checkedCSS : unCheckedCSS)}
`;

export { StyledRadioButton, Label };

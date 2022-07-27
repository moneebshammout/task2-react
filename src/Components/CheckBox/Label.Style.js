import styled, { css } from 'styled-components';
// import {media} from 'Styles/MediaQuery';

const checkedCSS = css`
  font-weight: 600;
`;
const unCheckedCSS = css`
  font-weight: 300;
`;
const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${(props) => (props.checked ? checkedCSS : unCheckedCSS)}
`;

export default StyledLabel;

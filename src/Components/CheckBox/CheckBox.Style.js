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
  display: block;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${(props) => (props.checked ? labelCheckedCSS : labelUnCheckedCSS)}
`;
const boxCheckedCSS = css`
  background-color: ${colors.lightBlue};
  ::after {
    display: block;
    justify-content: center;
    left: 0.3rem;
    top: 0.1rem;
    width: 0.3rem;
    height: 0.6rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
const boxUnCheckedCSS = css`
  background-color: ${colors.white};
  border: solid 0.01rem;
  border-radius: 30%;
  border-color: ${colors.lightBlue};
`;
const StyledCheckBox = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 0;
  left: 5%;
  background-color: #eee;
  ::after {
    content: '';
    position: absolute;
    display: none;
  }
  ${(props) => (props.checked ? boxCheckedCSS : boxUnCheckedCSS)}
`;

export { StyledCheckBox, Label };

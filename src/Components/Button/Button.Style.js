import { styled, css } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const bigWhite = css`
  font-size: 1.3rem;
  font-weight: 600;
  width: 8rem;
  height: 2.5rem;
`;
const smallFade = css`
  font-size: 1rem;
  opacity: 0.5;
  font-weight: 600;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
`;
const smallWhite = css`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 0.5rem;
  padding-bottom: 0.7rem;
`;
const smallGrey = css`
  font-size: 0.8rem;
  color: grey;
  font-weight: 900;
  width: 100%;
  height: 3rem;
  width: 12rem;
  text-indent: -6rem;
  display: block !important;
`;
const themes = {
  bigWhite,
  smallFade,
  smallGrey,
  smallWhite,
};
const StyledButton = styled.button`
  @media (min-width: 25rem) {
    display: flex;
    background-color: transparent;

    color: ${constants.White};
    border: none;
    ${(props) => themes[props.theme]}
  }
`;

export default StyledButton;

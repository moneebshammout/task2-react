import { styled, css } from 'reuse/Packages';

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
const smallBold = css`
  font-size: 1rem;
  font-weight: 600;
`;
const smallLight = css`
  font-size: 0.8rem;
  font-weight: 300;
`;
const theme = {
  bold,
  light,
  medium,
  smallBold,
  smallLight,
};
const StyledTitle = styled.h2`
  display: flex;
  ${(props) => theme[props.theme]}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledTitle;

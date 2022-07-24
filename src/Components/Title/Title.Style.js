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
const theme = {
  bold,
  light,
  medium,
};
const StyledTitle = styled.h2`
  display: flex;
  ${(props) => theme[props.theme]}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledTitle;

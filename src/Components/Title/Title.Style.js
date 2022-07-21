import { styled, css } from 'reuse/Packages';

const lightTitle = css`
  font-size: 1rem;
  font-weight: 200;
`;
const boldTitle = css`
  font-size: 1.6rem;
  font-weight: 600;
`;
const StyledTitle = styled.h2`
  display: flex;
  ${(props) =>
    props.theme === 'light'
      ? lightTitle
      : boldTitle}/* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledTitle;

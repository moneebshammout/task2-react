import { styled } from 'reuse/Packages';

const StyledOptionContainer = styled.div`
  width: 80%;
  max-height: 10rem;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  position: absolute;
  border: none;
  background-color: transparent;
  /* @media (min-width: 25rem) {
    width: 100%;
    height: auto;
  } */
`;

export default StyledOptionContainer;

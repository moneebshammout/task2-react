import { styled } from 'reuse/Packages';

const StyledRightWrapper = styled.span`
  @media (min-width: 25rem) {
    display: flexbox;
    flex-direction: row;
    :last-child {
      padding-right: 1.5rem;
    }
  }
`;

export default StyledRightWrapper;

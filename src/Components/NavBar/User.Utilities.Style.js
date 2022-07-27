import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';
import colors from 'Styles/Colors';

const StyledUserUtilities = styled.div`
  ${media.phone`
    background-color: ${colors.white};
    bottom: 82.5%;
    left: 51.5%;
    display: block !important;
    flex-direction: column;
    position: absolute;
    width: 12rem;
    height: 6rem;
    box-shadow: 0.01rem 0.01rem 0.01rem 0.01rem grey;
    box-shadow: rgba(0, 0, 0, 0.24) 0.1rem 0.1rem 0.1rem 0.1rem;
    justify-content: space-between;

    white-space: nowrap;
    border-radius: 0.5rem;
    > * {
      &:first-child {
        border-bottom: solid 0.001rem grey;
      }
      &:first-child:hover {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
      }
      &:nth-child(2):hover {
        background-color: ${colors.darkBlue};
        color: ${colors.white};
      }
    }
  `}
`;

export default StyledUserUtilities;

import { styled } from 'reuse/Packages';
import * as constants from 'reuse/Constants';

const StyledSelectMenu = styled.select`
  display: flex;
  @media (min-width: 25rem) {
    width: 90%;
    height: 2.5rem;
    border-radius: 0.3rem;
    border-color: transparent;
    text-indent: 1rem;
    outline: none;
    box-shadow: none;
    margin: 1rem 1rem 0 1rem;
    color: ${constants.Black};
    background-color: ${constants.medium_Grey};
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.1rem center;
    :first-child {
      outline: none !important;
      border: none !important;
      color: black;
    }
    :focus {
      outline: none;
    }

    cursor: pointer;
  }
`;

export default StyledSelectMenu;

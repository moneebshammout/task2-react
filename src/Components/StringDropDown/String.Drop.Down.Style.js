import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const StyledStringDropDown = styled.div`
  ${media.phone`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: ${colors.red};
    border: none;
    padding-bottom: 1rem;
 `}
  ${media.desktop`
    ${(props) =>
      props.dropType === 'navDrops'
        ? {
            'align-items': 'center',
            'background-color': 'white',
            border: '0.1rem solid #e3e3e3',
            'border-radius': '0.5rem',
            'box-shadow': '0 0.1rem 0.5rem rgb(0 0 0 / 10%)',
            cursor: 'pointer',
            'justify-content': 'center',
            position: 'absolute',
            width: '10rem',
          }
        : ''};
    ${(props) =>
      props.dropType === 'footerDrops'
        ? {
            'align-items': 'center',
            'background-color': 'white',
            'border-radius': '0.5rem',
            cursor: 'pointer',
            'justify-content': 'center',
            position: 'absolute',
            width: '8rem',
          }
        : ''};
  `}
`;
export default StyledStringDropDown;

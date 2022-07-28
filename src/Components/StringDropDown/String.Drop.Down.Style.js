import styled from 'styled-components';
import { media } from 'Styles/MediaQuery';

import colors from 'Styles/Colors';

const StyledStringDropDown = styled.div`
  ${media.phone`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: ${colors.white};
    border: none;
    padding-bottom: 1rem;
 `}
  ${media.desktop`
    ${(props) =>
      props.dropType === 'navDrops'
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

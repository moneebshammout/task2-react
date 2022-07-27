import { css } from 'styled-components';

export const breakpoint = {
  desktop: '50rem',
  phone: '25rem',
};

export const media = {
  // ns = not small
  // ns: (...args) =>
  //   css`
  //     @media screen and (min-width: ${breakpoint.phone}) {
  //       ${css(...args)}
  //     }
  //   `,
  desktop: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.desktop}) {
        ${css(...args)}
      }
    `,
  phone: (...args) =>
    css`
      @media screen and (min-width: ${breakpoint.phone}) {
        ${css(...args)}
      }
    `,
};

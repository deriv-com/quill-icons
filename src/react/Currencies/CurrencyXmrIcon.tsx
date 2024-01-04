import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyXmrIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fill='#fff'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path
      fill='#F60'
      d='M16 0C7.165 0 0 7.165 0 16c0 1.766.286 3.465.815 5.053H5.6V7.592l10.4 10.4 10.4-10.4v13.462h4.785c.529-1.59.815-3.288.815-5.054 0-8.835-7.165-16-16-16Z'
    />
    <path
      fill='#4C4C4C'
      d='M9.07 15.844v8.47H2.328C5.137 28.922 10.21 32 16 32c5.79 0 10.863-3.078 13.671-7.686H22.93v-8.47L16 22.774l-6.93-6.93Z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyXmrIcon);
export default ForwardRef;

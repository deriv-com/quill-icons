import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyXrpIcon = (
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
      fill='#171C21'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path
      fill='#fff'
      d='M23.97 9.38h-2.314L17.998 13a2.847 2.847 0 0 1-3.997 0l-3.657-3.62H8.03l4.814 4.765a4.496 4.496 0 0 0 6.311 0L23.97 9.38ZM8 22.63h2.314l3.687-3.65a2.847 2.847 0 0 1 3.998 0l3.687 3.65H24l-4.844-4.794a4.496 4.496 0 0 0-6.312 0L8 22.63Z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyXrpIcon);
export default ForwardRef;

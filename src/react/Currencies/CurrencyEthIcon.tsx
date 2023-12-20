import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyEthIcon = (
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
      fill='#EBF0F1'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
    />
    <path fill='#12100B' fillOpacity={0.8} d='M15.998 4v16.565l7.497-4.345z' />
    <path fill='#12100B' fillOpacity={0.45} d='M15.998 4 8.5 16.22l7.498 4.35z' />
    <path fill='#12100B' fillOpacity={0.8} d='M15.998 21.968v6.027L23.5 17.616z' />
    <path fill='#12100B' fillOpacity={0.45} d='M15.998 27.995v-6.028L8.5 17.616z' />
    <path fill='#12100B' fillOpacity={0.6} d='m15.998 20.573 7.497-4.353-7.497-3.348z' />
    <path fill='#12100B' fillOpacity={0.6} d='m8.5 16.22 7.498 4.353v-7.701z' />
  </svg>
);
const ForwardRef = forwardRef(CurrencyEthIcon);
export default ForwardRef;

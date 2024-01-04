import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyNeoIcon = (
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
      fill='#00E599'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path fill='#fff' d='M8.769 21.506V10.805L16.41 8l6.818 2.442-7.512 2.768V24l-6.948-2.494Z' />
    <path fill='#fff' d='M16.282 19.372v-5.854l6.946-2.569.003 10.912-6.95-2.489Z' />
  </svg>
);
const ForwardRef = forwardRef(CurrencyNeoIcon);
export default ForwardRef;

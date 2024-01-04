import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const CurrencyTrxIcon = (
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
      fill='#DC062B'
      d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
    />
    <path
      fill='#fff'
      d='M20.473 10.223 8.391 8l6.358 16 8.86-10.794-3.136-2.982Zm-.194.98 1.848 1.757-5.055.915 3.207-2.672Zm-4.305 2.49-5.328-4.42 8.709 1.603-3.38 2.816Zm-.38.78-.868 7.183-4.685-11.788 5.553 4.606Zm.805.382 5.597-1.014-6.42 7.823.823-6.809Z'
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyTrxIcon);
export default ForwardRef;

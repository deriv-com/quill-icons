import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortDownSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.336 15.945c.055.037.11.055.164.055.055 0 .11-.018.164-.055l3.281-3.117A.185.185 0 0 0 8 12.691a.214.214 0 0 0-.191-.191H1.19a.214.214 0 0 0-.191.191c0 .055.018.1.055.137zm-.602.63-3.28-3.09a1.08 1.08 0 0 1-.329-.794c0-.31.1-.565.3-.765.201-.2.457-.301.766-.301H7.81c.31 0 .565.1.765.3.2.201.301.457.301.766 0 .31-.11.575-.328.793l-3.281 3.09c-.22.2-.474.301-.766.301-.292 0-.547-.1-.766-.3'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownSmRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCalendarBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.75 4.75V6h4.5V4.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75V6H12c.563.02 1.031.219 1.406.594S13.98 7.437 14 8v10c-.02.563-.219 1.031-.594 1.406S12.562 19.98 12 20H2c-.562-.02-1.031-.219-1.406-.594S.02 18.563 0 18V8c.02-.562.219-1.031.594-1.406S1.438 6.02 2 6h1.25V4.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75M1.5 10v8c.02.313.188.48.5.5h10c.313-.02.48-.187.5-.5v-8z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarBoldIcon);
export default ForwardRef;

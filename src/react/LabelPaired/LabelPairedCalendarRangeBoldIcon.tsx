import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCalendarRangeBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.75 4.75V6h4.5V4.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75V6H13c.563.02 1.031.219 1.406.594S14.98 7.437 15 8v10c-.02.563-.219 1.031-.594 1.406S13.562 19.98 13 20H3c-.562-.02-1.031-.219-1.406-.594S1.02 18.563 1 18V8c.02-.562.219-1.031.594-1.406S2.437 6.02 3 6h1.25V4.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75M2.5 10v8c.02.313.188.48.5.5h10c.313-.02.48-.187.5-.5v-8zM4 13c0-.292.094-.531.281-.719A.974.974 0 0 1 5 12c.292 0 .531.094.719.281A.974.974 0 0 1 6 13a.974.974 0 0 1-.281.719A.974.974 0 0 1 5 14a.974.974 0 0 1-.719-.281A.974.974 0 0 1 4 13m7 2c.292 0 .531.094.719.281A.974.974 0 0 1 12 16a.974.974 0 0 1-.281.719A.974.974 0 0 1 11 17a.974.974 0 0 1-.719-.281A.974.974 0 0 1 10 16c0-.292.094-.531.281-.719A.974.974 0 0 1 11 15m-4-2c.042-.458.292-.708.75-.75h3.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-3.5c-.458-.042-.708-.292-.75-.75m1.25 2.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-3.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarRangeBoldIcon);
export default ForwardRef;

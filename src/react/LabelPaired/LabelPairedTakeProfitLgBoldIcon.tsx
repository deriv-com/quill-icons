import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTakeProfitLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.79 12.297v8.437H6.483v-8.437H3.672v-2.031h7.93v2.03zm4.374 8.437V10.266h4.961c.469 0 .938.117 1.328.273.39.156.703.39.977.664.273.313.508.664.664 1.094a4.74 4.74 0 0 1 0 2.695 2.87 2.87 0 0 1-.664 1.055 3.682 3.682 0 0 1-.977.703c-.39.156-.82.234-1.328.234h-2.656v3.75zm2.305-5.742h2.383c.351 0 .625-.078.78-.273.235-.156.313-.43.313-.781v-.626c0-.351-.078-.624-.312-.78-.156-.196-.43-.274-.781-.274h-2.383z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitLgBoldIcon);
export default ForwardRef;

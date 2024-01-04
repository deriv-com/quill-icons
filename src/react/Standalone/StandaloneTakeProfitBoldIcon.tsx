import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTakeProfitBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M12.29 13.297v8.437H9.983v-8.437H7.172v-2.031h7.93v2.03h-2.813Zm4.374 8.437V11.266h4.961c.469 0 .938.117 1.328.273.39.156.703.39.977.664.273.313.508.664.664 1.094a4.74 4.74 0 0 1 0 2.695 2.87 2.87 0 0 1-.664 1.055 3.682 3.682 0 0 1-.977.703c-.39.156-.82.234-1.328.234h-2.656v3.75h-2.305Zm2.305-5.742h2.383c.351 0 .625-.078.78-.273.235-.156.313-.43.313-.781v-.626c0-.351-.078-.624-.312-.78-.156-.196-.43-.274-.781-.274h-2.383v2.734Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTakeProfitBoldIcon);
export default ForwardRef;

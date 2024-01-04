import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartOhlcRegularIcon = (
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
      d='M16 6.5c.313 0 .625.313.625.625V9H18.5c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625h-1.875v13.125A.642.642 0 0 1 16 24a.617.617 0 0 1-.625-.625V21.5H13.5a.617.617 0 0 1-.625-.625c0-.313.273-.625.625-.625h1.875V7.125c0-.313.273-.625.625-.625ZM24.125 9c.313 0 .625.313.625.625v8.125h1.875c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H24.75v1.875a.642.642 0 0 1-.625.625.617.617 0 0 1-.625-.625V12.75h-1.875a.617.617 0 0 1-.625-.625c0-.313.273-.625.625-.625H23.5V9.625c0-.313.273-.625.625-.625Zm-16.25 5c.313 0 .625.313.625.625v8.125h1.875c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H8.5v1.875a.642.642 0 0 1-.625.625.617.617 0 0 1-.625-.625V17.75H5.375a.617.617 0 0 1-.625-.625c0-.313.273-.625.625-.625H7.25v-1.875c0-.313.273-.625.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartOhlcRegularIcon);
export default ForwardRef;

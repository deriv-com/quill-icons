import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartTrendSidewayRegularIcon = (
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
      d='M4.125 16.5c0-.313.273-.625.625-.625h22.5c.313 0 .625.313.625.625a.642.642 0 0 1-.625.625H4.75a.617.617 0 0 1-.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartTrendSidewayRegularIcon);
export default ForwardRef;

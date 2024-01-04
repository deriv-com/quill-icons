import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartTrendSidewayBoldIcon = (
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
      d='M3.813 16.5c0-.508.39-.938.937-.938h22.5a.95.95 0 0 1 .938.938c0 .547-.43.938-.938.938H4.75c-.547 0-.938-.391-.938-.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartTrendSidewayBoldIcon);
export default ForwardRef;

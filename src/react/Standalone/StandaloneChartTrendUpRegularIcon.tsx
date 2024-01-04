import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartTrendUpRegularIcon = (
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
      d='M27.523 7.203c.313.156.43.547.274.86l-3.75 7.5a.623.623 0 0 1-.547.312h-5.898l-4.805 9.688a.641.641 0 0 1-.86.273l-7.5-3.75a.641.641 0 0 1-.273-.86.641.641 0 0 1 .86-.273l6.913 3.477 4.727-9.453c.117-.196.313-.352.586-.352h5.86l3.554-7.148a.641.641 0 0 1 .86-.274Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartTrendUpRegularIcon);
export default ForwardRef;

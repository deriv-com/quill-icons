import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowDownBoldIcon = (
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
      d='m15.336 24.977-6.563-6.875c-.364-.47-.351-.912.04-1.329.442-.364.872-.364 1.289 0l4.96 5.196V8.687c.053-.572.365-.885.938-.937.573.052.885.365.938.938v13.28l4.96-5.155c.417-.391.86-.404 1.329-.04.364.417.364.86 0 1.329l-6.563 6.875a.904.904 0 0 1-.664.273.904.904 0 0 1-.664-.273Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownBoldIcon);
export default ForwardRef;

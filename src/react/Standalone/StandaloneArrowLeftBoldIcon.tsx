import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowLeftBoldIcon = (
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
      d='M7.523 17.164a.904.904 0 0 1-.273-.664c0-.26.091-.482.273-.664l6.875-6.563c.47-.364.912-.364 1.329 0 .364.47.351.912-.04 1.329l-5.156 4.96h13.282c.572.053.885.365.937.938-.052.573-.365.885-.937.938H10.53l5.196 4.96c.364.417.364.86 0 1.329-.417.364-.847.364-1.29 0l-6.874-6.563z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftBoldIcon);
export default ForwardRef;

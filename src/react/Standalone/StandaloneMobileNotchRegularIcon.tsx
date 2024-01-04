import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneMobileNotchRegularIcon = (
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
      d='M18.5 7.75v.625c0 .365-.117.664-.352.898-.234.235-.533.352-.898.352h-2.5c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V7.75h-1.25c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v15c0 .365.117.664.352.898.234.235.533.352.898.352h7.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V9c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352H18.5Zm-1.25 0h-2.5v.625h2.5V7.75ZM9.75 9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h7.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v15c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-7.5c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileNotchRegularIcon);
export default ForwardRef;

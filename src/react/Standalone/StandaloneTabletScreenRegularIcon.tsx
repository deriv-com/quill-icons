import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneTabletScreenRegularIcon = (
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
      d='M22.25 7.75H9.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10h15V9c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352m1.25 12.5h-15V24c0 .365.117.664.352.898.234.235.533.352.898.352h12.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898zM9.75 6.5h12.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v15c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742m4.375 16.25c.026-.39.234-.599.625-.625h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-2.5c-.39-.026-.599-.234-.625-.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTabletScreenRegularIcon);
export default ForwardRef;

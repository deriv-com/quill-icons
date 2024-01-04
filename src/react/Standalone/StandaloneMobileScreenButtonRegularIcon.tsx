import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneMobileScreenButtonRegularIcon = (
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
      d='M19.75 7.75h-7.5c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v10h10V9c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352ZM21 20.25H11V24c0 .365.117.664.352.898.234.235.533.352.898.352h7.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898v-3.75ZM12.25 6.5h7.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v15c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-7.5c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm1.875 16.25c.026-.39.234-.599.625-.625h2.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-2.5c-.39-.026-.599-.234-.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileScreenButtonRegularIcon);
export default ForwardRef;

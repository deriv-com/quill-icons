import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCalendarRegularIcon = (
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
      d='M11.625 6.5c.39.026.599.234.625.625V9h7.5V7.125c.026-.39.234-.599.625-.625.39.026.599.234.625.625V9h1.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V11.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H11V7.125c.026-.39.234-.599.625-.625ZM23.5 14h-15v10c0 .365.117.664.352.898.234.235.533.352.898.352h12.5c.365 0 .664-.117.898-.352.235-.234.352-.533.352-.898V14Zm-1.25-3.75H9.75c-.365 0-.664.117-.898.352-.235.234-.352.533-.352.898v1.25h15V11.5c0-.365-.117-.664-.352-.898-.234-.235-.533-.352-.898-.352Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneSterlingSignRegularIcon = (
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
      d='M12.875 12.438V16.5h6.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-6.25A15.293 15.293 0 0 1 11.391 24h10.234c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-11.25a.612.612 0 0 1-.547-.312.664.664 0 0 1 0-.625l.04-.079a14.548 14.548 0 0 0 1.757-6.484h-1.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h1.25v-4.062c.026-1.329.482-2.435 1.367-3.32.886-.886 1.992-1.342 3.32-1.368h.274c.52 0 1.016.078 1.484.234l3.125 1.055c.339.156.47.417.39.781-.155.365-.416.495-.78.39L17.68 9.196A3.234 3.234 0 0 0 16.586 9h-.273c-.964.026-1.771.365-2.422 1.016-.651.65-.99 1.458-1.016 2.422'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSterlingSignRegularIcon);
export default ForwardRef;

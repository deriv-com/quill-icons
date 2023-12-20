import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneLockBoldIcon = (
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
      d='M12.875 11.5V14h6.25v-2.5c-.026-.885-.326-1.628-.898-2.227-.6-.572-1.342-.872-2.227-.898-.885.026-1.628.326-2.227.898-.572.6-.872 1.342-.898 2.227M11 14v-2.5c.026-1.406.508-2.591 1.445-3.555C13.41 7.008 14.594 6.526 16 6.5c1.406.026 2.591.508 3.555 1.445.937.964 1.419 2.149 1.445 3.555V14h1.25c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H9.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-7.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742zm-1.875 2.5V24c.026.39.234.599.625.625h12.5c.39-.026.599-.234.625-.625v-7.5c-.026-.39-.234-.599-.625-.625H9.75c-.39.026-.599.234-.625.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLockBoldIcon);
export default ForwardRef;

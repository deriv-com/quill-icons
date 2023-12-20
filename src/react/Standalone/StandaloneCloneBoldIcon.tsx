import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCloneBoldIcon = (
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
      d='M8.5 24.625h8.75c.39-.026.599-.234.625-.625v-2.5h1.875V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742H8.5c-.703-.026-1.29-.273-1.758-.742C6.273 25.289 6.026 24.703 6 24v-8.75c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742H11v1.875H8.5c-.39.026-.599.234-.625.625V24c.026.39.234.599.625.625m6.25-6.25h8.75c.39-.026.599-.234.625-.625V9c-.026-.39-.234-.599-.625-.625h-8.75c-.39.026-.599.234-.625.625v8.75c.026.39.234.599.625.625m-2.5-.625V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h8.75c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v8.75c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-8.75c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCloneBoldIcon);
export default ForwardRef;

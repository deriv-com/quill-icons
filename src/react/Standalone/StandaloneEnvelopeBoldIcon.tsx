import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneEnvelopeBoldIcon = (
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
      d='M8.5 10.875c-.39.026-.599.234-.625.625v.86l6.758 5.546c.417.313.872.469 1.367.469.52 0 .99-.156 1.406-.469l6.719-5.547V11.5c-.026-.39-.234-.599-.625-.625h-15Zm-.625 3.906V21.5c.026.39.234.599.625.625h15c.39-.026.599-.234.625-.625v-6.719l-5.547 4.57c-.781.6-1.64.899-2.578.899s-1.797-.3-2.578-.898l-5.547-4.57ZM6 11.5c.026-.703.273-1.29.742-1.758C7.211 9.273 7.797 9.026 8.5 9h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v10c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-10Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEnvelopeBoldIcon);
export default ForwardRef;

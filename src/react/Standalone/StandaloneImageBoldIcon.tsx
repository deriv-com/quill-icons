import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneImageBoldIcon = (
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
      d='M23.5 9.625h-15c-.39.026-.599.234-.625.625v12.5l.195-.234 3.125-4.375a.86.86 0 0 1 .742-.391c.313 0 .573.13.782.39l1.172 1.68 3.242-4.218a.89.89 0 0 1 .742-.352.89.89 0 0 1 .742.352l5.313 6.875.195.273v-12.5c-.026-.39-.234-.599-.625-.625ZM8.5 7.75h15c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758v-12.5c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742Zm3.125 7.5c-.703-.026-1.25-.338-1.64-.938-.313-.624-.313-1.25 0-1.874.39-.6.937-.912 1.64-.938.703.026 1.25.338 1.64.938.313.624.313 1.25 0 1.874-.39.6-.937.912-1.64.938Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneImageBoldIcon);
export default ForwardRef;

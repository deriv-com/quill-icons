import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWindowMaximizeBoldIcon = (
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
      d='M6 10.016c.052-.339.156-.651.313-.938a2.26 2.26 0 0 1 .937-.976c.313-.183.651-.3 1.016-.352H23.5c.703.026 1.29.273 1.758.742.469.469.716 1.055.742 1.758v12.5c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-15c-.703-.026-1.29-.273-1.758-.742-.469-.469-.716-1.055-.742-1.758V10.016Zm1.875 5.234v7.5c.026.39.234.599.625.625h15c.39-.026.599-.234.625-.625v-7.5H7.875Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMaximizeBoldIcon);
export default ForwardRef;

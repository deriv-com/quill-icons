import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneMinusRegularIcon = (
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
      d='M24.125 16.5c-.026.39-.234.599-.625.625h-15c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h15c.39.026.599.234.625.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMinusRegularIcon);
export default ForwardRef;

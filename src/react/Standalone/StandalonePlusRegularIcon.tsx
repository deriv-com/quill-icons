import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePlusRegularIcon = (
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
      d='M16.625 9v6.875H23.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-6.875V24c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-6.875H8.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h6.875V9c.026-.39.234-.599.625-.625.39.026.599.234.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlusRegularIcon);
export default ForwardRef;

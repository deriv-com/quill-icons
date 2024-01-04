import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneWindowMinimizeRegularIcon = (
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
      d='M6.625 24h18.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H6.625c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMinimizeRegularIcon);
export default ForwardRef;

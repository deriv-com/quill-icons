import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneBarsRegularIcon = (
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
      d='M7.25 9.625c.026-.39.234-.599.625-.625h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H7.875c-.39-.026-.599-.234-.625-.625Zm0 6.25c.026-.39.234-.599.625-.625h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H7.875c-.39-.026-.599-.234-.625-.625Zm17.5 6.25c-.026.39-.234.599-.625.625H7.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h16.25c.39.026.599.234.625.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarsRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneExpandRegularIcon = (
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
      d='M12.875 7.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H8.5v4.375c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625h5ZM7.25 19.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625V24h4.375c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625v-5ZM24.125 7.75c.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V9h-4.375c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h5ZM23.5 19.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625H23.5v-4.375Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExpandRegularIcon);
export default ForwardRef;

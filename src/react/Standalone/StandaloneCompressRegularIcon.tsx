import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneCompressRegularIcon = (
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
      d='M13.5 8.375v5c-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h4.375V8.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625M7.875 19h5c.39.026.599.234.625.625v5c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V20.25H7.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625M19.75 8.375v4.375h4.375c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-5c-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625.39.026.599.234.625.625M19.125 19h5c.39.026.599.234.625.625-.026.39-.234.599-.625.625H19.75v4.375c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625v-5c.026-.39.234-.599.625-.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCompressRegularIcon);
export default ForwardRef;

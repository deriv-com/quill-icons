import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneEuroSignRegularIcon = (
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
      d='M11.078 15.25h-.703c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.977c.572-1.849 1.614-3.346 3.125-4.492 1.51-1.146 3.268-1.732 5.273-1.758h1.914c.39.026.599.234.625.625-.026.39-.234.599-.625.625H19.75c-1.667.026-3.125.495-4.375 1.406-1.25.912-2.148 2.11-2.695 3.594h7.695c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-8.008a6.771 6.771 0 0 0 0 2.5h8.008c.39.026.599.234.625.625-.026.39-.234.599-.625.625H12.68c.547 1.484 1.445 2.682 2.695 3.594 1.25.911 2.708 1.38 4.375 1.406h1.914c.39.026.599.234.625.625-.026.39-.234.599-.625.625H19.75c-2.005-.026-3.763-.612-5.273-1.758-1.51-1.146-2.553-2.643-3.125-4.492h-.977c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h.703a10.065 10.065 0 0 1 0-2.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEuroSignRegularIcon);
export default ForwardRef;

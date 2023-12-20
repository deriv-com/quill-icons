import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFiveRegularIcon = (
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
      d='M11.664 8.219c.078-.287.274-.443.586-.469h8.125c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-7.617l-1.563 6.25h6.055c1.406.026 2.591.508 3.555 1.445.937.964 1.419 2.149 1.445 3.555-.026 1.406-.508 2.591-1.445 3.555-.964.937-2.149 1.419-3.555 1.445h-4.18c-.677 0-1.289-.17-1.836-.508a3.278 3.278 0 0 1-1.25-1.406l-.156-.313c-.156-.338-.065-.611.274-.82.364-.156.638-.065.82.274l.195.312c.417.781 1.068 1.185 1.953 1.211h4.18c1.068-.026 1.953-.39 2.656-1.094.703-.703 1.068-1.588 1.094-2.656-.026-1.068-.39-1.953-1.094-2.656-.703-.703-1.588-1.068-2.656-1.094h-6.875a.63.63 0 0 1-.508-.234.78.78 0 0 1-.117-.547z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFiveRegularIcon);
export default ForwardRef;

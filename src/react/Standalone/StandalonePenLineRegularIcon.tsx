import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePenLineRegularIcon = (
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
      d='M21.547 8.063c-.443-.365-.886-.365-1.328 0l-2.149 2.109 3.008 3.008 2.11-2.149c.364-.443.364-.885 0-1.328l-1.641-1.64ZM7.992 20.25a2.858 2.858 0 0 0-.625 1.094l-1.054 3.593 3.593-1.054c.417-.13.781-.339 1.094-.625l9.18-9.18-3.008-3.008-9.18 9.18ZM19.32 7.164a2.205 2.205 0 0 1 1.563-.625c.573 0 1.08.208 1.523.625l1.68 1.68c.417.442.625.95.625 1.523 0 .6-.208 1.12-.625 1.563L11.859 24.156a3.701 3.701 0 0 1-1.562.938L5.57 26.46c-.26.078-.468.026-.625-.156-.182-.157-.234-.352-.156-.586l1.367-4.727a3.519 3.519 0 0 1 .977-1.601L19.32 7.164ZM14.125 25.25h12.5c.39.026.599.234.625.625-.026.39-.234.599-.625.625h-12.5c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenLineRegularIcon);
export default ForwardRef;

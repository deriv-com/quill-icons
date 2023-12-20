import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandalonePenRegularIcon = (
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
      d='m21.469 8.063-2.149 2.109 3.008 3.008 2.11-2.149c.364-.443.364-.885 0-1.328l-1.641-1.64c-.443-.365-.886-.365-1.328 0m-3.047 3.007-9.18 9.18a2.858 2.858 0 0 0-.625 1.094l-1.055 3.593 3.594-1.054c.417-.13.781-.339 1.094-.625l9.18-9.18zm5.234-3.906 1.68 1.68c.417.442.625.95.625 1.523 0 .6-.208 1.12-.625 1.563L13.109 24.117a3.536 3.536 0 0 1-1.562.977L6.82 26.46c-.26.078-.468.026-.625-.156-.182-.157-.234-.352-.156-.586l1.367-4.727a3.682 3.682 0 0 1 .938-1.601L20.57 7.164a2.205 2.205 0 0 1 1.563-.625c.573 0 1.08.208 1.523.625'
    />
  </svg>
);
const ForwardRef = forwardRef(StandalonePenRegularIcon);
export default ForwardRef;

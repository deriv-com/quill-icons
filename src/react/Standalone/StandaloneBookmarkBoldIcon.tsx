import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBookmarkBoldIcon = (
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
    <path d='M8.5 8.375q.039-.781.547-1.328.546-.508 1.328-.547v17.227l5.078-3.594q.548-.353 1.094 0l5.078 3.594V8.375h-11.25V6.5h11.25q.78.039 1.328.547.508.546.547 1.328v17.188q0 .547-.508.82a1 1 0 0 1-.976-.04L16 22.048l-6.016 4.297a1 1 0 0 1-.976.039.98.98 0 0 1-.508-.82z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBookmarkBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneChevronsLeftBoldIcon = (
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
    <path d='m7.836 15.836 7.5-7.5q.664-.547 1.328 0 .547.664 0 1.328L9.828 16.5l6.836 6.836q.547.664 0 1.328-.664.547-1.328 0l-7.5-7.5q-.548-.664 0-1.328m15-7.5q.664-.547 1.328 0 .547.664 0 1.328L17.328 16.5l6.836 6.836q.547.664 0 1.328-.664.547-1.328 0l-7.5-7.5q-.548-.664 0-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsLeftBoldIcon);
export default ForwardRef;

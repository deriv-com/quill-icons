import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneChevronsUpBoldIcon = (
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
    <path d='m16.664 8.336 7.5 7.5q.547.664 0 1.328-.664.547-1.328 0L16 10.328l-6.836 6.836q-.664.547-1.328 0-.548-.664 0-1.328l7.5-7.5q.664-.547 1.328 0m7.5 15q.547.664 0 1.328-.664.547-1.328 0L16 17.828l-6.836 6.836q-.664.547-1.328 0-.548-.664 0-1.328l7.5-7.5q.664-.548 1.328 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsUpBoldIcon);
export default ForwardRef;

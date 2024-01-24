import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneChevronsRightBoldIcon = (
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
    <path d='M24.164 15.836q.547.664 0 1.328l-7.5 7.5q-.664.547-1.328 0-.548-.664 0-1.328l6.836-6.836-6.836-6.836q-.548-.664 0-1.328.664-.547 1.328 0zm-15-7.5 7.5 7.5q.547.664 0 1.328l-7.5 7.5q-.664.547-1.328 0-.548-.664 0-1.328l6.836-6.836-6.836-6.836q-.548-.664 0-1.328.664-.547 1.328 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsRightBoldIcon);
export default ForwardRef;

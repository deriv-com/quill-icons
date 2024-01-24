import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneChevronDownBoldIcon = (
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
    <path d='m15.336 22.164-7.5-7.5q-.548-.664 0-1.328.664-.548 1.328 0L16 20.172l6.836-6.836q.664-.548 1.328 0 .547.664 0 1.328l-7.5 7.5q-.664.547-1.328 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronDownBoldIcon);
export default ForwardRef;

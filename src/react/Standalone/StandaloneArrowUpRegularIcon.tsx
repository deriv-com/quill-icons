import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpRegularIcon = (
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
    <path d='m16.43 7.945 6.875 6.875q.39.43 0 .86-.43.39-.86 0l-5.82-5.782v14.727q-.039.585-.625.625-.585-.039-.625-.625V9.898l-5.82 5.782q-.43.39-.86 0-.39-.43 0-.86l6.875-6.875q.43-.39.86 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRegularIcon);
export default ForwardRef;

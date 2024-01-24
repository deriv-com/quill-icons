import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowLeftToLineRegularIcon = (
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
    <path d='M7.25 23.375V9.625q.039-.585.625-.625.585.039.625.625v13.75q-.039.585-.625.625-.585-.039-.625-.625m3.945-7.305 5-5q.43-.39.86 0 .39.43 0 .86l-3.907 3.945h10.977q.585.039.625.625-.039.585-.625.625H13.148l3.907 3.945q.39.43 0 .86-.43.39-.86 0l-5-5q-.39-.43 0-.86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftToLineRegularIcon);
export default ForwardRef;

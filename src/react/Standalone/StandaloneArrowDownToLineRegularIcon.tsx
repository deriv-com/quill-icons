import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowDownToLineRegularIcon = (
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
    <path d='M9.125 25.25q-.585-.039-.625-.625.039-.585.625-.625h13.75q.585.039.625.625-.039.585-.625.625zm7.305-3.945q-.43.39-.86 0l-5-5q-.39-.43 0-.86.43-.39.86 0l3.945 3.907V8.375q.039-.585.625-.625.585.039.625.625v10.977l3.945-3.907q.43-.39.86 0 .39.43 0 .86z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownToLineRegularIcon);
export default ForwardRef;

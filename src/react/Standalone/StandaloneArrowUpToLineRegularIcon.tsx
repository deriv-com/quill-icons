import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpToLineRegularIcon = (
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
    <path d='M9.125 7.75h13.75q.585.039.625.625-.039.585-.625.625H9.125q-.585-.039-.625-.625.039-.585.625-.625m7.305 3.945 5 5q.39.43 0 .86-.43.39-.86 0l-3.945-3.907v10.977q-.039.585-.625.625-.585-.039-.625-.625V13.648l-3.945 3.907q-.43.39-.86 0-.39-.43 0-.86l5-5q.43-.39.86 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpToLineRegularIcon);
export default ForwardRef;

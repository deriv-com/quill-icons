import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpAZRegularIcon = (
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
    <path d='m11.43 7.945 3.75 3.75q.39.43 0 .86-.43.39-.86 0l-2.695-2.657v14.727q-.039.585-.625.625-.585-.039-.625-.625V9.898L7.68 12.555q-.43.39-.86 0-.39-.43 0-.86l3.75-3.75q.43-.39.86 0m7.07 9.805h5q.39 0 .547.352a.67.67 0 0 1-.04.664L19.79 24H23.5q.585.039.625.625-.039.585-.625.625h-5a.55.55 0 0 1-.547-.352.62.62 0 0 1 .078-.664L22.211 19H18.5q-.585-.039-.625-.625.039-.585.625-.625m2.5-10q.39 0 .547.352l2.5 5h.039l.586 1.25q.234.547-.274.82-.507.234-.82-.274L23.11 14h-4.218l-.47.898q-.272.508-.82.274-.508-.274-.273-.82l.625-1.25 2.5-5A.55.55 0 0 1 21 7.75m-1.484 5h2.968L21 9.781z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpAZRegularIcon);
export default ForwardRef;

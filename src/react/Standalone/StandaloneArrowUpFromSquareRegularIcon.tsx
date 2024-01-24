import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowUpFromSquareRegularIcon = (
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
    <path d='m16.43 6.695 4.062 4.063q.39.43 0 .86-.43.39-.86 0l-3.007-2.97V19q-.039.585-.625.625-.585-.039-.625-.625V8.648l-3.008 2.97q-.43.39-.86 0-.39-.43 0-.86l4.063-4.063q.43-.39.86 0M8.5 7.75h1.25q.585.039.625.625-.039.585-.625.625H8.5q-.547 0-.898.352-.352.35-.352.898V24q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898V10.25q0-.547-.352-.898Q24.048 9 23.5 9h-1.25q-.585-.039-.625-.625.039-.585.625-.625h1.25q1.055.039 1.758.742T26 10.25V24q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 25.054 6 24V10.25q.039-1.055.742-1.758T8.5 7.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpFromSquareRegularIcon);
export default ForwardRef;

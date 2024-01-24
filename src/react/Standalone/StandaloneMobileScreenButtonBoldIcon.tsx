import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneMobileScreenButtonBoldIcon = (
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
    <path d='M11 24q.039.585.625.625h8.75q.585-.039.625-.625v-3.125H11zm0-5h10V9q-.039-.585-.625-.625h-8.75Q11.04 8.414 11 9zM9.125 9q.039-1.055.742-1.758t1.758-.742h8.75q1.055.039 1.758.742.703.704.742 1.758v15q-.039 1.055-.742 1.758-.704.703-1.758.742h-8.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm5.625 13.125h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileScreenButtonBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneTabletScreenBoldIcon = (
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
    <path d='M9.125 24q.039.585.625.625h12.5q.585-.039.625-.625v-3.125H9.125zm0-5h13.75V9q-.039-.585-.625-.625H9.75q-.585.039-.625.625zM7.25 9q.039-1.055.742-1.758T9.75 6.5h12.5q1.055.039 1.758.742.703.704.742 1.758v15q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24zm7.5 13.125h2.5q.585.039.625.625-.039.585-.625.625h-2.5q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTabletScreenBoldIcon);
export default ForwardRef;

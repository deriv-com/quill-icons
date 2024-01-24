import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneTableLayoutBoldIcon = (
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
    <path d='M23.5 9.625h-15q-.586.039-.625.625v2.5h16.25v-2.5q-.039-.585-.625-.625M7.875 22.75q.039.585.625.625h3.125v-8.75h-3.75zm5.625.625h10q.585-.039.625-.625v-8.125H13.5zM8.5 7.75h15q1.055.039 1.758.742T26 10.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75v-12.5q.039-1.055.742-1.758T8.5 7.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTableLayoutBoldIcon);
export default ForwardRef;

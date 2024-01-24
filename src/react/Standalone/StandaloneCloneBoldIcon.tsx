import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCloneBoldIcon = (
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
    <path d='M8.5 24.625h8.75q.585-.039.625-.625v-2.5h1.875V24q-.039 1.055-.742 1.758-.704.703-1.758.742H8.5q-1.055-.039-1.758-.742Q6.04 25.054 6 24v-8.75q.039-1.055.742-1.758T8.5 12.75H11v1.875H8.5q-.586.039-.625.625V24q.039.585.625.625m6.25-6.25h8.75q.585-.039.625-.625V9q-.039-.585-.625-.625h-8.75q-.585.039-.625.625v8.75q.039.585.625.625m-2.5-.625V9q.039-1.055.742-1.758T14.75 6.5h8.75q1.055.039 1.758.742Q25.96 7.946 26 9v8.75q-.039 1.055-.742 1.758-.704.703-1.758.742h-8.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCloneBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneEnvelopeBoldIcon = (
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
    <path d='M8.5 10.875q-.586.039-.625.625v.86l6.758 5.546q.625.47 1.367.469.781 0 1.406-.469l6.719-5.547V11.5q-.039-.585-.625-.625zm-.625 3.906V21.5q.039.585.625.625h15q.585-.039.625-.625v-6.719l-5.547 4.57q-1.171.9-2.578.899-1.406 0-2.578-.898zM6 11.5q.039-1.055.742-1.758T8.5 9h15q1.055.039 1.758.742T26 11.5v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 22.554 6 21.5z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneEnvelopeBoldIcon);
export default ForwardRef;

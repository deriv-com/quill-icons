import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneImageRegularIcon = (
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
    <path d='M8.5 9q-.547 0-.898.352-.352.35-.352.898v9.102l2.656-2.618A1.5 1.5 0 0 1 11 16.266a1.5 1.5 0 0 1 1.094.468l2.656 2.618 5.156-5.118A1.5 1.5 0 0 1 21 13.766a1.5 1.5 0 0 1 1.094.468l2.656 2.618V10.25q0-.547-.352-.898Q24.048 9 23.5 9zM7.25 21.148v1.602q0 .547.352.898.35.352.898.352h1.602l3.75-3.75-2.618-2.656a.39.39 0 0 0-.468 0zm13.984-6.054a.39.39 0 0 0-.468 0L11.898 24H23.5q.547 0 .898-.352.352-.35.352-.898v-4.102zM6 10.25q.039-1.055.742-1.758T8.5 7.75h15q1.055.039 1.758.742T26 10.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75zm6.25 1.875q-.039-.585-.625-.625-.585.039-.625.625.039.585.625.625.585-.039.625-.625m-2.5 0q.038-1.055.938-1.64.937-.47 1.874 0 .9.585.938 1.64-.039 1.055-.937 1.64-.938.47-1.876 0-.898-.585-.937-1.64' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneImageRegularIcon);
export default ForwardRef;

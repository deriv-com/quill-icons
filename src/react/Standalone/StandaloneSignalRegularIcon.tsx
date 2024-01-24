import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSignalRegularIcon = (
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
    <path d='M26.625 7.125v18.75q-.039.585-.625.625-.585-.039-.625-.625V7.125q.039-.585.625-.625.585.039.625.625M21 10.25q.585.039.625.625v15q-.039.585-.625.625-.585-.039-.625-.625v-15q.039-.585.625-.625m-4.375 4.375v11.25q-.039.585-.625.625-.585-.039-.625-.625v-11.25q.039-.585.625-.625.585.039.625.625M11 17.75q.585.039.625.625v7.5q-.039.585-.625.625-.585-.039-.625-.625v-7.5q.039-.585.625-.625M6 21.5q.585.039.625.625v3.75q-.039.585-.625.625-.585-.039-.625-.625v-3.75q.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSignalRegularIcon);
export default ForwardRef;

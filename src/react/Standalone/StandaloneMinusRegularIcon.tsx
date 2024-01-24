import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneMinusRegularIcon = (
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
    <path d='M24.125 16.5q-.039.585-.625.625h-15q-.586-.039-.625-.625.039-.585.625-.625h15q.585.039.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMinusRegularIcon);
export default ForwardRef;

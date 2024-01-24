import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowDownLeftRegularIcon = (
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
    <path d='M10.375 22.75q-.585-.039-.625-.625v-8.75q.039-.585.625-.625.585.039.625.625v7.227l10.195-10.157q.43-.39.86 0 .39.43 0 .86L11.898 21.5h7.227q.585.039.625.625-.039.585-.625.625z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowDownLeftRegularIcon);
export default ForwardRef;

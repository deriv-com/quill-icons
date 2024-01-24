import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePauseRegularIcon = (
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
    <path d='M11.625 10.25q-.585.039-.625.625v11.25q.039.585.625.625H13.5q.585-.039.625-.625v-11.25q-.039-.585-.625-.625zm-1.875.625q.039-.781.547-1.328.546-.508 1.328-.547H13.5q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-1.875a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm8.75-.625q-.585.039-.625.625v11.25q.039.585.625.625h1.875q.585-.039.625-.625v-11.25q-.039-.585-.625-.625zm-1.875.625q.039-.781.547-1.328.546-.508 1.328-.547h1.875q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547H18.5a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePauseRegularIcon);
export default ForwardRef;

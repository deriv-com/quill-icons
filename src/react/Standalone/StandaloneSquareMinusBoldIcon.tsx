import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSquareMinusBoldIcon = (
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
    <path d='M9.75 9.625q-.585.039-.625.625v12.5q.039.585.625.625h12.5q.585-.039.625-.625v-12.5q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T9.75 7.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758zm5.938 5.313h5.624q.86.078.938.937-.078.859-.937.938h-5.625q-.86-.079-.938-.938.078-.86.938-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareMinusBoldIcon);
export default ForwardRef;

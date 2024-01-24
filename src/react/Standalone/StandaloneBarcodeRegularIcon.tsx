import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneBarcodeRegularIcon = (
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
    <path d='M6 8.375q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625zm2.5 0q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625zm3.125-.625q.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625V8.375q.039-.585.625-.625m3.125.625q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625zm3.125-.625q.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625V8.375q.039-.585.625-.625M21 8.375q.039-.585.625-.625.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625zm4.375-.625q.585.039.625.625v16.25q-.039.585-.625.625-.585-.039-.625-.625V8.375q.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarcodeRegularIcon);
export default ForwardRef;

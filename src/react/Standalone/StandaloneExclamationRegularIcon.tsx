import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneExclamationRegularIcon = (
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
    <path d='M16.625 8.375V20.25q-.039.585-.625.625-.585-.039-.625-.625V8.375q.039-.585.625-.625.585.039.625.625M16 24.938q-.86-.079-.937-.938.078-.86.937-.937.859.078.938.937-.079.859-.938.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneExclamationRegularIcon);
export default ForwardRef;

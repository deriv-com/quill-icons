import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneMobileNotchRegularIcon = (
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
    <path d='M18.5 7.75v.625q0 .547-.352.898-.35.352-.898.352h-2.5q-.547 0-.898-.352-.352-.35-.352-.898V7.75h-1.25q-.547 0-.898.352Q11 8.452 11 9v15q0 .547.352.898.35.352.898.352h7.5q.547 0 .898-.352Q21 24.548 21 24V9q0-.547-.352-.898-.35-.352-.898-.352zm-1.25 0h-2.5v.625h2.5zM9.75 9q.039-1.055.742-1.758T12.25 6.5h7.5q1.055.039 1.758.742.703.704.742 1.758v15q-.039 1.055-.742 1.758-.704.703-1.758.742h-7.5q-1.055-.039-1.758-.742Q9.79 25.054 9.75 24z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileNotchRegularIcon);
export default ForwardRef;

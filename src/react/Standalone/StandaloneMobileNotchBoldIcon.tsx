import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneMobileNotchBoldIcon = (
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
    <path d='M18.5 8.375V9q-.039.585-.625.625h-3.75Q13.54 9.586 13.5 9v-.625h-1.25q-.547 0-.898.352-.352.35-.352.898v13.75q0 .547.352.898.35.352.898.352h7.5q.547 0 .898-.352.352-.35.352-.898V9.625q0-.547-.352-.898-.35-.352-.898-.352zm-9.375 1.25q.04-1.328.898-2.227.9-.859 2.227-.898h7.5q1.328.04 2.227.898.858.9.898 2.227v13.75q-.04 1.328-.898 2.227-.9.858-2.227.898h-7.5q-1.328-.04-2.227-.898-.858-.9-.898-2.227z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneMobileNotchBoldIcon);
export default ForwardRef;

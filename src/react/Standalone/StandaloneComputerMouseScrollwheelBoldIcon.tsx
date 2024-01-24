import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneComputerMouseScrollwheelBoldIcon = (
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
    <path d='M21.625 20.25v-7.5q-.039-1.875-1.29-3.086-1.21-1.25-3.085-1.289h-2.5q-1.875.039-3.086 1.29-1.25 1.21-1.289 3.085v7.5q.039 1.875 1.29 3.086 1.21 1.25 3.085 1.289h2.5q1.875-.039 3.086-1.29 1.25-1.21 1.289-3.085M8.5 12.75q.078-2.656 1.836-4.414T14.75 6.5h2.5q2.656.078 4.414 1.836T23.5 12.75v7.5q-.078 2.656-1.836 4.414T17.25 26.5h-2.5q-2.655-.078-4.414-1.836T8.5 20.25zm7.5-2.5q.547 0 .898.352.352.35.352.898v1.25q0 .547-.352.898Q16.548 14 16 14q-.547 0-.898-.352-.352-.35-.352-.898V11.5q0-.547.352-.898.35-.352.898-.352' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneComputerMouseScrollwheelBoldIcon);
export default ForwardRef;

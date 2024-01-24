import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCalendarRangeBoldIcon = (
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
    <path d='M13.188 7.438V9h5.624V7.438q.079-.86.938-.938.859.078.938.938V9h1.562q1.055.039 1.758.742t.742 1.758V24q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24V11.5q.039-1.055.742-1.758T9.75 9h1.563V7.438q.078-.86.937-.938.859.078.938.938M9.125 14v10q.039.585.625.625h12.5q.585-.039.625-.625V14zM11 17.75q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898m8.75 2.5q.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352-.547 0-.898-.352-.352-.35-.352-.898 0-.547.352-.898.35-.352.898-.352m-5-2.5q.078-.86.938-.937h4.374q.86.078.938.937-.078.859-.937.938h-4.375q-.86-.079-.938-.938m1.563 2.813q.858.078.937.937-.078.859-.937.938h-4.375q-.86-.079-.938-.938.078-.86.938-.937z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarRangeBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCalendarBoldIcon = (
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
    <path d='M13.188 7.438V9h5.624V7.438q.079-.86.938-.938.859.078.938.938V9h1.562q1.055.039 1.758.742t.742 1.758V24q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24V11.5q.039-1.055.742-1.758T9.75 9h1.563V7.438q.078-.86.937-.938.859.078.938.938M9.125 14v10q.039.585.625.625h12.5q.585-.039.625-.625V14z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCalendarBoldIcon);
export default ForwardRef;

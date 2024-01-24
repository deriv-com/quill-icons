import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneLockBoldIcon = (
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
    <path d='M12.875 11.5V14h6.25v-2.5q-.04-1.328-.898-2.227-.9-.858-2.227-.898-1.328.04-2.227.898-.858.9-.898 2.227M11 14v-2.5q.04-2.109 1.445-3.555Q13.891 6.54 16 6.5q2.109.04 3.555 1.445Q20.96 9.391 21 11.5V14h1.25q1.055.039 1.758.742t.742 1.758V24q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742Q7.29 25.054 7.25 24v-7.5q.039-1.055.742-1.758T9.75 14zm-1.875 2.5V24q.039.585.625.625h12.5q.585-.039.625-.625v-7.5q-.039-.585-.625-.625H9.75q-.585.039-.625.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneLockBoldIcon);
export default ForwardRef;

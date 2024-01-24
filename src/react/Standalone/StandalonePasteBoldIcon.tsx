import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePasteBoldIcon = (
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
    <path d='M9.125 10.25H8.5q-.586.039-.625.625V21.5q.039.585.625.625h3.75V24H8.5q-1.055-.039-1.758-.742Q6.04 22.554 6 21.5V10.875q.039-1.055.742-1.758T8.5 8.375h1.602q.117-.82.703-1.328.585-.547 1.445-.547t1.445.547q.585.507.703 1.328H16q.898 0 1.563.547.624.507.859 1.328H16q-1.054 0-1.914.508-.82.507-1.328 1.367h-2.383q-.547 0-.898-.352-.352-.35-.352-.898zm2.5-1.562q.039.585.625.624.585-.039.625-.624-.039-.587-.625-.626-.585.04-.625.626M16 24.624h7.5q.585-.039.625-.625v-7.5H22.25q-.547 0-.898-.352-.352-.35-.352-.898v-1.875h-5q-.585.039-.625.625v10q.039.585.625.625m7.5 1.875H16q-1.055-.039-1.758-.742-.703-.704-.742-1.758V14q.039-1.055.742-1.758T16 11.5h6.094q.78 0 1.328.547l2.031 2.031q.547.547.547 1.328V24q-.039 1.055-.742 1.758-.704.703-1.758.742' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePasteBoldIcon);
export default ForwardRef;

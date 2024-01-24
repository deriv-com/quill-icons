import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneImagePolaroidUserBoldIcon = (
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
    <path d='M9.125 22.75q.039.585.625.625h12.5q.585-.039.625-.625v-1.875H9.125zM20.297 19h2.578v-8.75q-.039-.585-.625-.625H9.75q-.585.039-.625.625V19h2.578q.234-.82.86-1.328a2.38 2.38 0 0 1 1.562-.547h3.75q.898 0 1.563.547.624.507.859 1.328m4.453-8.75v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-12.5q.039-1.055.742-1.758T9.75 7.75h12.5q1.055.039 1.758.742t.742 1.758M13.5 13.375q.04-1.406 1.25-2.148 1.25-.705 2.5 0 1.21.741 1.25 2.148-.04 1.407-1.25 2.148-1.25.705-2.5 0-1.21-.741-1.25-2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneImagePolaroidUserBoldIcon);
export default ForwardRef;

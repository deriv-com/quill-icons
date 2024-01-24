import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneImagePolaroidUserRegularIcon = (
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
    <path d='M20.375 21.5H8.5v1.25q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898V21.5zm-.078-1.25H23.5v-10q0-.547-.352-.898Q22.798 9 22.25 9H9.75q-.547 0-.898.352-.352.35-.352.898v10h3.203a3.18 3.18 0 0 1 1.055-1.797q.82-.664 1.992-.703h2.5q1.172.039 1.992.703a3.18 3.18 0 0 1 1.055 1.797m-7.305 0h6.016q-.47-1.172-1.758-1.25h-2.5q-1.29.078-1.758 1.25m11.758-10v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-12.5q.039-1.055.742-1.758T9.75 7.75h12.5q1.055.039 1.758.742t.742 1.758M17.25 14q0-.547-.352-.898-.35-.352-.898-.352-.547 0-.898.352-.352.35-.352.898 0 .547.352.898.35.352.898.352.547 0 .898-.352.352-.35.352-.898M16 11.5q1.407.04 2.148 1.25.705 1.25 0 2.5-.741 1.21-2.148 1.25-1.406-.04-2.148-1.25-.705-1.25 0-2.5.741-1.21 2.148-1.25' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneImagePolaroidUserRegularIcon);
export default ForwardRef;

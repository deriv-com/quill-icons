import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSquareRegularIcon = (
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
    <path d='M22.25 9H9.75q-.547 0-.898.352-.352.35-.352.898v12.5q0 .547.352.898.35.352.898.352h12.5q.547 0 .898-.352.352-.35.352-.898v-12.5q0-.547-.352-.898Q22.798 9 22.25 9M9.75 7.75h12.5q1.055.039 1.758.742t.742 1.758v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742H9.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758v-12.5q.039-1.055.742-1.758T9.75 7.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSquareRegularIcon);
export default ForwardRef;

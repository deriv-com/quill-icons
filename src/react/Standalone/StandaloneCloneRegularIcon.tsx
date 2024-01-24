import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCloneRegularIcon = (
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
    <path d='M8.5 25.25h8.75q.547 0 .898-.352.352-.35.352-.898v-2.5h1.25V24q-.039 1.055-.742 1.758-.704.703-1.758.742H8.5q-1.055-.039-1.758-.742Q6.04 25.054 6 24v-8.75q.039-1.055.742-1.758T8.5 12.75H11V14H8.5q-.547 0-.898.352-.352.35-.352.898V24q0 .547.352.898.35.352.898.352M14.75 19h8.75q.547 0 .898-.352.352-.35.352-.898V9q0-.547-.352-.898-.35-.352-.898-.352h-8.75q-.547 0-.898.352-.352.35-.352.898v8.75q0 .547.352.898.35.352.898.352m-2.5-1.25V9q.039-1.055.742-1.758T14.75 6.5h8.75q1.055.039 1.758.742Q25.96 7.946 26 9v8.75q-.039 1.055-.742 1.758-.704.703-1.758.742h-8.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCloneRegularIcon);
export default ForwardRef;

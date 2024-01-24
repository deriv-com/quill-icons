import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneTableLayoutRegularIcon = (
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
    <path d='M23.5 9h-15q-.547 0-.898.352-.352.35-.352.898v2.5h17.5v-2.5q0-.547-.352-.898Q24.048 9 23.5 9M7.25 22.75q0 .547.352.898.35.352.898.352h3.75V14h-5zM13.5 24h10q.547 0 .898-.352.352-.35.352-.898V14H13.5zm-5-16.25h15q1.055.039 1.758.742T26 10.25v12.5q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q6.04 23.804 6 22.75v-12.5q.039-1.055.742-1.758T8.5 7.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneTableLayoutRegularIcon);
export default ForwardRef;

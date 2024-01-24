import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowRightToLineBoldIcon = (
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
    <path d='M24.75 9.938v13.125q-.079.858-.937.937-.86-.079-.938-.937V9.938q.078-.86.938-.938.858.078.937.938m-5.312 7.265.039-.039-5.313 5q-.703.547-1.328-.039-.548-.664.039-1.29l3.594-3.398H8.187q-.859-.078-.937-.937.078-.86.938-.937h8.28l-3.593-3.399q-.586-.625-.04-1.289.626-.585 1.29-.04l5.313 5a.85.85 0 0 1 .312.665q0 .39-.312.703' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightToLineBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneWindowMinimizeBoldIcon = (
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
    <path d='M6.938 23.375h18.125q.858.078.937.938-.079.858-.937.937H6.938q-.86-.079-.938-.937.078-.86.938-.938' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneWindowMinimizeBoldIcon);
export default ForwardRef;

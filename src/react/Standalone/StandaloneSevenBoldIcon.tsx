import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneSevenBoldIcon = (
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
    <path d='M9.75 8.688q.078-.86.938-.938h10.625a.89.89 0 0 1 .82.469 1 1 0 0 1 0 .937l-9.375 15.625q-.508.703-1.29.352-.702-.508-.312-1.29l8.516-14.218h-8.984q-.86-.079-.938-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneSevenBoldIcon);
export default ForwardRef;

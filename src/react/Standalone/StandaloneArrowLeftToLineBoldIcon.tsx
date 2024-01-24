import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowLeftToLineBoldIcon = (
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
    <path d='M7.25 23.063V9.938q.078-.86.938-.938.858.078.937.938v13.125q-.079.858-.937.937-.86-.079-.938-.937m5.313-7.227 5.312-5q.664-.548 1.29.039.546.664-.04 1.328l-3.555 3.36h8.242q.86.078.938.937-.079.859-.937.938H15.57l3.594 3.398q.547.626.04 1.328-.665.547-1.329.04l-5.312-5q-.313-.315-.313-.704 0-.39.313-.664' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftToLineBoldIcon);
export default ForwardRef;

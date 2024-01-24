import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePauseFillIcon = (
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
    <path d='M11.625 9h1.25q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-1.25a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-11.25q.039-.781.547-1.328.546-.508 1.328-.547m7.5 0h1.25q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-1.25a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328v-11.25q.039-.781.547-1.328.546-.508 1.328-.547' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePauseFillIcon);
export default ForwardRef;

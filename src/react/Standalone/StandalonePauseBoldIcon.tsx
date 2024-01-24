import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandalonePauseBoldIcon = (
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
    <path d='M11.625 10.875v11.25H13.5v-11.25zm-1.875 0q.039-.781.547-1.328.546-.508 1.328-.547H13.5q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547h-1.875a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zm8.75 0v11.25h1.875v-11.25zm-1.875 0q.039-.781.547-1.328.546-.508 1.328-.547h1.875q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547H18.5a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePauseBoldIcon);
export default ForwardRef;

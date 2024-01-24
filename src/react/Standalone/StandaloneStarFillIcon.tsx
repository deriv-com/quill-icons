import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneStarFillIcon = (
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
    <path d='m17.133 7.203 2.5 5.156 5.625.86q.742.117 1.015.82.195.743-.312 1.29l-4.063 4.023.938 5.703q.117.742-.508 1.21-.624.43-1.289.079L16 23.687l-5 2.657q-.704.351-1.328-.078-.586-.469-.508-1.211l.977-5.703-4.063-4.024q-.547-.546-.312-1.289.234-.703.976-.82l5.625-.86 2.5-5.156Q15.257 6.54 16 6.5q.78.039 1.133.703' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneStarFillIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleEnvelopeBoldIcon = (
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
    <path d='M16 8.375q-2.226 0-4.062 1.094-1.837 1.055-2.97 2.969A8.06 8.06 0 0 0 7.876 16.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968 1.835 1.094 4.062 1.094t4.063-1.094q1.836-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q18.226 8.377 16 8.376M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m-.273-10L11 13.883q.039-.47.39-.781a1.17 1.17 0 0 1 .86-.352h7.5q.507 0 .86.313.351.35.39.82L16.273 16.5a.5.5 0 0 1-.273.078 4 4 0 0 1-.273-.078m1.171 1.094L21 15.328V19q0 .547-.352.898-.35.352-.898.352h-7.5q-.547 0-.898-.352Q11 19.548 11 19v-3.672l4.102 2.266q.429.195.898.195t.898-.195' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleEnvelopeBoldIcon);
export default ForwardRef;

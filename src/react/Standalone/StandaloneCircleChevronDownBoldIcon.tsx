import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleChevronDownBoldIcon = (
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
    <path d='M16 24.625q2.227 0 4.063-1.094 1.836-1.054 2.968-2.968a8.06 8.06 0 0 0 1.094-4.063 8.06 8.06 0 0 0-1.094-4.062q-1.132-1.915-2.968-2.97Q18.226 8.377 16 8.376t-4.062 1.094q-1.837 1.055-2.97 2.969A8.06 8.06 0 0 0 7.876 16.5q0 2.148 1.094 4.063 1.133 1.914 2.969 2.968 1.835 1.094 4.062 1.094M16 6.5q2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328m-4.727 9.414q-.546-.664 0-1.328.664-.548 1.329 0L16 17.984l3.398-3.398q.665-.548 1.329 0 .546.664 0 1.328l-4.063 4.063q-.664.546-1.328 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleChevronDownBoldIcon);
export default ForwardRef;

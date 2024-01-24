import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleDotFillIcon = (
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
    <path d='M16 26.5q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m0-13.75a3.6 3.6 0 0 0-1.875.508A3.759 3.759 0 0 0 12.25 16.5a3.76 3.76 0 0 0 1.875 3.242A3.6 3.6 0 0 0 16 20.25a3.6 3.6 0 0 0 1.875-.508A3.759 3.759 0 0 0 19.75 16.5a3.76 3.76 0 0 0-1.875-3.242A3.6 3.6 0 0 0 16 12.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleDotFillIcon);
export default ForwardRef;

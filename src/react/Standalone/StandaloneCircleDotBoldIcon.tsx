import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleDotBoldIcon = (
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
    <path d='M24.125 16.5q0-2.226-1.094-4.062-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 16 8.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062t1.094 4.063q1.055 1.836 2.969 2.968A8.06 8.06 0 0 0 16 24.625a8.06 8.06 0 0 0 4.063-1.094q1.914-1.132 2.968-2.968 1.094-1.837 1.094-4.063M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m10-3.75q1.015 0 1.875.508A3.759 3.759 0 0 1 19.75 16.5a3.76 3.76 0 0 1-1.875 3.242A3.6 3.6 0 0 1 16 20.25a3.6 3.6 0 0 1-1.875-.508A3.759 3.759 0 0 1 12.25 16.5a3.76 3.76 0 0 1 1.875-3.242A3.6 3.6 0 0 1 16 12.75' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleDotBoldIcon);
export default ForwardRef;

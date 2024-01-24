import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleSortDownBoldIcon = (
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
    <path d='M7.875 16.5q0 2.227 1.094 4.063 1.055 1.836 2.969 2.968A8.06 8.06 0 0 0 16 24.625a8.06 8.06 0 0 0 4.063-1.094q1.914-1.132 2.968-2.968 1.094-1.837 1.094-4.063t-1.094-4.062q-1.054-1.837-2.968-2.97A8.06 8.06 0 0 0 16 8.376a8.06 8.06 0 0 0-4.062 1.094q-1.915 1.133-2.97 2.969-1.092 1.835-1.093 4.062M26 16.5q-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5 .04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5m-9.57 6.055q-.43.39-.86 0l-3.75-3.75q-.273-.274-.156-.664.196-.39.586-.391h7.5q.39.039.586.39.117.391-.156.665zm0-12.11 3.75 3.75q.273.274.156.664-.195.39-.586.391h-7.5a.72.72 0 0 1-.586-.39q-.117-.391.156-.665l3.75-3.75q.43-.39.86 0M18.227 14 16 11.773 13.773 14z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSortDownBoldIcon);
export default ForwardRef;

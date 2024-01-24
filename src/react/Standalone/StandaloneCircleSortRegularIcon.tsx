import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneCircleSortRegularIcon = (
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
    <path d='M24.75 16.5q-.04-2.383-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.305 7.75 16 7.75t-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.289 14.117 7.25 16.5q.04 2.383 1.172 4.375a9 9 0 0 0 3.203 3.203Q13.695 25.25 16 25.25t4.375-1.172a9 9 0 0 0 3.203-3.203q1.133-1.992 1.172-4.375M6 16.5q.04-2.735 1.328-5Q8.657 9.235 11 7.828 13.382 6.5 16 6.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q8.657 23.765 7.328 21.5q-1.29-2.265-1.328-5m9.57-6.055q.43-.39.86 0l3.75 3.75q.273.274.156.664a.72.72 0 0 1-.586.391h-7.5q-.39 0-.586-.39-.117-.391.156-.665zM13.773 14h4.454L16 11.773zm-1.953 4.805q-.273-.274-.156-.664a.72.72 0 0 1 .586-.391h7.5q.39 0 .586.39.117.391-.156.665l-3.75 3.75q-.43.39-.86 0zM16 21.227 18.227 19h-4.454z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleSortRegularIcon);
export default ForwardRef;

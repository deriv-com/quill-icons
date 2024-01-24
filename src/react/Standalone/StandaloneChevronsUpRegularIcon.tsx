import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneChevronsUpRegularIcon = (
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
    <path d='m16.43 8.57 7.5 7.5q.39.43 0 .86-.43.39-.86 0L16 9.898 8.93 16.93q-.43.39-.86 0-.39-.43 0-.86l7.5-7.5q.43-.39.86 0m7.5 15q.39.43 0 .86-.43.39-.86 0L16 17.398 8.93 24.43q-.43.39-.86 0-.39-.43 0-.86l7.5-7.5q.43-.39.86 0z' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsUpRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneXmarkRegularIcon = (
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
    <path d='M21.195 22.555 16 17.398l-5.156 5.157q-.469.351-.899 0-.351-.43 0-.86l5.157-5.195-5.157-5.156q-.351-.469 0-.899.43-.351.899 0L16 15.602l5.195-5.157q.43-.351.86 0 .351.43 0 .899L16.898 16.5l5.157 5.195q.351.43 0 .86-.43.351-.86 0' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneXmarkRegularIcon);
export default ForwardRef;

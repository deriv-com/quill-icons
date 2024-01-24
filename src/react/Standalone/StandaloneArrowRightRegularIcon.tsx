import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowRightRegularIcon = (
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
    <path d='m24.555 16.93-6.875 6.875q-.43.39-.86 0-.39-.43 0-.86l5.782-5.82H7.875q-.585-.039-.625-.625.039-.585.625-.625h14.727l-5.782-5.82q-.39-.43 0-.86.43-.39.86 0l6.875 6.875q.39.43 0 .86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
export const StandaloneArrowLeftRegularIcon = (
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
    <path d='m7.445 16.07 6.875-6.875q.43-.39.86 0 .39.43 0 .86l-5.782 5.82h14.727q.585.039.625.625-.039.585-.625.625H9.398l5.782 5.82q.39.43 0 .86-.43.39-.86 0L7.445 16.93q-.39-.43 0-.86' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftRegularIcon);
export default ForwardRef;

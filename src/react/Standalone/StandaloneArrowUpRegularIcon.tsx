import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowUpRegularIcon = (
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
    <path
      fillOpacity={0.72}
      d='m16.43 7.945 6.875 6.875c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-5.82-5.782v14.727c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V9.898l-5.82 5.782c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l6.875-6.875c.287-.26.573-.26.86 0Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowUpRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneArrowRightToLineRegularIcon = (
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
      d='M24.75 9.625v13.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V9.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625Zm-3.945 7.305-5 5c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.907-3.945H7.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h10.977l-3.907-3.945c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l5 5c.26.287.26.573 0 .86Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightToLineRegularIcon);
export default ForwardRef;

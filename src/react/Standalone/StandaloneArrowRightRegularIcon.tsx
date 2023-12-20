import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
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
    <path
      fillOpacity={0.72}
      d='m24.555 16.93-6.875 6.875c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l5.782-5.82H7.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h14.727l-5.782-5.82c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l6.875 6.875c.26.287.26.573 0 .86'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowRightRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
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
    <path
      fillOpacity={0.72}
      d='m7.445 16.07 6.875-6.875c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-5.782 5.82h14.727c.39.026.599.234.625.625-.026.39-.234.599-.625.625H9.398l5.782 5.82c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L7.445 16.93c-.26-.287-.26-.573 0-.86Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneArrowLeftRegularIcon);
export default ForwardRef;

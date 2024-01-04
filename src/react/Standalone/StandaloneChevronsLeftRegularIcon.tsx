import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronsLeftRegularIcon = (
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
      d='m8.07 16.07 7.5-7.5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86L9.398 16.5l7.032 7.07c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86Zm15-7.5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.032 7.07 7.032 7.07c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86l7.5-7.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsLeftRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronsDownRegularIcon = (
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
      d='M8.07 9.43c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L16 15.602l7.07-7.032c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.5 7.5c-.287.26-.573.26-.86 0zm0 7.5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L16 23.102l7.07-7.032c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.5 7.5c-.287.26-.573.26-.86 0z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsDownRegularIcon);
export default ForwardRef;

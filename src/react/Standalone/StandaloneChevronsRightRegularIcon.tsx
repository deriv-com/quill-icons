import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronsRightRegularIcon = (
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
      d='M8.93 24.43c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.032-7.07L8.07 9.43c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l7.5 7.5c.26.287.26.573 0 .86l-7.5 7.5Zm7.5 0c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.032-7.07-7.032-7.07c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l7.5 7.5c.26.287.26.573 0 .86l-7.5 7.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronsRightRegularIcon);
export default ForwardRef;

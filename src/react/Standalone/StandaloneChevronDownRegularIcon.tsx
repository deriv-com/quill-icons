import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronDownRegularIcon = (
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
      d='M16.43 21.93c-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L16 20.602l7.07-7.032c.287-.26.573-.26.86 0 .26.287.26.573 0 .86z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronDownRegularIcon);
export default ForwardRef;

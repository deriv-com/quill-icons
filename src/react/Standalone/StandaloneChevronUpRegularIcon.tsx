import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChevronUpRegularIcon = (
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
      d='M15.57 11.07c.287-.26.573-.26.86 0l7.5 7.5c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L16 12.398 8.93 19.43c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.5-7.5Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChevronUpRegularIcon);
export default ForwardRef;

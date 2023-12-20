import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsRightLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.93 23.43c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.032-7.07L2.07 8.43c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l7.5 7.5c.26.287.26.573 0 .86zm7.5 0c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.032-7.07L9.57 8.43c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l7.5 7.5c.26.287.26.573 0 .86z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightLgRegularIcon);
export default ForwardRef;

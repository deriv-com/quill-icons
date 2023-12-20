import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsDownLgRegularIcon = (
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
        d='M2.07 8.43c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L10 14.602l7.07-7.032c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.5 7.5c-.287.26-.573.26-.86 0zm0 7.5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0L10 22.102l7.07-7.032c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.5 7.5c-.287.26-.573.26-.86 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownLgRegularIcon);
export default ForwardRef;

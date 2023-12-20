import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsLeftLgRegularIcon = (
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
        d='m2.07 15.07 7.5-7.5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86L3.398 15.5l7.032 7.07c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86m15-7.5c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-7.032 7.07 7.032 7.07c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-7.5-7.5c-.26-.287-.26-.573 0-.86z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgRegularIcon);
export default ForwardRef;

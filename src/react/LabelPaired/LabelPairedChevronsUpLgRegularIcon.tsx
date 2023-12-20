import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsUpLgRegularIcon = (
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
        d='m10.43 7.57 7.5 7.5c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L10 8.898 2.93 15.93c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.5-7.5c.287-.26.573-.26.86 0m7.5 15c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L10 16.398 2.93 23.43c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l7.5-7.5c.287-.26.573-.26.86 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgRegularIcon);
export default ForwardRef;

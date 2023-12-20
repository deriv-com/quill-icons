import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m17.555 15.93-6.875 6.875c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l5.782-5.82H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h14.727L9.82 9.055c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l6.875 6.875c.26.287.26.573 0 .86'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgRegularIcon);
export default ForwardRef;

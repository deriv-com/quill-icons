import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftLgRegularIcon = (
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
        d='M.445 15.07 7.32 8.195c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-5.782 5.82h14.727c.39.026.599.234.625.625-.026.39-.234.599-.625.625H2.398l5.782 5.82c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L.445 15.93c-.26-.287-.26-.573 0-.86'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftLgRegularIcon = (
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
        d='m17.555 10.93-3.75 3.75c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l2.657-2.695H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h14.727L12.945 7.18c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l3.75 3.75c.26.287.26.573 0 .86M4.195 24.68l-3.75-3.75c-.26-.287-.26-.573 0-.86l3.75-3.75c.287-.26.573-.26.86 0 .26.287.26.573 0 .86l-2.657 2.695h14.727c.39.026.599.234.625.625-.026.39-.234.599-.625.625H2.398l2.657 2.695c.26.287.26.573 0 .86-.287.26-.573.26-.86 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftLgRegularIcon);
export default ForwardRef;

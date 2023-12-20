import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineLgRegularIcon = (
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
        d='M17.75 8.625v13.75c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.625c.026-.39.234-.599.625-.625.39.026.599.234.625.625m-3.945 7.305-5 5c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.907-3.945H.875c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h10.977L7.945 10.93c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l5 5c.26.287.26.573 0 .86'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineLgRegularIcon);
export default ForwardRef;

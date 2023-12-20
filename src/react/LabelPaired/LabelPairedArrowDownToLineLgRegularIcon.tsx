import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToLineLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.625 24.25c-.39-.026-.599-.234-.625-.625.026-.39.234-.599.625-.625h13.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625zm7.305-3.945c-.287.26-.573.26-.86 0l-5-5c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l3.945 3.907V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v10.977l3.945-3.907c.287-.26.573-.26.86 0 .26.287.26.573 0 .86z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineLgRegularIcon);
export default ForwardRef;

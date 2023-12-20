import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownLgRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 23 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m6.93 6.945 3.75 3.75c.26.287.26.573 0 .86-.287.26-.573.26-.86 0L7.125 8.898v14.727c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.898L3.18 11.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l3.75-3.75c.287-.26.573-.26.86 0m13.75 13.36-3.75 3.75c-.287.26-.573.26-.86 0l-3.75-3.75c-.26-.287-.26-.573 0-.86.287-.26.573-.26.86 0l2.695 2.657V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625v14.727l2.695-2.657c.287-.26.573-.26.86 0 .26.287.26.573 0 .86'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineLgRegularIcon = (
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
        d='M.625 6.75h13.75c.39.026.599.234.625.625-.026.39-.234.599-.625.625H.625C.235 7.974.026 7.766 0 7.375c.026-.39.234-.599.625-.625m7.305 3.945 5 5c.26.287.26.573 0 .86-.287.26-.573.26-.86 0l-3.945-3.907v10.977c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V12.648L2.93 16.555c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86l5-5c.287-.26.573-.26.86 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineLgRegularIcon);
export default ForwardRef;

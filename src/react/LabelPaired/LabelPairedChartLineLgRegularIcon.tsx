import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineLgRegularIcon = (
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
        d='M1.25 7.375v13.75c.026.52.208.963.547 1.328.364.339.807.521 1.328.547h16.25c.39.026.599.234.625.625-.026.39-.234.599-.625.625H3.125c-.885-.026-1.628-.326-2.227-.898-.572-.6-.872-1.342-.898-2.227V7.375c.026-.39.234-.599.625-.625.39.026.599.234.625.625m17.305 4.18L12.93 17.18c-.287.26-.573.26-.86 0l-3.32-3.282-3.945 3.907c-.287.26-.573.26-.86 0-.26-.287-.26-.573 0-.86L8.32 12.57c.287-.26.573-.26.86 0l3.32 3.282 5.195-5.157c.287-.26.573-.26.86 0 .26.287.26.573 0 .86'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineLgRegularIcon);
export default ForwardRef;

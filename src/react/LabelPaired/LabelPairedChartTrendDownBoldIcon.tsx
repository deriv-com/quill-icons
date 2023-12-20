import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendDownBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M19.313 19.688a.74.74 0 0 1-1-.344L15.53 13.75H11a.742.742 0 0 1-.687-.406L6.656 6.03 1.313 8.688a.74.74 0 0 1-1-.344.74.74 0 0 1 .343-1l6-3a.74.74 0 0 1 1 .343l3.782 7.563h4.53c.313 0 .563.188.688.438l3 6a.74.74 0 0 1-.343 1'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownBoldIcon);
export default ForwardRef;

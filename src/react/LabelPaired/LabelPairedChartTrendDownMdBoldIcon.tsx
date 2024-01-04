import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendDownMdBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M19.313 19.688a.74.74 0 0 1-1-.344L15.53 13.75H11a.742.742 0 0 1-.688-.406L6.656 6.03 1.313 8.688a.74.74 0 0 1-1-.344.74.74 0 0 1 .343-1l6-3a.74.74 0 0 1 1 .343l3.782 7.563h4.53c.313 0 .563.188.688.438l3 6a.74.74 0 0 1-.343 1Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M17.066 4.242c.22.11.301.383.192.602l-2.625 5.25a.436.436 0 0 1-.383.219h-4.129l-3.363 6.78a.449.449 0 0 1-.602.192L.906 14.66a.449.449 0 0 1-.191-.601c.11-.22.383-.301.601-.192l4.84 2.434 3.309-6.617a.472.472 0 0 1 .41-.246h4.102l2.488-5.004c.11-.22.383-.301.601-.192'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpSmRegularIcon);
export default ForwardRef;

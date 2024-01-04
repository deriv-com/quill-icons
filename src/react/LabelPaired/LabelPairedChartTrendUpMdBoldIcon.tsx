import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendUpMdBoldIcon = (
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
        d='M19.313 4.344a.74.74 0 0 1 .343 1l-3 6a.742.742 0 0 1-.687.406h-4.531l-3.782 7.594a.74.74 0 0 1-1 .343l-6-3a.74.74 0 0 1-.344-1 .74.74 0 0 1 1-.343L6.657 18l3.657-7.313A.769.769 0 0 1 11 10.25h4.531l2.781-5.563a.74.74 0 0 1 1-.343Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpMdBoldIcon);
export default ForwardRef;

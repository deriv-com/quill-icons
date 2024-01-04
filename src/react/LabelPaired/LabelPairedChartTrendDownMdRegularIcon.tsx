import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendDownMdRegularIcon = (
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
        d='M19.219 19.469a.513.513 0 0 1-.688-.219l-2.843-5.75H11a.514.514 0 0 1-.469-.25L6.75 5.687 1.219 8.47c-.25.125-.563 0-.688-.219a.513.513 0 0 1 .219-.688l6-3a.513.513 0 0 1 .688.22L11.28 12.5H16c.188 0 .344.125.438.281l3 6a.513.513 0 0 1-.22.688Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownMdRegularIcon);
export default ForwardRef;

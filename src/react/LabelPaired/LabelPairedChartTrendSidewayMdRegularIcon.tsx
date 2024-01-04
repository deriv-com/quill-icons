import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendSidewayMdRegularIcon = (
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
        d='M.5 12c0-.25.219-.5.5-.5h18c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H1a.494.494 0 0 1-.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendSidewayMdRegularIcon);
export default ForwardRef;

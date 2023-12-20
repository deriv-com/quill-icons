import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpSmBoldIcon = (
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
        d='M17.148 4.05a.647.647 0 0 1 .301.876l-2.625 5.25a.65.65 0 0 1-.601.355h-3.965l-3.309 6.645a.647.647 0 0 1-.875.3l-5.25-2.624a.647.647 0 0 1-.3-.875.647.647 0 0 1 .874-.301L6.074 16l3.2-6.398a.672.672 0 0 1 .601-.383h3.965l2.433-4.867a.647.647 0 0 1 .875-.301'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpSmBoldIcon);
export default ForwardRef;

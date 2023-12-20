import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartOhlcBoldIcon = (
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
        d='M10 4a.76.76 0 0 1 .75.75V6H12a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1.25v9.75A.74.74 0 0 1 10 18a.722.722 0 0 1-.75-.75V16H8a.722.722 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.25V4.75A.74.74 0 0 1 10 4m6.5 2a.76.76 0 0 1 .75.75v5.75h1.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1.25v1.25a.74.74 0 0 1-.75.75.722.722 0 0 1-.75-.75V9.5H14.5a.722.722 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.25V6.75A.74.74 0 0 1 16.5 6m-13 4a.76.76 0 0 1 .75.75v5.75H5.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H4.25v1.25a.74.74 0 0 1-.75.75.722.722 0 0 1-.75-.75V13.5H1.5a.722.722 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.25v-1.25A.74.74 0 0 1 3.5 10'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcBoldIcon);
export default ForwardRef;

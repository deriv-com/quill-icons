import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartOhlcXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M15 6c.375 0 .75.375.75.75V9H18c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.25v15.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V24H12a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h2.25V6.75c0-.375.328-.75.75-.75m9.75 3c.375 0 .75.375.75.75v9.75h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H25.5v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V13.5h-2.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H24V9.75c0-.375.328-.75.75-.75m-19.5 6c.375 0 .75.375.75.75v9.75h2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H6v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V19.5H2.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H4.5v-2.25c0-.375.328-.75.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcXlRegularIcon);
export default ForwardRef;

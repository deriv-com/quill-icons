import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 25 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M24.14 5.93a.925.925 0 0 1 .43 1.25l-3.75 7.5c-.156.312-.468.508-.86.508h-5.663L9.57 24.68a.925.925 0 0 1-1.25.43l-7.5-3.75a.925.925 0 0 1-.43-1.25.925.925 0 0 1 1.25-.43L8.32 23l4.57-9.14a.96.96 0 0 1 .86-.547h5.664l3.477-6.954a.925.925 0 0 1 1.25-.43'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpLgBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpRegularIcon = (
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
        d='M19.219 4.563c.25.125.343.437.218.687l-3 6a.499.499 0 0 1-.437.25h-4.719l-3.844 7.75a.513.513 0 0 1-.687.219l-6-3a.513.513 0 0 1-.219-.688.513.513 0 0 1 .688-.219l5.531 2.782 3.781-7.563A.54.54 0 0 1 11 10.5h4.688l2.843-5.719a.513.513 0 0 1 .688-.218'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpRegularIcon);
export default ForwardRef;

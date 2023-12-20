import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendDownRegularIcon = (
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
        d='M19.219 19.469a.513.513 0 0 1-.688-.219l-2.843-5.75H11a.514.514 0 0 1-.469-.25L6.75 5.688l-5.531 2.78c-.25.126-.563 0-.688-.218a.513.513 0 0 1 .219-.687l6-3a.513.513 0 0 1 .688.218L11.28 12.5H16c.188 0 .344.125.438.281l3 6a.513.513 0 0 1-.22.688'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownRegularIcon);
export default ForwardRef;

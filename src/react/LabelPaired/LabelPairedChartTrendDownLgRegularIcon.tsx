import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendDownLgRegularIcon = (
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
        d='M24.023 24.836a.641.641 0 0 1-.859-.273l-3.555-7.188H13.75c-.273 0-.469-.117-.586-.312L8.438 7.608l-6.915 3.477c-.312.156-.703 0-.859-.274a.641.641 0 0 1 .273-.859l7.5-3.75a.641.641 0 0 1 .86.274l4.805 9.648H20c.234 0 .43.156.547.352l3.75 7.5a.641.641 0 0 1-.274.859'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownLgRegularIcon);
export default ForwardRef;

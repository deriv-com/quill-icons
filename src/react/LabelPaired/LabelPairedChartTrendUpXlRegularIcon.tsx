import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartTrendUpXlRegularIcon = (
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
        d='M28.828 6.844a.77.77 0 0 1 .328 1.031l-4.5 9a.748.748 0 0 1-.656.375h-7.078l-5.766 11.625a.77.77 0 0 1-1.031.328l-9-4.5a.77.77 0 0 1-.328-1.031.77.77 0 0 1 1.031-.328l8.297 4.172 5.672-11.344c.14-.235.375-.422.703-.422h7.031l4.266-8.578a.77.77 0 0 1 1.031-.328'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpXlRegularIcon);
export default ForwardRef;

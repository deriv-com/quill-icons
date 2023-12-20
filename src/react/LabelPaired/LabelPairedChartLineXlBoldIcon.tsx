import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 8.625v16.5c.063.688.438 1.063 1.125 1.125h19.5c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-19.5c-.969-.031-1.766-.36-2.39-.984C.358 26.89.03 26.094 0 25.125v-16.5C.063 7.938.438 7.563 1.125 7.5c.688.063 1.063.438 1.125 1.125m19.922 5.297-6.375 6.375c-.531.437-1.063.437-1.594 0L10.5 16.594l-3.703 3.703c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l4.5-4.5c.219-.219.485-.328.797-.328.313 0 .578.11.797.328L15 17.906l5.578-5.578c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineXlBoldIcon);
export default ForwardRef;

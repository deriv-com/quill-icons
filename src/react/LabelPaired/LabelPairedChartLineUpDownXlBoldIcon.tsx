import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChartLineUpDownXlBoldIcon = (
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
        d='M1.125 7.5c.688.063 1.063.438 1.125 1.125v16.5c.063.688.438 1.063 1.125 1.125h19.5c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-19.5c-.969-.031-1.766-.36-2.39-.984C.358 26.89.03 26.094 0 25.125v-16.5C.063 7.938.438 7.563 1.125 7.5m16.5 3.75c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125h3.75c.313 0 .578.11.797.328.219.219.328.485.328.797v3.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-1.031l-5.953 5.953c-.531.437-1.063.437-1.594 0L9.75 15.844l-2.953 2.953c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l3.75-3.75c.531-.437 1.063-.437 1.594 0l2.953 2.953 5.156-5.156zm0 12.75c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125h1.031l-2.203-2.203 1.594-1.594 2.203 2.203v-1.031c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v3.75c0 .313-.11.578-.328.797a1.085 1.085 0 0 1-.797.328z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownXlBoldIcon);
export default ForwardRef;

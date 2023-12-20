import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m24.797 23.672-4.5 4.5c-.531.437-1.063.437-1.594 0l-4.5-4.5c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l2.578 2.578V8.625c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v16.031l2.578-2.578c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594M8.297 7.828l4.5 4.5c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0l-2.578-2.578v16.031c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V11.344l-2.578 2.578c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l4.5-4.5c.531-.437 1.063-.437 1.594 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpLeftXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.625 10.5h11.25c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H5.344l10.828 10.828c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0L3.75 14.344v8.531c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-11.25c.063-.687.438-1.062 1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftXlBoldIcon);
export default ForwardRef;

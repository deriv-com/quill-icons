import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownLeftXlBoldIcon = (
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
        d='M2.625 25.5c-.687-.062-1.062-.437-1.125-1.125v-11.25c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v8.531l10.828-10.828c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594L5.344 23.25h8.531c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlBoldIcon);
export default ForwardRef;

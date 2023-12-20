import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightXlBoldIcon = (
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
        d='M15.375 10.5c.688.063 1.063.438 1.125 1.125v11.25c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-8.531L3.422 25.172c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594L12.656 12.75H4.125c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlBoldIcon);
export default ForwardRef;

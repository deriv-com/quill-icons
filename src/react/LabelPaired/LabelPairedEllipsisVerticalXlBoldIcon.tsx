import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisVerticalXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 23.25c.844.031 1.5.406 1.969 1.125.375.75.375 1.5 0 2.25C4.5 27.344 3.844 27.719 3 27.75c-.844-.031-1.5-.406-1.969-1.125-.375-.75-.375-1.5 0-2.25C1.5 23.656 2.156 23.281 3 23.25m0-7.5c.844.031 1.5.406 1.969 1.125.375.75.375 1.5 0 2.25C4.5 19.844 3.844 20.219 3 20.25c-.844-.031-1.5-.406-1.969-1.125-.375-.75-.375-1.5 0-2.25C1.5 16.156 2.156 15.781 3 15.75m2.25-5.25c-.031.844-.406 1.5-1.125 1.969-.75.375-1.5.375-2.25 0C1.156 12 .781 11.344.75 10.5c.031-.844.406-1.5 1.125-1.969.75-.375 1.5-.375 2.25 0C4.844 9 5.219 9.656 5.25 10.5'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalXlBoldIcon);
export default ForwardRef;

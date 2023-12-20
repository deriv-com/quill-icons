import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M20.25 18c-.031.844-.406 1.5-1.125 1.969-.75.375-1.5.375-2.25 0-.719-.469-1.094-1.125-1.125-1.969.031-.844.406-1.5 1.125-1.969.75-.375 1.5-.375 2.25 0 .719.469 1.094 1.125 1.125 1.969m-7.5 0c-.031.844-.406 1.5-1.125 1.969-.75.375-1.5.375-2.25 0C8.656 19.5 8.281 18.844 8.25 18c.031-.844.406-1.5 1.125-1.969.75-.375 1.5-.375 2.25 0 .719.469 1.094 1.125 1.125 1.969M3 20.25c-.844-.031-1.5-.406-1.969-1.125-.375-.75-.375-1.5 0-2.25C1.5 16.156 2.156 15.781 3 15.75c.844.031 1.5.406 1.969 1.125.375.75.375 1.5 0 2.25C4.5 19.844 3.844 20.219 3 20.25'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisXlBoldIcon);
export default ForwardRef;

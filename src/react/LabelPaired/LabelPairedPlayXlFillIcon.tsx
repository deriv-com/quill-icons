import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlayXlFillIcon = (
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
        d='m3.422 7.828 13.5 8.25c.687.469 1.047 1.11 1.078 1.922-.031.844-.39 1.484-1.078 1.922l-13.5 8.25c-.75.437-1.5.453-2.25.047C.422 27.78.032 27.125 0 26.25V9.75c.031-.875.422-1.531 1.172-1.969.75-.406 1.5-.39 2.25.047'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlFillIcon);
export default ForwardRef;

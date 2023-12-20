import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlayXlRegularIcon = (
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
        d='M2.625 9.094a.797.797 0 0 0-.75 0c-.25.156-.375.375-.375.656v16.5c0 .281.125.5.375.656.25.125.5.125.75 0l13.5-8.25c.25-.156.375-.375.375-.656s-.125-.5-.375-.656zM1.172 7.78c.75-.406 1.5-.39 2.25.047l13.5 8.25c.687.438 1.047 1.078 1.078 1.922-.031.844-.39 1.484-1.078 1.922l-13.5 8.25c-.75.437-1.5.453-2.25.047C.422 27.78.032 27.125 0 26.25V9.75c.031-.875.422-1.531 1.172-1.969'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayXlRegularIcon);
export default ForwardRef;

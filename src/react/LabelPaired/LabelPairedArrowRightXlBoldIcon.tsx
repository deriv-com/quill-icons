import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightXlBoldIcon = (
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
        d='m20.672 18.797-8.25 7.875c-.563.437-1.094.437-1.594 0-.437-.563-.437-1.094 0-1.594l6.235-5.953H1.124C.438 19.063.063 18.688 0 18c.063-.687.438-1.062 1.125-1.125h15.938l-6.188-5.953c-.469-.5-.484-1.031-.047-1.594.5-.437 1.031-.437 1.594 0l8.25 7.875c.219.219.328.485.328.797 0 .313-.11.578-.328.797'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlBoldIcon);
export default ForwardRef;

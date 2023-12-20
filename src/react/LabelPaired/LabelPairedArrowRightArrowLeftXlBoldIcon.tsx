import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftXlBoldIcon = (
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
        d='m4.828 29.297-4.5-4.5c-.437-.531-.437-1.063 0-1.594l4.5-4.5c.531-.437 1.063-.437 1.594 0 .437.531.437 1.063 0 1.594l-2.578 2.578h16.031c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H3.844l2.578 2.578c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0m15.844-16.5-4.5 4.5c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l2.578-2.578H1.125C.438 13.063.063 12.688 0 12c.063-.687.438-1.062 1.125-1.125h16.031l-2.578-2.578c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l4.5 4.5c.437.531.437 1.063 0 1.594'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftXlBoldIcon);
export default ForwardRef;

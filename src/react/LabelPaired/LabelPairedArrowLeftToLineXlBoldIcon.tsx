import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftToLineXlBoldIcon = (
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
        d='M0 25.875v-15.75C.063 9.438.438 9.063 1.125 9c.688.063 1.063.438 1.125 1.125v15.75c-.062.688-.437 1.063-1.125 1.125C.438 26.938.063 26.563 0 25.875m6.375-8.672 6.375-6c.531-.437 1.047-.422 1.547.047.437.531.422 1.063-.047 1.594l-4.266 4.031h9.891c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-9.89l4.312 4.078c.437.5.453 1.031.047 1.594-.531.437-1.063.453-1.594.047l-6.375-6C6.125 18.594 6 18.312 6 18c0-.312.125-.578.375-.797'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToLineXlBoldIcon = (
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
        d='M16.875 28.5H1.125C.438 28.438.063 28.063 0 27.375c.063-.687.438-1.062 1.125-1.125h15.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125m-8.672-6.375v.047l-6-6.375c-.437-.563-.422-1.094.047-1.594.531-.437 1.063-.422 1.594.047l4.031 4.313V8.625C7.938 7.938 8.313 7.563 9 7.5c.688.063 1.063.438 1.125 1.125v9.938l4.078-4.313c.5-.469 1.031-.484 1.594-.047.437.5.453 1.016.047 1.547l-6 6.375c-.25.25-.531.375-.844.375-.312 0-.578-.125-.797-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlBoldIcon);
export default ForwardRef;

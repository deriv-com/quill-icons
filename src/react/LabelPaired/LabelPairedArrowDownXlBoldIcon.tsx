import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownXlBoldIcon = (
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
        d='m8.203 28.172-7.875-8.25c-.437-.563-.422-1.094.047-1.594.531-.437 1.047-.437 1.547 0l5.953 6.235V8.625C7.938 7.938 8.313 7.563 9 7.5c.688.063 1.063.438 1.125 1.125v15.938l5.953-6.188c.5-.469 1.031-.484 1.594-.047.437.5.437 1.031 0 1.594l-7.875 8.25A1.085 1.085 0 0 1 9 28.5c-.312 0-.578-.11-.797-.328'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownXlBoldIcon);
export default ForwardRef;

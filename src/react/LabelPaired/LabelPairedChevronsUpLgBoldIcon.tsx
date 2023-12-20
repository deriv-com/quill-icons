import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsUpLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m10.664 7.336 7.5 7.5c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0L10 9.328l-6.836 6.836c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l7.5-7.5c.443-.365.885-.365 1.328 0m7.5 15c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0L10 16.828l-6.836 6.836c-.443.365-.885.365-1.328 0-.365-.443-.365-.885 0-1.328l7.5-7.5c.443-.365.885-.365 1.328 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgBoldIcon);
export default ForwardRef;

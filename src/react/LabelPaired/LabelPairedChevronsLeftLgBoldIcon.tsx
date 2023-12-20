import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsLeftLgBoldIcon = (
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
        d='m1.836 14.836 7.5-7.5c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328L3.828 15.5l6.836 6.836c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0l-7.5-7.5c-.365-.443-.365-.885 0-1.328m15-7.5c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328L11.328 15.5l6.836 6.836c.365.443.365.885 0 1.328-.443.365-.885.365-1.328 0l-7.5-7.5c-.365-.443-.365-.885 0-1.328z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftLgBoldIcon);
export default ForwardRef;

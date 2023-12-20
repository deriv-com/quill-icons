import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronDownLgBoldIcon = (
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
        d='m9.336 21.164-7.5-7.5c-.365-.443-.365-.885 0-1.328.443-.365.885-.365 1.328 0L10 19.172l6.836-6.836c.443-.365.885-.365 1.328 0 .365.443.365.885 0 1.328l-7.5 7.5c-.443.365-.885.365-1.328 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownLgBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftLgBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 30'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4.273 24.914-3.75-3.75c-.364-.443-.364-.885 0-1.328l3.75-3.75c.443-.365.886-.365 1.329 0 .364.443.364.885 0 1.328l-2.149 2.148h13.36c.572.053.885.365.937.938-.052.573-.365.885-.937.938H3.453l2.149 2.148c.364.443.364.885 0 1.328-.443.365-.886.365-1.329 0m13.204-13.75-3.75 3.75c-.443.365-.886.365-1.329 0-.364-.443-.364-.885 0-1.328l2.149-2.149H1.187c-.572-.052-.885-.364-.937-.937.052-.573.365-.885.938-.937h13.359l-2.149-2.149c-.364-.443-.364-.885 0-1.328.443-.365.886-.365 1.329 0l3.75 3.75c.364.443.364.885 0 1.328'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftLgBoldIcon);
export default ForwardRef;

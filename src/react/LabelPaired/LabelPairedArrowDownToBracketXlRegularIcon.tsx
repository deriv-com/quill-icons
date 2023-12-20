import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownToBracketXlRegularIcon = (
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
        d='m17.016 16.266-6 6c-.344.312-.688.312-1.032 0l-6-6c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l4.734 4.688V6.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v13.172l4.734-4.688c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032M1.5 21.75v4.5c.031.625.25 1.156.656 1.594.438.406.969.625 1.594.656h13.5a2.446 2.446 0 0 0 1.594-.656c.406-.438.625-.969.656-1.594v-4.5c.031-.469.281-.719.75-.75.469.031.719.281.75.75v4.5c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078H3.75c-1.062-.031-1.953-.39-2.672-1.078C.391 28.203.031 27.312 0 26.25v-4.5c.031-.469.281-.719.75-.75.469.031.719.281.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketXlRegularIcon);
export default ForwardRef;

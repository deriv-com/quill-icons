import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoonRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.969 6.094c-1.438.27-2.615.948-3.532 2.031C1.5 9.188 1.022 10.479 1 12c.042 1.708.625 3.125 1.75 4.25S5.292 17.958 7 18a6.181 6.181 0 0 0 2.938-.781c-1.709-.167-3.115-.854-4.22-2.063C4.616 13.97 4.043 12.5 4 10.75c0-.917.177-1.77.531-2.562A5.878 5.878 0 0 1 5.97 6.094m2.062-.688c.042.25-.041.438-.25.563A5.742 5.742 0 0 0 5.75 7.937C5.25 8.772 5 9.709 5 10.75c.042 1.563.573 2.854 1.594 3.875 1.041 1.042 2.333 1.583 3.875 1.625.333 0 .646-.031.937-.094.25-.02.427.073.531.282.105.208.073.406-.093.593C10.552 18.302 8.938 18.958 7 19c-1.312-.02-2.49-.344-3.531-.969a6.549 6.549 0 0 1-2.5-2.5C.344 14.49.02 13.312 0 12c.02-1.312.333-2.49.938-3.531a6.778 6.778 0 0 1 2.53-2.5c1.042-.625 2.21-.948 3.5-.969.21 0 .407.01.595.031.25.021.406.146.468.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonRegularIcon);
export default ForwardRef;

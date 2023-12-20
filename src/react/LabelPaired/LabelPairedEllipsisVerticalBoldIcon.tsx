import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisVerticalBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 4 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 15.5c.563.02 1 .27 1.313.75.25.5.25 1 0 1.5-.313.48-.75.73-1.313.75-.562-.02-1-.27-1.312-.75-.25-.5-.25-1 0-1.5.312-.48.75-.73 1.312-.75m0-5c.563.02 1 .27 1.313.75.25.5.25 1 0 1.5-.313.48-.75.73-1.313.75-.562-.02-1-.27-1.312-.75-.25-.5-.25-1 0-1.5.312-.48.75-.73 1.312-.75M3.5 7c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0C.77 8 .52 7.563.5 7c.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0 .48.312.73.75.75 1.312'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h4v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalBoldIcon);
export default ForwardRef;

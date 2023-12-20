import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.5 12c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0-.48-.313-.73-.75-.75-1.313.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0 .48.312.73.75.75 1.312m-5 0c-.02.563-.27 1-.75 1.313-.5.25-1 .25-1.5 0-.48-.313-.73-.75-.75-1.313.02-.562.27-1 .75-1.312.5-.25 1-.25 1.5 0 .48.312.73.75.75 1.312M2 13.5c-.562-.02-1-.27-1.312-.75-.25-.5-.25-1 0-1.5.312-.48.75-.73 1.312-.75.563.02 1 .27 1.313.75.25.5.25 1 0 1.5-.313.48-.75.73-1.313.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisBoldIcon);
export default ForwardRef;

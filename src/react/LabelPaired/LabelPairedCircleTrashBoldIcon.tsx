import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleTrashBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M14.5 12c0-1.188-.292-2.27-.875-3.25-.563-.98-1.354-1.77-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875c-1.02.604-1.813 1.396-2.375 2.375-.583.98-.875 2.063-.875 3.25 0 1.188.292 2.27.875 3.25.563.98 1.354 1.77 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875c1.02-.604 1.813-1.396 2.375-2.375.583-.98.875-2.063.875-3.25ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm5-4h1.281l.375-.344A.416.416 0 0 1 7 7.5h2c.146 0 .26.052.344.156L9.719 8H11c.313.02.48.188.5.5-.02.313-.188.48-.5.5H5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5Zm0 2h6l-.438 5.094c-.083.562-.406.864-.968.906H6.406a.957.957 0 0 1-.656-.25 1.026 1.026 0 0 1-.313-.656L5 10Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashBoldIcon);
export default ForwardRef;
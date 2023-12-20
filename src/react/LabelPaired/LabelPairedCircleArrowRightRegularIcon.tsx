import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleArrowRightRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.937-3.5A7.191 7.191 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.938 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12M0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.813 4 5.063 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.062 4-.709 1.208-1.688 2.188-2.938 2.938C10.73 19.646 9.396 20 8 20s-2.73-.354-4-1.062c-1.25-.75-2.23-1.73-2.937-2.938C.375 14.792.02 13.458 0 12m8.844 3.344c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l2.125-2.156H4.5c-.312-.02-.48-.187-.5-.5.02-.312.188-.48.5-.5h5.781L8.156 9.344c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l3 3c.208.23.208.459 0 .688z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowRightRegularIcon);
export default ForwardRef;

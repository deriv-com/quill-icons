import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleSortRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.937-3.5A7.191 7.191 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.938 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12M0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.813 4 5.063 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.062 4-.709 1.208-1.688 2.188-2.938 2.938C10.73 19.646 9.396 20 8 20s-2.73-.354-4-1.062c-1.25-.75-2.23-1.73-2.937-2.938C.375 14.792.02 13.458 0 12m7.656-4.844c.23-.208.459-.208.688 0l3 3a.498.498 0 0 1 .125.531A.575.575 0 0 1 11 11H5c-.208 0-.365-.104-.469-.312a.498.498 0 0 1 .125-.532zM6.22 10H9.78L8 8.219zm-1.563 3.844a.498.498 0 0 1-.125-.531A.575.575 0 0 1 5 13h6c.208 0 .365.104.469.313a.498.498 0 0 1-.125.53l-3 3c-.23.21-.459.21-.688 0zM8 15.78 9.781 14H6.22z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSortRegularIcon);
export default ForwardRef;

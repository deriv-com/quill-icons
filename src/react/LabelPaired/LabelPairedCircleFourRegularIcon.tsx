import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleFourRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.937-3.5A7.191 7.191 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.938 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12M0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.813 4 5.063 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.062 4-.709 1.208-1.688 2.188-2.938 2.938C10.73 19.646 9.396 20 8 20s-2.73-.354-4-1.062c-1.25-.75-2.23-1.73-2.937-2.938C.375 14.792.02 13.458 0 12m7.188-3.969c.27.146.364.365.28.656L5.75 13H9v-2.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5V13h.5c.313.02.48.188.5.5-.02.313-.187.48-.5.5H10v1.5c-.02.313-.187.48-.5.5-.312-.02-.48-.187-.5-.5V14H5a.478.478 0 0 1-.406-.219.475.475 0 0 1-.063-.469l2-5c.146-.27.365-.364.657-.28'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourRegularIcon);
export default ForwardRef;

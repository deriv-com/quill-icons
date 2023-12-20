import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleCalendarRegularIcon = (
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
        d='M15 12a7.203 7.203 0 0 0-.937-3.5A7.191 7.191 0 0 0 11.5 5.938a7 7 0 0 0-7 0A7.191 7.191 0 0 0 1.938 8.5 7.204 7.204 0 0 0 1 12c.02 1.27.333 2.438.938 3.5A7.19 7.19 0 0 0 4.5 18.063a7 7 0 0 0 7 0 7.191 7.191 0 0 0 2.563-2.563A7.203 7.203 0 0 0 15 12M0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.813 4 5.063 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.062 4-.709 1.208-1.688 2.188-2.938 2.938C10.73 19.646 9.396 20 8 20s-2.73-.354-4-1.062c-1.25-.75-2.23-1.73-2.937-2.938C.375 14.792.02 13.458 0 12m6.5-5c.313.02.48.188.5.5V8h2v-.5c.02-.312.188-.48.5-.5.313.02.48.188.5.5V8h.5c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v5a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 10.5 16h-5a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 4 14.5v-5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 5.5 8H6v-.5c.02-.312.188-.48.5-.5M5 9.5v.5h6v-.5c-.02-.312-.187-.48-.5-.5h-5c-.312.02-.48.188-.5.5m6 1.5H5v3.5c.02.313.188.48.5.5h5c.313-.02.48-.187.5-.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCalendarRegularIcon);
export default ForwardRef;

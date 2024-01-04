import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleBookmarkMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 5a7.204 7.204 0 0 0-3.5.938A7.191 7.191 0 0 0 1.937 8.5a6.999 6.999 0 0 0 0 7A7.191 7.191 0 0 0 4.5 18.063 7.203 7.203 0 0 0 8 19a7.203 7.203 0 0 0 3.5-.938 7.191 7.191 0 0 0 2.563-2.562 7 7 0 0 0 0-7A7.19 7.19 0 0 0 11.5 5.937 7.204 7.204 0 0 0 8 5Zm0 15c-1.458-.02-2.792-.375-4-1.063C2.792 18.23 1.812 17.25 1.062 16 .355 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.062 5.208 4.375 6.542 4.021 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.063 4c-.75 1.25-1.729 2.23-2.937 2.938-1.208.687-2.542 1.041-4 1.062ZM6 9.5v4.969l1.688-1.344c.208-.167.416-.167.625 0L10 14.469V9.5c-.02-.313-.188-.48-.5-.5h-3c-.313.02-.48.188-.5.5ZM6.5 8h3c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v6a.443.443 0 0 1-.281.438.536.536 0 0 1-.531-.032L8 14.156l-2.188 1.75a.536.536 0 0 1-.53.031A.442.442 0 0 1 5 15.5v-6c.02-.417.167-.77.438-1.063A1.63 1.63 0 0 1 6.5 8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleBookmarkMdRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleArrowDownBoldIcon = (
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
        d='M8 5.5c-1.187 0-2.27.292-3.25.875-.98.563-1.77 1.354-2.375 2.375A6.45 6.45 0 0 0 1.5 12c0 1.146.292 2.23.875 3.25.604 1.02 1.396 1.813 2.375 2.375.98.583 2.063.875 3.25.875 1.188 0 2.27-.292 3.25-.875.98-.562 1.77-1.354 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25c-.604-1.02-1.396-1.812-2.375-2.375C10.27 5.792 9.188 5.5 8 5.5M8 20c-1.458-.02-2.792-.375-4-1.062C2.792 18.229 1.813 17.25 1.063 16 .354 14.73 0 13.396 0 12s.354-2.73 1.063-4C1.813 6.75 2.792 5.77 4 5.063 5.208 4.375 6.542 4.02 8 4c1.458.02 2.792.375 4 1.063C13.208 5.77 14.188 6.75 14.938 8 15.646 9.27 16 10.604 16 12s-.354 2.73-1.062 4c-.75 1.25-1.73 2.23-2.938 2.938-1.208.687-2.542 1.041-4 1.062m3.281-6.969-2.75 2.75c-.354.292-.708.292-1.062 0l-2.75-2.75c-.292-.354-.292-.708 0-1.062.354-.292.708-.292 1.062 0l1.469 1.469V8.75c.042-.458.292-.708.75-.75.458.042.708.292.75.75v4.688l1.469-1.47c.354-.29.708-.29 1.062 0 .292.355.292.71 0 1.063'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowDownBoldIcon);
export default ForwardRef;

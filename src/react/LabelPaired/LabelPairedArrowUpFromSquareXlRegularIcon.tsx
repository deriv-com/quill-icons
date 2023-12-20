import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromSquareXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m12.516 6.234 4.875 4.875c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L12.75 8.578V21c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.578l-3.61 3.563c-.343.312-.687.312-1.03 0-.313-.344-.313-.688 0-1.032l4.874-4.875c.344-.312.688-.312 1.032 0M3 7.5h1.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078V27c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h18c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V10.5c0-.437-.14-.797-.422-1.078C21.797 9.14 21.438 9 21 9h-1.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75H21c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V10.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareXlRegularIcon);
export default ForwardRef;

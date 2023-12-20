import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightFromSquareXlRegularIcon = (
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
        d='M15.75 6h7.5c.469.031.719.281.75.75v7.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.578L11.016 20.016c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032L21.422 7.5H15.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75M3 7.5h6.75c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078V27c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h16.5c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-6.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V10.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareXlRegularIcon);
export default ForwardRef;

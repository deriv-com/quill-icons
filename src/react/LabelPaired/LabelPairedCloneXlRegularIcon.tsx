import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCloneXlRegularIcon = (
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
        d='M3 28.5h10.5c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-3h1.5v3c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V16.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h3V15H3c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078V27c0 .438.14.797.422 1.078.281.281.64.422 1.078.422m7.5-7.5H21c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V9c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422H10.5c-.437 0-.797.14-1.078.422C9.14 8.203 9 8.562 9 9v10.5c0 .438.14.797.422 1.078.281.281.64.422 1.078.422m-3-1.5V9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89H21c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v10.5c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H10.5c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneXlRegularIcon);
export default ForwardRef;

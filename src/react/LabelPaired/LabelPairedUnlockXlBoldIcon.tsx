import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUnlockXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.75 12v3H18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v9c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27v-9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h1.5v-3c.031-1.687.61-3.11 1.734-4.266C7.391 6.61 8.813 6.031 10.5 6c1.344.031 2.531.422 3.563 1.172 1.03.75 1.75 1.75 2.156 3 .156.656-.094 1.125-.75 1.406-.656.156-1.125-.094-1.406-.75A3.69 3.69 0 0 0 12.75 9a3.613 3.613 0 0 0-2.25-.75c-1.062.031-1.953.39-2.672 1.078-.687.719-1.047 1.61-1.078 2.672m-4.5 6v9c.031.469.281.719.75.75h15c.469-.031.719-.281.75-.75v-9c-.031-.469-.281-.719-.75-.75H3c-.469.031-.719.281-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockXlBoldIcon);
export default ForwardRef;

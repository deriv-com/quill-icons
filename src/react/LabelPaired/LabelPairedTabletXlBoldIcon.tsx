import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTabletXlBoldIcon = (
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
        d='M3 8.25c-.469.031-.719.281-.75.75v18c.031.469.281.719.75.75h15c.469-.031.719-.281.75-.75V9c-.031-.469-.281-.719-.75-.75zM0 9c.031-.844.328-1.547.89-2.11C1.454 6.329 2.157 6.032 3 6h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v18c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27zm9 15.75h3c.469.031.719.281.75.75-.031.469-.281.719-.75.75H9c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletXlBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedVideoXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 10.5c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v12c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h12c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V12c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422zM0 12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h12c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v12c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 25.546.032 24.843 0 24zm24.328 13.266L19.5 22.594v-1.688l5.578 3.047c.031.031.078.047.14.047.157 0 .25-.094.282-.281V12.28a.331.331 0 0 0-.281-.281c-.063 0-.11.016-.14.047L19.5 15.094v-1.688l4.828-2.672c.281-.156.578-.234.89-.234.5 0 .923.172 1.266.516.344.343.516.765.516 1.265V23.72c0 .5-.172.922-.516 1.265a1.72 1.72 0 0 1-1.265.516c-.313 0-.61-.078-.89-.234'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoXlRegularIcon);
export default ForwardRef;

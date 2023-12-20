import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M24 9.75H6c-.469.031-.719.281-.75.75V21H3V10.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11V21h-2.25V10.5c-.031-.469-.281-.719-.75-.75M4.5 26.25h21c1.031-.062 1.734-.562 2.11-1.5H2.39c.376.938 1.079 1.438 2.11 1.5M0 24c0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422h27c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078-.031 1.281-.469 2.344-1.312 3.188-.844.843-1.907 1.28-3.188 1.312h-21c-1.281-.031-2.344-.469-3.187-1.312C.469 26.344.03 25.28 0 24'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlBoldIcon);
export default ForwardRef;

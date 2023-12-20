import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWindowMaximizeXlRegularIcon = (
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
        d='M3 9c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078V15h21v-4.5c0-.437-.14-.797-.422-1.078C21.797 9.14 21.438 9 21 9zm-1.5 7.5v9c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h18c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-9zm-1.5-6c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMaximizeXlRegularIcon);
export default ForwardRef;

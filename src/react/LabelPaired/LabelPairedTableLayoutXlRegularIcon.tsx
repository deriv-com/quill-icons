import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTableLayoutXlRegularIcon = (
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
        d='M21 9H3c-.437 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v3h21v-3c0-.437-.14-.797-.422-1.078C21.797 9.14 21.438 9 21 9M1.5 25.5c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h4.5V15h-6zM9 27h12c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V15H9zM3 7.5h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutXlRegularIcon);
export default ForwardRef;

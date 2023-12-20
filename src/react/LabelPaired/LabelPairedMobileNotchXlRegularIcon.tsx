import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12 7.5v.75c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422h-3c-.437 0-.797-.14-1.078-.422C6.14 9.047 6 8.688 6 8.25V7.5H4.5c-.437 0-.797.14-1.078.422C3.14 8.203 3 8.562 3 9v18c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h9c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V9c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422zm-1.5 0h-3v.75h3zM1.5 9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h9c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v18c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89h-9c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisVerticalXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 24c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078C3.797 26.86 3.438 27 3 27c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078C2.203 24.14 2.562 24 3 24m0-7.5c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422m1.5-6c0 .438-.14.797-.422 1.078C3.797 11.86 3.438 12 3 12c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078C2.203 9.14 2.562 9 3 9c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalXlRegularIcon);
export default ForwardRef;

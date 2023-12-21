import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGripDotsVerticalXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 12c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078C2.203 9.14 2.562 9 3 9c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078C3.797 11.86 3.438 12 3 12m0 7.5c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422m1.5 6c0 .438-.14.797-.422 1.078C3.797 26.86 3.438 27 3 27c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078C2.203 24.14 2.562 24 3 24c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078M9 12c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078C8.203 9.14 8.562 9 9 9c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078C9.797 11.86 9.438 12 9 12m1.5 6c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078M9 27c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078C8.203 24.14 8.562 24 9 24c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078C9.797 26.86 9.438 27 9 27'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalXlBoldIcon);
export default ForwardRef;
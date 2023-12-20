import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisXlRegularIcon = (
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
        d='M19.5 18c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078M12 18c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.437 0-.797-.14-1.078-.422C9.14 18.797 9 18.438 9 18c0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078m-9 1.5c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.437.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisXlRegularIcon);
export default ForwardRef;

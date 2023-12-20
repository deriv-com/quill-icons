import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchXlBoldIcon = (
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
        d='M12 8.25V9c-.031.469-.281.719-.75.75h-4.5C6.281 9.719 6.031 9.469 6 9v-.75H4.5c-.437 0-.797.14-1.078.422C3.14 8.953 3 9.312 3 9.75v16.5c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h9c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078V9.75c0-.437-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422zM.75 9.75c.031-1.062.39-1.953 1.078-2.672C2.547 6.391 3.438 6.031 4.5 6h9c1.063.031 1.953.39 2.672 1.078.687.719 1.047 1.61 1.078 2.672v16.5c-.031 1.063-.39 1.953-1.078 2.672-.719.687-1.61 1.047-2.672 1.078h-9c-1.062-.031-1.953-.39-2.672-1.078-.687-.719-1.047-1.61-1.078-2.672z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchXlBoldIcon);
export default ForwardRef;

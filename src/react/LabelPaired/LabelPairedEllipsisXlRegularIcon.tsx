import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M19.5 18c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.438 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.438.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078ZM12 18c0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422-.438 0-.797-.14-1.078-.422C9.14 18.797 9 18.438 9 18c0-.438.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078Zm-9 1.5c-.438 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078 0-.438.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422Z'
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

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExclamationXlBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={36}
    viewBox='0 0 3 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.625 8.625v13.5c-.063.688-.438 1.063-1.125 1.125-.688-.063-1.063-.438-1.125-1.125v-13.5C.438 7.937.813 7.562 1.5 7.5c.688.063 1.063.438 1.125 1.125ZM1.5 28.5c-.438 0-.797-.14-1.078-.422C.14 27.797 0 27.438 0 27c0-.438.14-.797.422-1.078.281-.281.64-.422 1.078-.422.438 0 .797.14 1.078.422.281.281.422.64.422 1.078 0 .438-.14.797-.422 1.078-.281.281-.64.422-1.078.422Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlBoldIcon);
export default ForwardRef;

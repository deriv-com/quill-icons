import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareCheckXlRegularIcon = (
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
        d='M3 9c-.438 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v15c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h15c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-15c0-.438-.14-.797-.422-1.078C18.797 9.14 18.438 9 18 9H3Zm-3 1.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h15c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v15c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11v-15Zm15.516 5.016-6 6c-.344.312-.688.312-1.032 0l-3-3c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0L9 19.922l5.484-5.438c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedLaptopXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M24 9.75H6c-.469.031-.719.281-.75.75V21H3V10.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11V21h-2.25V10.5c-.031-.469-.281-.719-.75-.75ZM4.5 26.25h21c1.031-.063 1.734-.563 2.11-1.5H2.39c.376.938 1.079 1.438 2.11 1.5ZM0 24c0-.438.14-.797.422-1.078.281-.281.64-.422 1.078-.422h27c.438 0 .797.14 1.078.422.281.281.422.64.422 1.078-.031 1.281-.469 2.344-1.313 3.188-.843.843-1.906 1.28-3.187 1.312h-21c-1.281-.031-2.344-.469-3.188-1.313C.47 26.345.032 25.282 0 24Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopXlBoldIcon);
export default ForwardRef;

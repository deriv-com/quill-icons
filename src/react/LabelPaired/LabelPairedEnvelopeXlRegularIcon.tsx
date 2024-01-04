import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeXlRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 10.5c-.438 0-.797.14-1.078.422-.281.281-.422.64-.422 1.078v1.875l9.188 6.703c.874.594 1.75.594 2.624 0l9.188-6.703V12c0-.438-.14-.797-.422-1.078-.281-.281-.64-.422-1.078-.422H3Zm-1.5 5.25V24c0 .438.14.797.422 1.078.281.281.64.422 1.078.422h18c.438 0 .797-.14 1.078-.422.281-.281.422-.64.422-1.078v-8.25l-8.297 6.047c-.656.5-1.39.75-2.203.75s-1.547-.25-2.203-.75L1.5 15.75ZM0 12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v12c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 25.546.032 24.843 0 24V12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeXlBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M3 11.25c-.469.031-.719.281-.75.75v1.031l8.11 6.656c.5.375 1.046.563 1.64.563.625 0 1.188-.188 1.688-.563l8.062-6.656V12c-.031-.469-.281-.719-.75-.75H3Zm-.75 4.688V24c.031.469.281.719.75.75h18c.469-.031.719-.281.75-.75v-8.063l-6.656 5.485C14.156 22.14 13.125 22.5 12 22.5c-1.125 0-2.156-.36-3.094-1.078L2.25 15.937ZM0 12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h18c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v12c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 25.546.032 24.843 0 24V12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeXlBoldIcon);
export default ForwardRef;

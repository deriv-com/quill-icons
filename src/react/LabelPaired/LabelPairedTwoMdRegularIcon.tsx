import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTwoMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.625 6a3.45 3.45 0 0 0-2.406 1l-.875.844c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l.844-.875A4.494 4.494 0 0 1 4.625 5c1.23.02 2.26.448 3.094 1.281.812.813 1.24 1.834 1.281 3.063-.02 1.25-.48 2.302-1.375 3.156L1.781 18H9.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-9c-.23 0-.385-.104-.469-.313a.56.56 0 0 1 .125-.562l6.782-6.344A3.375 3.375 0 0 0 8 9.344c-.02-.938-.354-1.73-1-2.375C6.375 6.344 5.583 6.02 4.625 6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoMdRegularIcon);
export default ForwardRef;

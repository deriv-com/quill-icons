import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTwoMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M4.625 6.5c-.875.02-1.615.323-2.219.906L1.281 8.531c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l1.125-1.094C2.24 5.479 3.334 5.021 4.625 5h.219c1.25.042 2.291.469 3.125 1.281.812.834 1.24 1.875 1.281 3.125-.02 1.271-.49 2.344-1.406 3.219L2.656 17.5H9.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75c-.333-.02-.563-.177-.688-.469-.104-.312-.041-.583.188-.812l6.594-6.188a3.006 3.006 0 0 0 .906-2.125c-.02-.812-.302-1.5-.844-2.062-.562-.542-1.25-.823-2.062-.844h-.219Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoMdBoldIcon);
export default ForwardRef;

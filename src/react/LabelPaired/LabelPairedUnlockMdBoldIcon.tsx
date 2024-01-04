import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedUnlockMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.5 8v2H12c.563.02 1.031.219 1.406.594s.573.844.594 1.406v6c-.02.563-.219 1.031-.594 1.406S12.562 19.98 12 20H2c-.563-.02-1.031-.219-1.406-.594S.02 18.563 0 18v-6c.02-.563.219-1.031.594-1.406S1.438 10.02 2 10h1V8c.02-1.125.406-2.073 1.156-2.844C4.927 4.406 5.875 4.021 7 4c.896.02 1.688.281 2.375.781a3.894 3.894 0 0 1 1.438 2c.104.438-.063.75-.5.938-.438.104-.75-.063-.938-.5A2.46 2.46 0 0 0 8.5 6 2.41 2.41 0 0 0 7 5.5c-.708.02-1.302.26-1.781.719C4.76 6.698 4.52 7.292 4.5 8Zm-3 4v6c.02.313.188.48.5.5h10c.313-.02.48-.188.5-.5v-6c-.02-.313-.188-.48-.5-.5H2c-.313.02-.48.188-.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEnvelopeMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2 7.5c-.313.02-.48.188-.5.5v.688l5.406 4.437a1.828 1.828 0 0 0 2.219 0L14.5 8.687V8c-.02-.313-.188-.48-.5-.5H2Zm-.5 3.125V16c.02.313.188.48.5.5h12c.313-.02.48-.188.5-.5v-5.375l-4.438 3.656C9.438 14.761 8.75 15 8 15c-.75 0-1.438-.24-2.063-.719L1.5 10.625ZM0 8c.02-.563.219-1.031.594-1.406S1.438 6.02 2 6h12c.563.02 1.031.219 1.406.594S15.98 7.437 16 8v8c-.02.563-.219 1.031-.594 1.406S14.562 17.98 14 18H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V8Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeMdBoldIcon);
export default ForwardRef;

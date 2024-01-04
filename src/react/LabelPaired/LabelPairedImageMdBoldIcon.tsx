import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedImageMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M14 6.5H2c-.313.02-.48.188-.5.5v10l.156-.188 2.5-3.5A.688.688 0 0 1 4.75 13a.77.77 0 0 1 .625.313l.938 1.343 2.593-3.375A.712.712 0 0 1 9.5 11c.25 0 .448.094.594.281l4.25 5.5.156.219V7c-.02-.313-.188-.48-.5-.5ZM2 5h12c.563.02 1.031.219 1.406.594S15.98 6.437 16 7v10c-.02.563-.219 1.031-.594 1.406S14.562 18.98 14 19H2c-.563-.02-1.031-.219-1.406-.594S.02 17.563 0 17V7c.02-.563.219-1.031.594-1.406S1.438 5.02 2 5Zm2.5 6c-.563-.02-1-.27-1.313-.75-.25-.5-.25-1 0-1.5.313-.48.75-.73 1.313-.75.563.02 1 .27 1.313.75.25.5.25 1 0 1.5-.313.48-.75.73-1.313.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageMdBoldIcon);
export default ForwardRef;

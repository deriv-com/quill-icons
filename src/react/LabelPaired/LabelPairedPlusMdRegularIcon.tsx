import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPlusMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M7.5 6v5.5H13q.47.031.5.5-.03.47-.5.5H7.5V18q-.03.47-.5.5-.469-.03-.5-.5v-5.5H1q-.469-.03-.5-.5.031-.469.5-.5h5.5V6q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='3b5b814919dbccd6a7157c708a5b651e__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusMdRegularIcon);
export default ForwardRef;

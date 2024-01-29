import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.7 11.05q-.275-.3 0-.6L5.95 5.2q.3-.274.6 0 .274.3 0 .6L1.63 10.75 6.55 15.7q.273.3 0 .6-.3.274-.602 0z' />
    </g>
    <defs>
      <clipPath id='4f9835cc11dfa918f31b0210f344cbfb__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftSmRegularIcon);
export default ForwardRef;

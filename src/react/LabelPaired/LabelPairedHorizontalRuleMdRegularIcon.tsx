import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M0 12c.02-.312.188-.48.5-.5h19c.313.02.48.188.5.5-.02.313-.187.48-.5.5H.5c-.312-.02-.48-.187-.5-.5' />
    </g>
    <defs>
      <clipPath id='8e3448ac2878e0be37b0e2b84caa0473__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleMdRegularIcon);
export default ForwardRef;

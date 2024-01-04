import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronDownSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.3 14.55c-.2.183-.4.183-.6 0L1.45 9.3c-.183-.2-.183-.4 0-.6.2-.183.4-.183.6 0L7 13.62 11.95 8.7c.2-.182.4-.182.6 0 .183.2.183.401 0 .602L7.3 14.55Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownSmRegularIcon);
export default ForwardRef;

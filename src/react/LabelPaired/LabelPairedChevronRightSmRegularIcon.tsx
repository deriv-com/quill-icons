import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronRightSmRegularIcon = (
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
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.3 10.45c.183.2.183.4 0 .6L3.05 16.3c-.2.183-.4.183-.6 0-.183-.2-.183-.4 0-.6l4.921-4.95L2.45 5.8c-.182-.2-.182-.4 0-.6.2-.183.401-.183.602 0l5.25 5.25Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightSmRegularIcon);
export default ForwardRef;

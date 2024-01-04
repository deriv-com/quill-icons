import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrustpilotSmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.2 13.621 9 14.47l4.54 3.281-1.34-4.129Zm4.155-4.512L9 14.47 4.434 17.75l1.75-5.332-4.567-3.309H7.25L9 3.75l1.723 5.36h5.632Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrustpilotSmIcon);
export default ForwardRef;

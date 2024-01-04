import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedGooglePlaySmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='m8.887 10.148 1.64-1.64-7.656-4.403 6.016 6.043ZM1.285 3.75l7.027 7-7.027 7c-.383-.2-.583-.52-.601-.957V4.707c.018-.437.218-.756.601-.957Zm11.621 6.18c.274.2.41.474.41.82s-.127.62-.382.82l-1.641.957-1.777-1.777L11.293 9l1.613.93ZM2.871 17.395l6.016-6.043 1.64 1.64-7.656 4.402Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlaySmIcon);
export default ForwardRef;

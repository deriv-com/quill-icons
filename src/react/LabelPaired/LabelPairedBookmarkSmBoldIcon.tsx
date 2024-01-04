import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBookmarkSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 5.063c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383V15.809l3.554-2.516a.657.657 0 0 1 .766 0l3.554 2.516V5.063H1.564V3.75h7.875c.364.018.674.146.93.383.236.255.364.565.382.93v12.03c0 .256-.118.447-.355.575a.701.701 0 0 1-.684-.027L5.5 14.633 1.29 17.64a.702.702 0 0 1-.685.027.684.684 0 0 1-.355-.574V5.062Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkSmBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.523 16.164A.904.904 0 0 1 .25 15.5c0-.26.091-.482.273-.664l6.875-6.563c.47-.364.912-.364 1.329 0 .364.47.351.912-.04 1.329l-5.156 4.96h13.281c.573.053.886.365.938.938-.052.573-.365.885-.938.938H3.533l5.195 4.96c.364.417.364.86 0 1.329-.417.364-.847.364-1.29 0L.563 16.164H.523Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftLgBoldIcon);
export default ForwardRef;

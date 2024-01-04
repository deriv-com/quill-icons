import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightLgBoldIcon = (
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
        d='m17.477 16.164-6.875 6.563c-.47.364-.912.364-1.329 0-.364-.47-.364-.912 0-1.329l5.196-4.96H1.188c-.573-.053-.886-.365-.938-.938.052-.573.365-.885.938-.938h13.28l-5.155-4.96c-.391-.417-.404-.86-.04-1.329.417-.364.86-.364 1.329 0l6.875 6.563a.904.904 0 0 1 .273.664c0 .26-.091.482-.273.664Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightLgBoldIcon);
export default ForwardRef;

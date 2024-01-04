import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedGooglePlayCaptionIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m7.617 8.984 1.406-1.406-6.562-3.773 5.156 5.18ZM1.102 3.5l6.023 6-6.023 6a.91.91 0 0 1-.516-.82V4.32a.91.91 0 0 1 .516-.82Zm9.96 5.297a.825.825 0 0 1 .352.703c0 .297-.11.531-.328.703l-1.406.82L8.156 9.5 9.68 8l1.383.797Zm-8.601 6.398 5.156-5.18 1.406 1.407-6.562 3.773Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayCaptionIcon);
export default ForwardRef;

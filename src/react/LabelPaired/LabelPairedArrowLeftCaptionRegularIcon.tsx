import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m.367 9.242 4.125-4.125c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L1.539 9.125h8.836c.234.016.36.14.375.375-.016.234-.14.36-.375.375H1.539l3.469 3.492c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L.367 9.758c-.156-.172-.156-.344 0-.516Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftCaptionRegularIcon);
export default ForwardRef;

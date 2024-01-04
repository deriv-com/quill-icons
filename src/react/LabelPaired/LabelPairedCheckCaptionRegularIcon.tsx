import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCheckCaptionRegularIcon = (
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
        d='M10.633 5.867c.156.172.156.344 0 .516l-6.375 6.375c-.172.156-.344.156-.516 0L.367 9.383c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0L4 11.961l6.117-6.094c.172-.156.344-.156.516 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckCaptionRegularIcon);
export default ForwardRef;

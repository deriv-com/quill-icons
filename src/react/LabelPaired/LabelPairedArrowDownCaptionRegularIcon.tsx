import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.242 14.633.117 10.508c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l3.492 3.469V4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375v8.836l3.492-3.469c.172-.156.344-.156.516 0 .156.172.156.344 0 .516l-4.125 4.125c-.172.156-.344.156-.516 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownCaptionRegularIcon);
export default ForwardRef;

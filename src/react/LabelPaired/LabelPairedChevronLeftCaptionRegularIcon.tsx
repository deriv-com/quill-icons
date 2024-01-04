import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.742 9.758c-.156-.172-.156-.344 0-.516l4.5-4.5c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L1.539 9.5l4.219 4.242c.156.172.156.344 0 .516-.172.156-.344.156-.516 0l-4.5-4.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionRegularIcon);
export default ForwardRef;

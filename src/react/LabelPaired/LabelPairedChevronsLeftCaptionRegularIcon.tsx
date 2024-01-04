import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsLeftCaptionRegularIcon = (
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
        d='m1.242 9.242 4.5-4.5c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L2.039 9.5l4.219 4.242c.156.172.156.344 0 .516-.172.156-.344.156-.516 0l-4.5-4.5c-.156-.172-.156-.344 0-.516Zm9-4.5c.172-.156.344-.156.516 0 .156.172.156.344 0 .516L6.539 9.5l4.219 4.242c.156.172.156.344 0 .516-.172.156-.344.156-.516 0l-4.5-4.5c-.156-.172-.156-.344 0-.516l4.5-4.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionRegularIcon);
export default ForwardRef;

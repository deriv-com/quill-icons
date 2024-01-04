import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightArrowLeftCaptionRegularIcon = (
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
        d='m10.633 6.758-2.25 2.25c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l1.594-1.617H.625C.391 6.859.265 6.735.25 6.5c.016-.234.14-.36.375-.375h8.836L7.867 4.508c-.156-.172-.156-.344 0-.516.172-.156.344-.156.516 0l2.25 2.25c.156.172.156.344 0 .516Zm-8.016 8.25-2.25-2.25c-.156-.172-.156-.344 0-.516l2.25-2.25c.172-.156.344-.156.516 0 .156.172.156.344 0 .516l-1.594 1.617h8.836c.234.016.36.14.375.375-.016.234-.14.36-.375.375H1.539l1.594 1.617c.156.172.156.344 0 .516-.172.156-.344.156-.516 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftCaptionRegularIcon);
export default ForwardRef;

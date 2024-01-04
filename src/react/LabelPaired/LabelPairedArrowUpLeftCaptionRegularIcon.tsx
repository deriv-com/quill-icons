import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpLeftCaptionRegularIcon = (
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
        d='M1.125 5.75h5.25c.234.016.36.14.375.375-.016.234-.14.36-.375.375H2.039l6.094 6.117c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L1.5 7.039v4.336c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-5.25c.016-.234.14-.36.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionRegularIcon);
export default ForwardRef;

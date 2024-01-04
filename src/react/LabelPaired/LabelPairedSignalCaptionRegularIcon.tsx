import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M13.875 3.875v11.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V3.875c.016-.234.14-.36.375-.375.234.016.36.14.375.375ZM10.5 5.75c.234.016.36.14.375.375v9c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9c.016-.234.14-.36.375-.375ZM7.875 8.375v6.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-6.75c.016-.234.14-.36.375-.375.234.016.36.14.375.375ZM4.5 10.25c.234.016.36.14.375.375v4.5c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-4.5c.016-.234.14-.36.375-.375Zm-3 2.25c.234.016.36.14.375.375v2.25c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-2.25c.016-.234.14-.36.375-.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalCaptionRegularIcon);
export default ForwardRef;

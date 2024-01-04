import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarcodeCaptionBoldIcon = (
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
        d='M.563 4.25c.343.031.53.219.562.563v9.375c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V4.813c.031-.344.219-.532.563-.563Zm2.062 0c.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9.75c.016-.234.14-.36.375-.375Zm1.688 0c.343.031.53.219.562.563v9.375c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V4.813c.031-.344.219-.532.563-.563Zm2.625 0c.343.031.53.219.562.563v9.375c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V4.813c.031-.344.219-.532.563-.563Zm3.937.563c.031-.344.219-.532.563-.563.343.031.53.219.562.563v9.375c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V4.813Zm-1.5-.188c.016-.234.14-.36.375-.375.234.016.36.14.375.375v9.75c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375v-9.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeCaptionBoldIcon);
export default ForwardRef;

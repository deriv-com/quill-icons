import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCompressCaptionBoldIcon = (
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
        d='M4 4.813v2.625c-.031.343-.219.53-.563.562H.813C.469 7.969.28 7.781.25 7.437c.031-.343.219-.53.563-.562h2.062V4.812c.031-.343.219-.53.563-.562.343.031.53.219.562.563ZM.812 11h2.625c.344.031.532.219.563.563v2.624c-.031.344-.219.532-.563.563-.343-.031-.53-.219-.562-.563v-2.062H.812c-.343-.031-.53-.219-.562-.563.031-.343.219-.53.563-.562Zm7.313-6.188v2.063h2.063c.343.031.53.219.562.563-.031.343-.219.53-.563.562H7.563c-.344-.031-.532-.219-.563-.563V4.813c.031-.343.219-.53.563-.562.343.031.53.219.562.563ZM7.562 11h2.625c.344.031.532.219.563.563-.031.343-.219.53-.563.562H8.126v2.063c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563v-2.624c.031-.344.219-.532.563-.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressCaptionBoldIcon);
export default ForwardRef;

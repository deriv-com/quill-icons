import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsCaptionBoldIcon = (
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
        d='M.25 5.563C.281 5.218.469 5.03.813 5h9.374c.344.031.532.219.563.563-.031.343-.219.53-.563.562H.813C.469 6.094.28 5.906.25 5.562Zm0 3.75c.031-.344.219-.532.563-.563h9.374c.344.031.532.219.563.563-.031.343-.219.53-.563.562H.813C.469 9.844.28 9.656.25 9.312Zm10.5 3.75c-.031.343-.219.53-.563.562H.813c-.344-.031-.532-.219-.563-.563.031-.343.219-.53.563-.562h9.374c.344.031.532.219.563.563Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsCaptionBoldIcon);
export default ForwardRef;

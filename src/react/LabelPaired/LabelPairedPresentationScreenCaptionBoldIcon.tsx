import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPresentationScreenCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.813 3.5h12.374c.344.031.532.219.563.563-.031.343-.219.53-.563.562H.813C.469 4.594.28 4.406.25 4.062c.031-.343.219-.53.563-.562ZM1 5.375h1.125v5.063c.016.109.078.171.188.187h9.375c.109-.016.171-.078.187-.188V5.375H13v5.063c-.016.374-.14.687-.375.937-.25.234-.563.36-.938.375H7.564v1.078l1.71 1.711c.22.266.22.531 0 .797-.265.219-.53.219-.796 0L7 13.859l-1.477 1.477c-.265.219-.53.219-.796 0-.22-.266-.22-.531 0-.797l1.71-1.71V11.75H2.313a1.408 1.408 0 0 1-.937-.375A1.408 1.408 0 0 1 1 10.437V5.375Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenCaptionBoldIcon);
export default ForwardRef;

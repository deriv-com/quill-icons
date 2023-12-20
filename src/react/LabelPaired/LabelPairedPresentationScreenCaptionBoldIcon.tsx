import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.813 3.5h12.375c.343.031.53.219.562.563-.031.343-.219.53-.562.562H.813C.469 4.594.28 4.406.25 4.063c.031-.344.219-.532.563-.563M1 5.375h1.125v5.063c.016.109.078.171.188.187h9.375c.109-.016.171-.078.187-.187V5.375H13v5.063c-.016.374-.14.687-.375.937-.25.234-.562.36-.937.375H7.562v1.078l1.711 1.711c.22.266.22.531 0 .797-.265.219-.53.219-.796 0L7 13.859l-1.477 1.477c-.265.219-.53.219-.796 0-.22-.266-.22-.531 0-.797l1.71-1.71V11.75H2.314a1.408 1.408 0 0 1-.938-.375A1.408 1.408 0 0 1 1 10.438z'
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

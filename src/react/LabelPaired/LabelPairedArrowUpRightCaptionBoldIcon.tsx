import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpRightCaptionBoldIcon = (
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
        d='M7.688 5.75c.343.031.53.219.562.563v5.625c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V7.673l-5.414 5.414c-.266.219-.531.219-.797 0-.219-.266-.219-.531 0-.797l5.414-5.414H2.062c-.343-.031-.53-.219-.562-.563.031-.343.219-.53.563-.562h5.624Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightCaptionBoldIcon);
export default ForwardRef;

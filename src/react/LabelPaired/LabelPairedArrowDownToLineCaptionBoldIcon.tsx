import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowDownToLineCaptionBoldIcon = (
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
        d='M8.438 14.75H.561c-.343-.031-.53-.219-.562-.563.031-.343.219-.53.563-.562h7.875c.343.031.53.219.562.563-.031.343-.219.53-.563.562Zm-4.336-3.188v.024l-3-3.188c-.22-.28-.211-.546.023-.796.266-.22.531-.211.797.023l2.016 2.156V4.812c.03-.343.218-.53.562-.562.344.031.531.219.563.563V9.78l2.039-2.156c.25-.234.515-.242.796-.023.22.25.227.507.024.773l-3 3.188a.583.583 0 0 1-.422.187.51.51 0 0 1-.398-.188Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineCaptionBoldIcon);
export default ForwardRef;

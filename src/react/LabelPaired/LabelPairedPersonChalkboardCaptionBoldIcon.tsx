import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedPersonChalkboardCaptionBoldIcon = (
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
        d='M4.5 5.75a1.168 1.168 0 0 1-.984-.563 1.195 1.195 0 0 1 0-1.125c.234-.359.562-.546.984-.562.422.016.75.203.984.563.188.375.188.75 0 1.125-.234.359-.562.546-.984.562Zm-.328 1.875h-.047v3h.75v-3h-.703Zm-.047 7.313c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V8.75l-1.008 1.781c-.203.281-.46.352-.773.211-.282-.203-.352-.46-.211-.773L2.39 7.555c.187-.328.437-.586.75-.774A1.967 1.967 0 0 1 4.17 6.5H7.5V4.625c.016-.313.125-.578.328-.797.219-.203.484-.312.797-.328h5.25c.313.016.578.125.797.328.203.219.312.485.328.797v5.25a1.223 1.223 0 0 1-.328.797 1.223 1.223 0 0 1-.797.328h-5.25a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797V8.75h1.125v1.125h5.25v-5.25h-5.25V6.5h.563c.343.031.53.219.562.563-.031.343-.219.53-.563.562H6v7.313c-.031.343-.219.53-.563.562-.343-.031-.53-.219-.562-.563V11.75h-.75v3.188Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardCaptionBoldIcon);
export default ForwardRef;

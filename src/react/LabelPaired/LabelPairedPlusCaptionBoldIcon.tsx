import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.063 5.188v3.75h3.75c.343.03.53.218.562.562-.031.344-.219.531-.562.563h-3.75v3.75c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.562-.562v-3.75h-3.75C.844 10.03.656 9.843.625 9.5c.031-.344.219-.531.563-.562h3.75v-3.75c.03-.344.218-.532.562-.563.344.031.531.219.563.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionBoldIcon);
export default ForwardRef;

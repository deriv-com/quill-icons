import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpLeftCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.313 5.75h5.625c.343.031.53.219.562.563-.031.343-.219.53-.562.562H2.672l5.414 5.414c.219.266.219.531 0 .797-.266.219-.531.219-.797 0L1.875 7.672v4.266c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V6.312c.031-.343.219-.53.563-.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftCaptionBoldIcon);
export default ForwardRef;

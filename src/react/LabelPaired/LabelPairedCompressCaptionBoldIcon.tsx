import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCompressCaptionBoldIcon = (
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
        d='M4 4.813v2.625c-.031.343-.219.53-.562.562H.813C.469 7.969.28 7.781.25 7.438c.031-.344.219-.532.563-.563h2.062V4.813c.031-.344.219-.532.563-.563.343.031.53.219.562.563M.813 11h2.625c.343.031.53.219.562.563v2.624c-.031.344-.219.532-.562.563-.344-.031-.532-.219-.563-.562v-2.063H.813c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563m7.312-6.187v2.062h2.063c.343.031.53.219.562.563-.031.343-.219.53-.562.562H7.562c-.343-.031-.53-.219-.562-.562V4.813c.031-.344.219-.532.563-.563.343.031.53.219.562.563M7.563 11h2.625c.343.031.53.219.562.563-.031.343-.219.53-.562.562H8.124v2.063c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562v-2.626c.031-.343.219-.53.563-.562'
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

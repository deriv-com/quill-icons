import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandCaptionBoldIcon = (
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
        d='M3.438 4.25c.343.031.53.219.562.563-.031.343-.219.53-.562.562H1.374v2.063c-.031.343-.219.53-.562.562C.469 7.969.28 7.781.25 7.438V4.813c.031-.344.219-.532.563-.563zM.25 11.563c.031-.344.219-.532.563-.563.343.031.53.219.562.563v2.062h2.063c.343.031.53.219.562.563-.031.343-.219.53-.562.562H.813c-.344-.031-.532-.219-.563-.562zm9.938-7.313c.343.031.53.219.562.563v2.625c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V5.374H7.563c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563zm-.563 7.313c.031-.344.219-.532.563-.563.343.031.53.219.562.563v2.624c-.031.344-.219.532-.562.563H7.562c-.343-.031-.53-.219-.562-.562.031-.344.219-.532.563-.563h2.062z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandCaptionBoldIcon);
export default ForwardRef;

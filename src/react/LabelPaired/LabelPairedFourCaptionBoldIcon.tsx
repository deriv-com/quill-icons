import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFourCaptionBoldIcon = (
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
        d='M4.43 5.07 1.5 10.625h4.875V7.063c.031-.344.219-.532.563-.563.343.031.53.219.562.563v3.562h.938c.343.031.53.219.562.563-.031.343-.219.53-.562.562H7.5v2.438c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V11.75H.563c-.204 0-.368-.094-.493-.281a.552.552 0 0 1 0-.54l3.375-6.374c.188-.297.438-.375.75-.235.297.188.375.438.235.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourCaptionBoldIcon);
export default ForwardRef;

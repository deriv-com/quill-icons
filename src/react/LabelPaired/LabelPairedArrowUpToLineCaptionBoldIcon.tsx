import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpToLineCaptionBoldIcon = (
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
        d='M.563 4.25h7.875c.343.031.53.219.562.563-.031.343-.219.53-.562.562H.561C.22 5.344.032 5.156 0 4.813c.031-.344.219-.532.563-.563m4.359 3.188h-.024l3 3.187c.22.266.211.523-.023.773-.266.22-.523.211-.773-.023l-2.04-2.133v4.945c-.03.344-.218.532-.562.563-.344-.031-.531-.219-.562-.562V9.242l-2.04 2.156c-.25.22-.507.227-.773.024-.234-.266-.242-.531-.023-.797l3-3.187A.51.51 0 0 1 4.5 7.25c.156 0 .297.063.422.188'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineCaptionBoldIcon);
export default ForwardRef;

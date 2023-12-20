import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftToLineCaptionBoldIcon = (
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
        d='M.25 13.438V5.562C.281 5.22.469 5.033.813 5c.343.031.53.219.562.563v7.875c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562m3.188-4.336 3.187-3c.266-.22.523-.211.773.023.22.266.211.531-.023.797L5.242 8.938h4.946c.343.03.53.218.562.562-.031.344-.219.531-.562.563H5.242l2.156 2.039c.22.25.227.515.024.796-.266.22-.531.227-.797.024l-3.187-3A.583.583 0 0 1 3.25 9.5a.51.51 0 0 1 .188-.398'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineCaptionBoldIcon);
export default ForwardRef;

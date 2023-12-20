import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightToLineCaptionBoldIcon = (
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
        d='M10.75 5.563v7.875c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V5.562c.031-.343.219-.53.563-.562.343.031.53.219.562.563M7.563 9.922l.023-.024-3.188 3c-.28.22-.546.211-.796-.023-.22-.266-.211-.523.023-.773l2.156-2.04H.813C.469 10.033.28 9.845.25 9.5c.031-.344.219-.531.563-.562H5.78l-2.156-2.04c-.234-.25-.242-.507-.023-.773.25-.234.507-.242.773-.023l3.188 3a.51.51 0 0 1 .187.398.583.583 0 0 1-.187.422'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightToLineCaptionBoldIcon);
export default ForwardRef;

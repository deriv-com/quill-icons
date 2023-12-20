import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenLineCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m.555 13.79.539-1.83c.11-.343.289-.632.539-.866l7.125-7.149a1.482 1.482 0 0 1 1.055-.422c.39 0 .742.141 1.054.422l.938.938a1.5 1.5 0 0 1 .422 1.195 1.504 1.504 0 0 1-.422.914L4.68 14.117l-.094.094c-.234.203-.5.351-.797.445l-1.828.54-.984.28a.535.535 0 0 1-.563-.14.605.605 0 0 1-.14-.563zm1.476-.962-.398 1.29 1.289-.376.562-.164c.141-.047.274-.125.399-.234l5.344-5.367-1.454-1.454-5.343 5.344-.047.047c-.094.11-.164.227-.211.352zm4.031 1.547h7.126c.343.031.53.219.562.563-.031.343-.219.53-.562.562H6.062c-.343-.031-.53-.219-.562-.562.031-.344.219-.532.563-.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineCaptionBoldIcon);
export default ForwardRef;

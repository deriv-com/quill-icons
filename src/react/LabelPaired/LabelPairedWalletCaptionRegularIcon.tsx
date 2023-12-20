import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.875 4.25h9c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-9a1.223 1.223 0 0 0-.797.328 1.223 1.223 0 0 0-.328.797v6.75c.016.313.125.578.328.797.219.203.484.312.797.328h8.25c.313-.016.578-.125.797-.328.203-.219.312-.485.328-.797v-5.25a1.223 1.223 0 0 0-.328-.797 1.223 1.223 0 0 0-.797-.328h-7.5c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h7.5c.531.016.977.195 1.336.54.344.358.523.804.539 1.335v5.25c-.016.531-.195.977-.54 1.336-.358.344-.804.523-1.335.539h-8.25c-.531-.016-.977-.195-1.336-.54-.344-.358-.523-.804-.539-1.335v-6.75c.016-.531.195-.977.54-1.336.358-.344.804-.523 1.335-.539M9 10.813c-.344-.032-.531-.22-.562-.563.03-.344.218-.531.562-.562.344.03.531.218.563.562-.032.344-.22.531-.563.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCaptionRegularIcon);
export default ForwardRef;

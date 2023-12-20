import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExclamationCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 2 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.563 4.813v6.75c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.562-.562v-6.75c.03-.344.218-.532.562-.563.344.031.531.219.563.563M1 14.75a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h2v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationCaptionBoldIcon);
export default ForwardRef;

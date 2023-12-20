import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExclamationCaptionRegularIcon = (
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
        d='M1.375 4.625v7.125c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V4.625c.016-.234.14-.36.375-.375.234.016.36.14.375.375M1 14.563C.656 14.53.469 14.343.438 14c.03-.344.218-.531.562-.562.344.03.531.218.563.562-.032.344-.22.531-.563.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h2v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationCaptionRegularIcon);
export default ForwardRef;

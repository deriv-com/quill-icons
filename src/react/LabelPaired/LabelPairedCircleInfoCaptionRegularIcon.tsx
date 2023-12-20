import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCircleInfoCaptionRegularIcon = (
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
        d='M6 4.25a5.403 5.403 0 0 0-2.625.703 5.393 5.393 0 0 0-1.922 1.922 5.25 5.25 0 0 0 0 5.25 5.394 5.394 0 0 0 1.922 1.922A5.403 5.403 0 0 0 6 14.75a5.403 5.403 0 0 0 2.625-.703 5.394 5.394 0 0 0 1.922-1.922 5.25 5.25 0 0 0 0-5.25 5.394 5.394 0 0 0-1.922-1.922A5.403 5.403 0 0 0 6 4.25M6 15.5a6.142 6.142 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.075 6.075 0 0 1 0 9.5c0-1.047.266-2.047.797-3A6.2 6.2 0 0 1 3 4.297 6.143 6.143 0 0 1 6 3.5a6.143 6.143 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5c.531.953.797 1.953.797 3a6.074 6.074 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.142 6.142 0 0 1-3 .797m-1.125-3.75h.75V9.5h-.562c-.235-.016-.36-.14-.375-.375.015-.234.14-.36.375-.375H6c.234.016.36.14.375.375v2.625h.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-2.25c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375M6 7.813c-.344-.032-.531-.22-.562-.563.03-.344.218-.531.562-.562.344.03.531.218.563.562-.032.344-.22.531-.563.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleInfoCaptionRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedImageCaptionBoldIcon = (
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
        d='M10.5 5.375h-9c-.234.016-.36.14-.375.375v7.5l.117-.14 1.875-2.626a.516.516 0 0 1 .446-.234c.187 0 .343.078.468.234l.703 1.008L6.68 8.961c.11-.14.258-.211.445-.211.188 0 .336.07.445.21l3.188 4.126.117.164v-7.5c-.016-.234-.14-.36-.375-.375m-9-1.125h9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v7.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-9a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 13.25v-7.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445m1.875 4.5a1.168 1.168 0 0 1-.984-.562 1.195 1.195 0 0 1 0-1.126c.234-.359.562-.546.984-.562.422.016.75.203.984.563.188.375.188.75 0 1.125-.234.359-.562.546-.984.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageCaptionBoldIcon);
export default ForwardRef;

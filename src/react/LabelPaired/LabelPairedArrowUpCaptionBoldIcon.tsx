import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpCaptionBoldIcon = (
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
        d='M4.898 4.414v.024l3.938 4.125c.219.265.219.523 0 .773-.281.219-.547.219-.797 0L5.063 6.219v7.969c-.032.343-.22.53-.563.562-.344-.031-.531-.219-.562-.562v-7.97L.96 9.314c-.25.234-.516.242-.797.023-.219-.25-.219-.516 0-.797l3.938-4.125A.542.542 0 0 1 4.5 4.25c.156 0 .29.055.398.164'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpCaptionBoldIcon);
export default ForwardRef;

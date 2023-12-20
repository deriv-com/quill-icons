import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZCaptionBoldIcon = (
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
        d='M10 4.25c.234 0 .406.102.516.305l1.875 3.75c.109.328.023.586-.258.773-.328.11-.578.024-.75-.258l-.328-.633H8.945l-.328.633c-.172.297-.422.383-.75.258-.297-.187-.383-.445-.258-.773l1.875-3.75A.648.648 0 0 1 10 4.25m-.492 2.813h.984L10 6.078zM3.602 4.414c.265-.219.53-.219.796 0l2.25 2.25c.22.266.22.531 0 .797-.265.219-.53.219-.796 0l-1.29-1.29v8.017c-.03.343-.218.53-.562.562-.344-.031-.531-.219-.562-.562V6.172L2.148 7.46c-.265.219-.53.219-.796 0-.22-.266-.22-.531 0-.797zM8.5 10.25h3a.595.595 0 0 1 .516.328.55.55 0 0 1-.094.61l-2.18 2.437H11.5c.344.031.531.219.563.563-.032.343-.22.53-.563.562h-3a.595.595 0 0 1-.516-.328.55.55 0 0 1 .094-.61l2.18-2.437H8.5c-.344-.031-.531-.219-.562-.562.03-.344.218-.532.562-.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZCaptionBoldIcon);
export default ForwardRef;

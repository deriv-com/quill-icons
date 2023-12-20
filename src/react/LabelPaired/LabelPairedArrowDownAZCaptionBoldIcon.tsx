import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownAZCaptionBoldIcon = (
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
        d='M1.352 12.336c-.22-.266-.22-.531 0-.797.265-.219.53-.219.796 0l1.29 1.29V4.811c.03-.343.218-.53.562-.562.344.031.531.219.563.563v8.015l1.289-1.289c.265-.219.53-.219.796 0 .22.266.22.531 0 .797l-2.25 2.25c-.265.219-.53.219-.796 0zM8.5 10.25h3a.595.595 0 0 1 .516.328.615.615 0 0 1-.094.61l-2.18 2.437H11.5c.344.031.531.219.563.563-.032.343-.22.53-.563.562h-3a.595.595 0 0 1-.516-.328.615.615 0 0 1 .094-.61l2.18-2.437H8.5c-.344-.031-.531-.219-.562-.562.03-.344.218-.532.562-.563m1.5-6c.234.016.398.117.492.305l1.875 3.75c.125.328.047.578-.234.75-.328.125-.578.047-.75-.235l-.328-.633H8.945l-.328.633c-.172.282-.422.367-.75.258-.281-.187-.36-.445-.234-.773l1.875-3.75A.528.528 0 0 1 10 4.25m-.492 2.813h.984L10 6.078z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZCaptionBoldIcon);
export default ForwardRef;

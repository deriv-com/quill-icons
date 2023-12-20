import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownCaptionBoldIcon = (
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
        d='m12.648 12.336-2.25 2.25c-.265.219-.53.219-.796 0l-2.25-2.25c-.22-.266-.22-.531 0-.797.265-.219.53-.219.796 0l1.29 1.29V4.811c.03-.343.218-.53.562-.562.344.031.531.219.563.563v8.015l1.289-1.289c.265-.219.53-.219.796 0 .22.266.22.531 0 .797m-8.25-7.922 2.25 2.25c.22.266.22.531 0 .797-.265.219-.53.219-.796 0l-1.29-1.29v8.017c-.03.343-.218.53-.562.562-.344-.031-.531-.219-.562-.562V6.172L2.148 7.46c-.265.219-.53.219-.796 0-.22-.266-.22-.531 0-.797l2.25-2.25c.265-.219.53-.219.796 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownCaptionBoldIcon);
export default ForwardRef;

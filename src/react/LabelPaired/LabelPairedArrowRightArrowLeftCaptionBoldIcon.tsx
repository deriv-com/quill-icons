import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m2.664 15.148-2.25-2.25c-.219-.265-.219-.53 0-.796l2.25-2.25c.266-.22.531-.22.797 0 .219.265.219.53 0 .796l-1.29 1.29h8.017c.343.03.53.218.562.562-.031.344-.219.531-.562.563H2.172l1.289 1.289c.219.265.219.53 0 .796-.266.22-.531.22-.797 0m7.922-8.25-2.25 2.25c-.266.22-.531.22-.797 0-.219-.265-.219-.53 0-.796l1.29-1.29H.811C.47 7.033.283 6.845.25 6.5c.031-.344.219-.531.563-.562h8.015L7.54 4.648c-.219-.265-.219-.53 0-.796.266-.22.531-.22.797 0l2.25 2.25c.219.265.219.53 0 .796'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftCaptionBoldIcon);
export default ForwardRef;

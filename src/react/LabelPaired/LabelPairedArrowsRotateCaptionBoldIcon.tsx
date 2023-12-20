import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowsRotateCaptionBoldIcon = (
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
        d='M11.625 8.188c-.031.343-.219.53-.562.562H7.687c-.343-.031-.53-.219-.562-.562.031-.344.219-.532.563-.563H9.703L8.484 6.406A3.512 3.512 0 0 0 6 5.375c-.86.016-1.625.25-2.297.703a4.127 4.127 0 0 0-1.5 1.805c-.156.312-.398.414-.726.305-.313-.172-.415-.422-.305-.75A5.143 5.143 0 0 1 3.07 5.14c.86-.578 1.836-.875 2.93-.891 1.266.016 2.36.469 3.281 1.36L10.5 6.827V4.812c.031-.343.219-.53.563-.562.343.031.53.219.562.563zM.938 10.25h2.625c.343.031.53.219.562.563-.031.343-.219.53-.562.562H2.297l1.219 1.219A3.512 3.512 0 0 0 6 13.625c.86-.016 1.625-.25 2.297-.703a4.127 4.127 0 0 0 1.5-1.805c.156-.297.398-.39.726-.281.313.156.415.398.305.726A5.354 5.354 0 0 1 8.93 13.86c-.86.579-1.836.875-2.93.891-1.266-.016-2.36-.469-3.281-1.36L1.5 12.173v1.265c-.031.344-.219.532-.562.563-.344-.031-.532-.219-.563-.562v-2.626c.031-.343.219-.53.563-.562'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateCaptionBoldIcon);
export default ForwardRef;

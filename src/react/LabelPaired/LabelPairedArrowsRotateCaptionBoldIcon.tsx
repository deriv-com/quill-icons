import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowsRotateCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.625 8.188c-.031.343-.219.53-.563.562H7.688c-.344-.031-.532-.219-.563-.563.031-.343.219-.53.563-.562H9.703L8.484 6.406A3.512 3.512 0 0 0 6 5.375c-.86.016-1.625.25-2.297.703a4.127 4.127 0 0 0-1.5 1.805c-.156.312-.398.414-.726.304-.313-.171-.415-.421-.305-.75A5.143 5.143 0 0 1 3.07 5.142c.86-.579 1.836-.875 2.93-.891 1.266.016 2.36.469 3.281 1.36L10.5 6.827V4.812c.031-.343.219-.53.563-.562.343.031.53.219.562.563v3.375ZM.937 10.25h2.625c.344.031.532.219.563.563-.031.343-.219.53-.563.562H2.298l1.219 1.219A3.512 3.512 0 0 0 6 13.625c.86-.016 1.625-.25 2.297-.703a4.127 4.127 0 0 0 1.5-1.805c.156-.297.398-.39.726-.281.313.156.415.398.305.726A5.354 5.354 0 0 1 8.93 13.86c-.86.579-1.836.875-2.93.891-1.266-.016-2.36-.469-3.281-1.36L1.5 12.173v1.265c-.031.344-.219.532-.563.563-.343-.031-.53-.219-.562-.563v-2.624c.031-.344.219-.532.563-.563Z'
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

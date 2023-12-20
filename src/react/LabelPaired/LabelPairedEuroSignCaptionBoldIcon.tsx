import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEuroSignCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.398 9.125H.813C.469 9.094.28 8.906.25 8.563.281 8.219.469 8.03.813 8h.773A5.246 5.246 0 0 1 3.46 5.305c.906-.688 1.96-1.04 3.164-1.055h.563c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-.563c-.89.016-1.672.258-2.344.727A4.17 4.17 0 0 0 2.781 8h3.657c.343.031.53.219.562.563-.031.343-.219.53-.562.562H2.523a3.02 3.02 0 0 0 0 .75h3.915c.343.031.53.219.562.563-.031.343-.219.53-.562.562H2.78a4.17 4.17 0 0 0 1.5 1.898c.672.47 1.453.711 2.344.727h.563c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-.563c-1.203-.016-2.258-.367-3.164-1.055A5.245 5.245 0 0 1 1.586 11H.812c-.343-.031-.53-.219-.562-.562.031-.344.219-.532.563-.563h.585a3.02 3.02 0 0 1 0-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignCaptionBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedThreeCaptionBoldIcon = (
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
        d='M.25 4.813c.031-.344.219-.532.563-.563h6c.25.016.421.133.515.352.094.234.055.437-.117.609L3.719 8.562h.937c.875.016 1.602.32 2.18.915.594.578.898 1.304.914 2.18-.016.874-.32 1.6-.914 2.179-.578.594-1.305.898-2.18.914H2.523a2.23 2.23 0 0 1-1.265-.375 2.459 2.459 0 0 1-.914-.96L.32 13.32c-.125-.328-.047-.578.235-.75.328-.125.578-.047.75.235l.047.093c.265.47.656.711 1.171.727h2.133c.563-.016 1.024-.21 1.383-.586.375-.36.57-.82.586-1.383-.016-.562-.21-1.023-.586-1.383-.36-.375-.82-.57-1.383-.585H2.313c-.25-.016-.422-.133-.516-.352-.094-.234-.055-.438.117-.61l3.492-3.351H.813C.469 5.344.28 5.156.25 4.813'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThreeCaptionBoldIcon);
export default ForwardRef;

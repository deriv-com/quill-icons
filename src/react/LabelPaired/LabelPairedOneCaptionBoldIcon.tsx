import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedOneCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.563 4.813v8.812h1.874c.344.031.532.219.563.563-.031.343-.219.53-.562.562H.563c-.344-.031-.532-.219-.563-.562.031-.344.219-.532.563-.563h1.875V5.82l-1.594.961c-.297.157-.555.102-.774-.164-.14-.312-.078-.57.188-.773l2.437-1.5a.601.601 0 0 1 .586-.024c.188.11.281.274.281.492'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionBoldIcon);
export default ForwardRef;

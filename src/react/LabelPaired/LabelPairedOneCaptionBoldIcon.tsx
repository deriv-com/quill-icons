import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedOneCaptionBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={6}
    height={18}
    viewBox='0 0 6 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.563 4.813v8.812h1.874c.344.031.532.219.563.563-.031.343-.219.53-.563.562H.563c-.343-.031-.53-.219-.562-.563.031-.343.219-.53.563-.562h1.875V5.82l-1.594.961c-.297.157-.555.102-.774-.164-.14-.312-.078-.57.188-.773l2.437-1.5a.601.601 0 0 1 .586-.024c.188.11.281.274.281.492Z'
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

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBookmarkCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 4.625c.016-.313.125-.578.328-.797.219-.203.484-.312.797-.328h6.75c.313.016.578.125.797.328.203.219.312.485.328.797v10.36c-.031.312-.203.484-.516.515a.436.436 0 0 1-.28-.094L4.5 12.946l-3.703 2.46a.436.436 0 0 1-.281.094c-.313-.031-.485-.203-.516-.516V4.625Zm1.125-.375c-.234.016-.36.14-.375.375v9.914l3.54-2.344a.352.352 0 0 1 .42 0l3.54 2.344V4.625c-.016-.234-.14-.36-.375-.375h-6.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkCaptionRegularIcon);
export default ForwardRef;

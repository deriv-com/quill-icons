import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedOneCaptionRegularIcon = (
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
        d='M3.375 4.625V14h2.25c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.375c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h2.25V5.328L.961 6.43c-.203.11-.375.078-.516-.094-.11-.203-.078-.375.094-.516l2.25-1.5a.402.402 0 0 1 .398-.023.367.367 0 0 1 .188.328'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneCaptionRegularIcon);
export default ForwardRef;

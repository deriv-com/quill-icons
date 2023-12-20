import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisCaptionBoldIcon = (
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
        d='M10.375 9.5c-.016.422-.203.75-.562.984-.376.188-.75.188-1.126 0a1.168 1.168 0 0 1-.562-.984c.016-.422.203-.75.563-.984.374-.188.75-.188 1.124 0 .36.234.547.562.563.984m-3.75 0c-.016.422-.203.75-.562.984-.375.188-.75.188-1.125 0a1.168 1.168 0 0 1-.563-.984c.016-.422.203-.75.563-.984.375-.188.75-.188 1.125 0 .359.234.546.562.562.984M1.75 10.625a1.168 1.168 0 0 1-.984-.562 1.195 1.195 0 0 1 0-1.126c.234-.359.562-.546.984-.562.422.016.75.203.984.563.188.374.188.75 0 1.124-.234.36-.562.547-.984.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisCaptionBoldIcon);
export default ForwardRef;

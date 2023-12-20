import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPercentCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.648 6.148-7.5 7.5c-.265.22-.53.22-.796 0-.22-.265-.22-.53 0-.796l7.5-7.5c.265-.22.53-.22.796 0 .22.265.22.53 0 .796M2.625 6.5c-.016.422-.203.75-.562.984-.376.188-.75.188-1.126 0A1.168 1.168 0 0 1 .375 6.5c.016-.422.203-.75.563-.984.375-.188.75-.188 1.125 0 .359.234.546.562.562.984m6 6c-.016.422-.203.75-.562.984-.376.188-.75.188-1.126 0a1.168 1.168 0 0 1-.562-.984c.016-.422.203-.75.563-.984.375-.188.75-.188 1.125 0 .359.234.546.562.562.984'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentCaptionBoldIcon);
export default ForwardRef;

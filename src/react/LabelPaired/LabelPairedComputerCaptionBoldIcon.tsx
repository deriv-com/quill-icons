import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 5.375H1.5c-.234.016-.36.14-.375.375V11c.016.234.14.36.375.375H9c.234-.016.36-.14.375-.375V5.75c-.016-.234-.14-.36-.375-.375M1.5 12.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 11V5.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445H9c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V11a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H6.96l.376 1.125h1.101c.344.031.532.219.563.563-.031.343-.219.53-.562.562H2.062c-.343-.031-.53-.219-.562-.562.031-.344.219-.532.563-.563h1.101L3.54 12.5zm2.836 1.125h1.828L5.79 12.5H4.711zm8.039-8.25v.75h1.5v-.75zm0 1.875V8h1.5v-.75zm1.5 1.875h-1.5v4.5h1.5zm-2.625-3.75c.016-.312.125-.578.328-.797.219-.203.485-.312.797-.328h1.5c.313.016.578.125.797.328.203.219.312.484.328.797v8.25a1.223 1.223 0 0 1-.328.797 1.223 1.223 0 0 1-.797.328h-1.5a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797zm1.875 6.563c-.344-.032-.531-.22-.562-.563.03-.344.218-.531.562-.562.344.03.531.218.563.562-.032.344-.22.531-.563.563'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerCaptionBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenLineCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.328 4.438c-.265-.22-.531-.22-.797 0L8.242 5.703l1.805 1.805 1.265-1.29c.22-.265.22-.53 0-.796zM2.195 11.75a1.715 1.715 0 0 0-.375.656l-.633 2.156 2.157-.632c.25-.078.469-.203.656-.375l5.508-5.508-1.805-1.805zm6.797-7.852c.266-.25.578-.375.938-.375.343 0 .648.125.914.375l1.008 1.008c.25.266.375.57.375.914 0 .36-.125.672-.375.938l-7.336 7.336a2.22 2.22 0 0 1-.938.562l-2.836.82c-.156.047-.281.016-.375-.093-.11-.094-.14-.211-.094-.352l.82-2.836a2.11 2.11 0 0 1 .587-.96zM5.875 14.75h7.5c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-7.5c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineCaptionRegularIcon);
export default ForwardRef;

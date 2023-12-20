import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLockCaptionBoldIcon = (
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
        d='M3.625 6.5V8h3.75V6.5c-.016-.531-.195-.977-.54-1.336-.358-.344-.804-.523-1.335-.539-.531.016-.977.195-1.336.54-.344.358-.523.804-.539 1.335M2.5 8V6.5c.016-.844.305-1.555.867-2.133.578-.562 1.29-.851 2.133-.867.844.016 1.555.305 2.133.867.562.578.851 1.29.867 2.133V8h.75c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V9.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445zM1.375 9.5V14c.016.234.14.36.375.375h7.5c.234-.016.36-.14.375-.375V9.5c-.016-.234-.14-.36-.375-.375h-7.5c-.234.016-.36.14-.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockCaptionBoldIcon);
export default ForwardRef;

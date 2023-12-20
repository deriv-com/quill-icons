import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCalendarCaptionRegularIcon = (
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
        d='M2.875 3.5c.234.016.36.14.375.375V5h4.5V3.875c.016-.234.14-.36.375-.375.234.016.36.14.375.375V5h.75c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-7.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 14V6.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h.75V3.875c.016-.234.14-.36.375-.375M10 8H1v6c0 .219.07.398.21.54.142.14.321.21.54.21h7.5a.73.73 0 0 0 .54-.21A.73.73 0 0 0 10 14zm-.75-2.25h-7.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v.75h9V6.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarCaptionRegularIcon);
export default ForwardRef;

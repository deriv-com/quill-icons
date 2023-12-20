import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromSquareCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m6.258 3.617 2.437 2.438c.157.172.157.343 0 .515-.172.157-.343.157-.515 0L6.375 4.79V11c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V4.79L3.82 6.57c-.172.157-.343.157-.515 0-.157-.172-.157-.343 0-.515l2.437-2.438c.172-.156.344-.156.516 0M1.5 4.25h.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V14c0 .219.07.398.21.54.142.14.321.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5.75a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21h-.75c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375h.75c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-9a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 0 14V5.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareCaptionRegularIcon);
export default ForwardRef;

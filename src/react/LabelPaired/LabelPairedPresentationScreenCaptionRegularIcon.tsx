import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPresentationScreenCaptionRegularIcon = (
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
        d='M.625 3.5h12.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375H.625c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375M1 5h.75v5.25c0 .219.07.398.21.54.142.14.321.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5H13v5.25a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H7.375v.96l2.133 2.157c.156.172.156.344 0 .516-.172.156-.344.156-.516 0L7 13.414l-1.992 1.969c-.172.156-.344.156-.516 0-.156-.172-.156-.344 0-.516l2.133-2.156v-.961H2.5a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 1 10.25z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenCaptionRegularIcon);
export default ForwardRef;

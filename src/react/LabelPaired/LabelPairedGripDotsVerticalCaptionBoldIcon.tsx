import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedGripDotsVerticalCaptionBoldIcon = (
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
        d='M1.5 6.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54A.73.73 0 0 1 1.5 5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21m0 3.75a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21m.75 3a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54M4.5 6.5a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54A.73.73 0 0 1 4.5 5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21m.75 3a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54M4.5 14a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalCaptionBoldIcon);
export default ForwardRef;

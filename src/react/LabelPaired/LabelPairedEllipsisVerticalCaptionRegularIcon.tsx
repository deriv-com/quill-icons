import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedEllipsisVerticalCaptionRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={18}
    viewBox='0 0 3 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 12.5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21Zm0-3.75a.73.73 0 0 1 .54.21c.14.142.21.321.21.54a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54.73.73 0 0 1 .54-.21Zm.75-3a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54.73.73 0 0 1 .21-.54A.73.73 0 0 1 1.5 5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisVerticalCaptionRegularIcon);
export default ForwardRef;

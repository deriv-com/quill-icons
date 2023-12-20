import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepCaptionFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.492 13.836c-.25.187-.523.219-.82.094-.266-.14-.406-.367-.422-.68v-7.5c.016-.312.156-.54.422-.68.297-.125.57-.093.82.094l4.5 3.75.258.234V5.75a.73.73 0 0 1 .21-.54A.73.73 0 0 1 7 5a.73.73 0 0 1 .54.21c.14.142.21.321.21.54v7.5a.73.73 0 0 1-.21.54A.73.73 0 0 1 7 14a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V9.852l-.258.234z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepCaptionFillIcon);
export default ForwardRef;

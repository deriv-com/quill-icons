import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedVideoCaptionRegularIcon = (
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
        d='M1.75 5.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6c0 .219.07.398.21.54.142.14.321.21.54.21h6a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-6a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-1.5.75c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h6c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v6a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 12.5zm12.164 6.633L10 11.797v-.844l2.79 1.524c.015.015.038.023.07.023.078 0 .124-.047.14-.14V6.64a.166.166 0 0 0-.14-.14c-.032 0-.055.008-.07.023L10 8.047v-.844l2.414-1.336a.903.903 0 0 1 .445-.117c.25 0 .461.086.633.258a.86.86 0 0 1 .258.633v5.718a.86.86 0 0 1-.258.633.86.86 0 0 1-.633.258.904.904 0 0 1-.445-.117'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoCaptionRegularIcon);
export default ForwardRef;

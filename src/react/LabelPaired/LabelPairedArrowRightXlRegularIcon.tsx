import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m20.766 18.516-8.25 8.25c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l6.938-6.984H.75C.281 18.719.031 18.469 0 18c.031-.469.281-.719.75-.75h17.672l-6.938-6.984c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l8.25 8.25c.312.344.312.688 0 1.032'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightXlRegularIcon);
export default ForwardRef;

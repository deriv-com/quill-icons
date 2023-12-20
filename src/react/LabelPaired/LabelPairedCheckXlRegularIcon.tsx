import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCheckXlRegularIcon = (
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
        d='M20.766 10.734c.312.344.312.688 0 1.032l-12.75 12.75c-.344.312-.688.312-1.032 0l-6.75-6.75c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0L7.5 22.922l12.234-12.188c.344-.312.688-.312 1.032 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCheckXlRegularIcon);
export default ForwardRef;

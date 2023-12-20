import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.484 28.266-8.25-8.25c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l6.984 6.938V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v17.672l6.984-6.938c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032l-8.25 8.25c-.344.312-.688.312-1.032 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownXlRegularIcon);
export default ForwardRef;

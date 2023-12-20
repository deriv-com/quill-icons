import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpXlRegularIcon = (
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
        d='m9.516 7.734 8.25 8.25c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L9.75 10.078V27.75c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V10.078l-6.984 6.938c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l8.25-8.25c.344-.312.688-.312 1.032 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpXlRegularIcon);
export default ForwardRef;

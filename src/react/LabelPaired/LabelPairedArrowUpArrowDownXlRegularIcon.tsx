import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpArrowDownXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.016 7.734 4.5 4.5c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L8.25 10.078V27.75c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V10.078l-3.234 3.188c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l4.5-4.5c.344-.312.688-.312 1.032 0m16.5 16.032-4.5 4.5c-.344.312-.688.312-1.032 0l-4.5-4.5c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l3.234 3.188V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v17.672l3.234-3.188c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpRightXlRegularIcon = (
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
        d='M15.75 10.5c.469.031.719.281.75.75v10.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-8.672L2.766 25.266c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032L13.922 12H5.25c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightXlRegularIcon);
export default ForwardRef;

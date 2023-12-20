import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownRightXlRegularIcon = (
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
        d='M15.75 25.5H5.25c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h8.672L1.734 11.766c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0L15 22.922V14.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v10.5c-.031.469-.281.719-.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownRightXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowLeftToLineXlRegularIcon = (
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
        d='M0 26.25V9.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75v16.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75m4.734-8.766 6-6c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032L7.078 17.25H20.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75H7.078l4.688 4.734c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0l-6-6c-.312-.344-.312-.688 0-1.032'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowRightArrowLeftXlRegularIcon = (
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
        d='m20.766 12.516-4.5 4.5c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l3.188-3.234H.75C.281 12.719.031 12.469 0 12c.031-.469.281-.719.75-.75h17.672l-3.188-3.234c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l4.5 4.5c.312.344.312.688 0 1.032m-16.032 16.5-4.5-4.5c-.312-.344-.312-.688 0-1.032l4.5-4.5c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032L2.578 23.25H20.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75H2.578l3.188 3.234c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftXlRegularIcon);
export default ForwardRef;

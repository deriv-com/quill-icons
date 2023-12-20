import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsRightXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.516 27.516c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032L10.922 18 2.484 9.516c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l9 9c.312.344.312.688 0 1.032zm9 0c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032L19.922 18l-8.438-8.484c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l9 9c.312.344.312.688 0 1.032z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightXlRegularIcon);
export default ForwardRef;

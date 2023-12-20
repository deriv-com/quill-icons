import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsUpXlRegularIcon = (
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
        d='m12.516 8.484 9 9c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L12 10.078l-8.484 8.438c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l9-9c.344-.312.688-.312 1.032 0m9 18c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L12 19.078l-8.484 8.438c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l9-9c.344-.312.688-.312 1.032 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpXlRegularIcon);
export default ForwardRef;

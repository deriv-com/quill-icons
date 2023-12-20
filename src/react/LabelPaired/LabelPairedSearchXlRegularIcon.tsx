import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchXlRegularIcon = (
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
        d='M18 15.75c0-1.5-.375-2.875-1.125-4.125-.719-1.25-1.719-2.25-3-3C12.563 7.875 11.188 7.5 9.75 7.5c-1.437 0-2.812.375-4.125 1.125-1.281.75-2.281 1.75-3 3-.75 1.25-1.125 2.625-1.125 4.125s.375 2.875 1.125 4.125c.719 1.25 1.719 2.25 3 3C6.938 23.625 8.313 24 9.75 24c1.438 0 2.813-.375 4.125-1.125 1.281-.75 2.281-1.75 3-3C17.625 18.625 18 17.25 18 15.75m-1.922 7.406c-1.75 1.5-3.86 2.282-6.328 2.344-2.75-.062-5.047-1.016-6.89-2.86C1.015 20.798.062 18.5 0 15.75.063 13 1.016 10.703 2.86 8.86 4.702 7.015 7 6.062 9.75 6c2.75.063 5.047 1.016 6.89 2.86 1.844 1.843 2.797 4.14 2.86 6.89-.062 2.469-.844 4.578-2.344 6.328l6.61 6.656c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchXlRegularIcon);
export default ForwardRef;

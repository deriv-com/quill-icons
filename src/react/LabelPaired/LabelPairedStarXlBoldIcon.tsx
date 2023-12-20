import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarXlBoldIcon = (
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
        d='M13.5 6c.469.031.813.25 1.031.656l3.188 6.61 7.172 1.03c.468.095.78.36.937.798.125.437.031.812-.281 1.125l-5.203 5.156 1.218 7.313c.063.437-.093.812-.468 1.125-.375.25-.766.265-1.172.046L13.5 26.437 7.078 29.86c-.406.22-.797.188-1.172-.093-.375-.282-.531-.641-.468-1.078l1.218-7.313-5.203-5.156c-.312-.313-.406-.688-.281-1.125.156-.438.469-.703.937-.797l7.172-1.031 3.188-6.61c.219-.406.562-.625 1.031-.656m0 3.703-2.484 5.063c-.157.343-.438.562-.844.656l-5.531.797 4.03 3.984c.25.281.36.61.329.985l-.984 5.625 4.968-2.625a1.016 1.016 0 0 1 1.032 0l4.922 2.625L18 21.188c-.062-.375.047-.704.328-.985l4.031-3.984-5.53-.797c-.407-.094-.688-.313-.845-.656z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlBoldIcon);
export default ForwardRef;

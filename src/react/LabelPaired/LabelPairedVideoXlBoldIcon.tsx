import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedVideoXlBoldIcon = (
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
        d='M3 11.25c-.469.031-.719.281-.75.75v12c.031.469.281.719.75.75h12c.469-.031.719-.281.75-.75V12c-.031-.469-.281-.719-.75-.75zM0 12c.031-.844.328-1.547.89-2.11C1.454 9.329 2.157 9.032 3 9h12c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11V24c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 25.546.032 24.843 0 24zm24.75 11.016V12.984l-5.25 2.344v-2.484l4.875-2.156c.25-.126.516-.188.797-.188.5 0 .922.188 1.265.563.375.343.563.78.563 1.312v11.297c0 .5-.187.922-.562 1.265a1.65 1.65 0 0 1-1.266.563c-.281 0-.547-.047-.797-.14L19.5 23.155v-2.484z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoXlBoldIcon);
export default ForwardRef;

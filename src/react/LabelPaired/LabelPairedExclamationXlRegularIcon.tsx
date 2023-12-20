import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExclamationXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 3 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.25 8.25V22.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75M1.5 28.125C.813 28.063.438 27.688.375 27c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h3v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationXlRegularIcon);
export default ForwardRef;

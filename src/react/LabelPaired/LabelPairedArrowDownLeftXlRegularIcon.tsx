import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownLeftXlRegularIcon = (
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
        d='M2.25 25.5c-.469-.031-.719-.281-.75-.75v-10.5c.031-.469.281-.719.75-.75.469.031.719.281.75.75v8.672l12.234-12.188c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032L4.078 24h8.672c.469.031.719.281.75.75-.031.469-.281.719-.75.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftXlRegularIcon);
export default ForwardRef;

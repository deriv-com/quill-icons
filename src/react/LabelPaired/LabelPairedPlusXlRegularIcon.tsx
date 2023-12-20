import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPlusXlRegularIcon = (
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
        d='M11.25 9v8.25h8.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-8.25V27c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-8.25H1.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h8.25V9c.031-.469.281-.719.75-.75.469.031.719.281.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarsFilterXlRegularIcon = (
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
        d='M0 9.75c.031-.469.281-.719.75-.75h19.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H.75c-.469-.031-.719-.281-.75-.75m3 7.5c.031-.469.281-.719.75-.75h13.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H3.75c-.469-.031-.719-.281-.75-.75m10.5 7.5c-.031.469-.281.719-.75.75h-4.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h4.5c.469.031.719.281.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlRegularIcon);
export default ForwardRef;

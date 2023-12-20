import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedExpandXlRegularIcon = (
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
        d='M6.75 7.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75H1.5v5.25c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-6c.031-.469.281-.719.75-.75zM0 21.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75V27h5.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-6c-.469-.031-.719-.281-.75-.75zM20.25 7.5c.469.031.719.281.75.75v6c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V9h-5.25c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75zm-.75 14.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v6c-.031.469-.281.719-.75.75h-6c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h5.25z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandXlRegularIcon);
export default ForwardRef;

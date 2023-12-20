import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCompressXlRegularIcon = (
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
        d='M7.5 8.25v6c-.031.469-.281.719-.75.75h-6c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75H6V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75M.75 21h6c.469.031.719.281.75.75v6c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V22.5H.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75M15 8.25v5.25h5.25c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-6c-.469-.031-.719-.281-.75-.75v-6c.031-.469.281-.719.75-.75.469.031.719.281.75.75M14.25 21h6c.469.031.719.281.75.75-.031.469-.281.719-.75.75H15v5.25c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-6c.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSignalXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M27.75 6.75v22.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V6.75c.031-.469.281-.719.75-.75.469.031.719.281.75.75M21 10.5c.469.031.719.281.75.75v18c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-18c.031-.469.281-.719.75-.75m-5.25 5.25v13.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-13.5c.031-.469.281-.719.75-.75.469.031.719.281.75.75M9 19.5c.469.031.719.281.75.75v9c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-9c.031-.469.281-.719.75-.75M3 24c.469.031.719.281.75.75v4.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-4.5c.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalXlRegularIcon);
export default ForwardRef;

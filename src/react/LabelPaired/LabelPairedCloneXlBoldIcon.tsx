import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCloneXlBoldIcon = (
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
        d='M3 27.75h10.5c.469-.031.719-.281.75-.75v-3h2.25v3c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V16.5c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h3v2.25H3c-.469.031-.719.281-.75.75V27c.031.469.281.719.75.75m7.5-7.5H21c.469-.031.719-.281.75-.75V9c-.031-.469-.281-.719-.75-.75H10.5c-.469.031-.719.281-.75.75v10.5c.031.469.281.719.75.75m-3-.75V9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89H21c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v10.5c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H10.5c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneXlBoldIcon);
export default ForwardRef;

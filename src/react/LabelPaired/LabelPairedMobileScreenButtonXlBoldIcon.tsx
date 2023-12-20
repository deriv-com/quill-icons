import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileScreenButtonXlBoldIcon = (
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
        d='M3 27c.031.469.281.719.75.75h10.5c.469-.031.719-.281.75-.75v-3.75H3zm0-6h12V9c-.031-.469-.281-.719-.75-.75H3.75c-.469.031-.719.281-.75.75zM.75 9c.031-.844.328-1.547.89-2.11.563-.562 1.266-.859 2.11-.89h10.5c.844.031 1.547.328 2.11.89.562.563.859 1.266.89 2.11v18c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3.75c-.844-.031-1.547-.328-2.11-.89-.562-.563-.859-1.266-.89-2.11zM7.5 24.75h3c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-3c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTwoBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 10 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.625 6.5c-.875.02-1.615.323-2.219.906L1.281 8.531c-.354.292-.708.292-1.062 0-.292-.354-.292-.708 0-1.062l1.125-1.094C2.24 5.479 3.334 5.021 4.625 5h.219c1.25.042 2.291.469 3.125 1.281.812.834 1.24 1.875 1.281 3.125-.02 1.271-.49 2.344-1.406 3.219L2.656 17.5H9.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H.75c-.333-.02-.562-.177-.687-.469-.105-.312-.042-.583.187-.812l6.594-6.188a3.006 3.006 0 0 0 .906-2.125c-.02-.812-.302-1.5-.844-2.062-.562-.542-1.25-.823-2.062-.844z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTwoBoldIcon);
export default ForwardRef;

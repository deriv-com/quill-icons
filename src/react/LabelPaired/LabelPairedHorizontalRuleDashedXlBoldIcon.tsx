import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHorizontalRuleDashedXlBoldIcon = (
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
        d='M0 18c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3C.469 19.125 0 18.656 0 18m8.25 0c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3c-.656 0-1.125-.469-1.125-1.125m8.25 0c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3c-.656 0-1.125-.469-1.125-1.125m8.25 0c0-.61.469-1.125 1.125-1.125h3c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3c-.656 0-1.125-.469-1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedXlBoldIcon);
export default ForwardRef;

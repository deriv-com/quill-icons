import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedComputerMouseScrollwheelXlRegularIcon = (
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
        d='M16.5 22.5v-9c-.031-1.687-.61-3.11-1.734-4.266C13.609 8.11 12.188 7.531 10.5 7.5h-3c-1.687.031-3.11.61-4.266 1.734C2.11 10.391 1.531 11.813 1.5 13.5v9c.031 1.688.61 3.11 1.734 4.266C4.391 27.89 5.813 28.469 7.5 28.5h3c1.688-.031 3.11-.61 4.266-1.734 1.125-1.157 1.703-2.578 1.734-4.266M0 13.5c.063-2.125.797-3.89 2.203-5.297C3.61 6.797 5.375 6.063 7.5 6h3c2.125.063 3.89.797 5.297 2.203C17.203 9.61 17.937 11.375 18 13.5v9c-.062 2.125-.797 3.89-2.203 5.297-1.406 1.406-3.172 2.14-5.297 2.203h-3c-2.125-.062-3.89-.797-5.297-2.203C.797 26.39.063 24.625 0 22.5zm9.75-2.25v3c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75v-3c.031-.469.281-.719.75-.75.469.031.719.281.75.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedComputerMouseScrollwheelXlRegularIcon);
export default ForwardRef;

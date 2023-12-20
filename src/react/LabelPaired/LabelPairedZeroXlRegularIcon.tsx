import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedZeroXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 15c.063-2.125.797-3.89 2.203-5.297C3.61 8.297 5.375 7.563 7.5 7.5c2.125.063 3.89.797 5.297 2.203C14.203 11.11 14.937 12.875 15 15v6c-.062 2.125-.797 3.89-2.203 5.297-1.406 1.406-3.172 2.14-5.297 2.203-2.125-.062-3.89-.797-5.297-2.203C.797 24.89.063 23.125 0 21zm7.5-6c-1.687.031-3.11.61-4.266 1.734C2.11 11.891 1.531 13.313 1.5 15v6c.031 1.688.61 3.11 1.734 4.266C4.391 26.39 5.813 26.969 7.5 27c1.688-.031 3.11-.61 4.266-1.734C12.89 24.109 13.469 22.688 13.5 21v-6c-.031-1.687-.61-3.11-1.734-4.266C10.609 9.61 9.188 9.031 7.5 9'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroXlRegularIcon);
export default ForwardRef;

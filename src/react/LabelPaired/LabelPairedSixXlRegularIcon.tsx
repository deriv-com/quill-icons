import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSixXlRegularIcon = (
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
        d='M13.5 21c-.031-1.687-.61-3.11-1.734-4.266C10.609 15.61 9.188 15.031 7.5 15c-1.687.031-3.078.61-4.172 1.734-1.125 1.094-1.734 2.47-1.828 4.125V21c.031 1.688.61 3.11 1.734 4.266C4.391 26.39 5.813 26.969 7.5 27c1.688-.031 3.11-.61 4.266-1.734C12.89 24.109 13.469 22.688 13.5 21m-7.547-7.312A6.354 6.354 0 0 1 7.5 13.5c2.125.063 3.89.797 5.297 2.203C14.203 17.11 14.937 18.875 15 21c-.062 2.125-.797 3.89-2.203 5.297-1.406 1.406-3.172 2.14-5.297 2.203-2.125-.062-3.89-.797-5.297-2.203C.797 24.89.063 23.125 0 21v-.281a7.735 7.735 0 0 1 1.922-4.782l7.266-8.203c.343-.312.703-.328 1.078-.046.312.343.328.703.046 1.078z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixXlRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedZeroXlBoldIcon = (
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
        d='M0 15c.063-2.125.797-3.89 2.203-5.297C3.61 8.297 5.375 7.563 7.5 7.5c2.125.063 3.89.797 5.297 2.203C14.203 11.11 14.937 12.875 15 15v6c-.062 2.125-.797 3.89-2.203 5.297-1.406 1.406-3.172 2.14-5.297 2.203-2.125-.062-3.89-.797-5.297-2.203C.797 24.89.063 23.125 0 21zm7.5-5.25c-1.5.031-2.734.547-3.703 1.547-1 .969-1.516 2.203-1.547 3.703v6c.031 1.5.547 2.734 1.547 3.703.969 1 2.203 1.516 3.703 1.547 1.5-.031 2.734-.547 3.703-1.547 1-.969 1.516-2.203 1.547-3.703v-6c-.031-1.5-.547-2.734-1.547-3.703C10.234 10.297 9 9.78 7.5 9.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroXlBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkSimpleBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 12c.042-1.417.531-2.594 1.469-3.531C2.406 7.53 3.583 7.042 5 7h2.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H5c-1 .02-1.823.365-2.469 1.031C1.865 10.177 1.521 11 1.5 12c.02 1 .365 1.823 1.031 2.469C3.177 15.135 4 15.479 5 15.5h2.25c.458.042.708.292.75.75-.042.458-.292.708-.75.75H5c-1.417-.042-2.594-.531-3.531-1.469C.53 14.594.042 13.417 0 12m18 0c-.042 1.417-.531 2.594-1.469 3.531-.937.938-2.114 1.427-3.531 1.469h-2.25c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75H13c1-.02 1.823-.365 2.469-1.031.666-.646 1.01-1.469 1.031-2.469-.02-1-.365-1.823-1.031-2.469C14.823 8.865 14 8.521 13 8.5h-2.25c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75H13c1.417.042 2.594.531 3.531 1.469.938.937 1.427 2.114 1.469 3.531m-12.25-.75h6.5c.458.042.708.292.75.75-.042.458-.292.708-.75.75h-6.5c-.458-.042-.708-.292-.75-.75.042-.458.292-.708.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleBoldIcon);
export default ForwardRef;

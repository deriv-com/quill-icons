import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLinkSimpleXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 18c.063-2.125.797-3.89 2.203-5.297C3.61 11.297 5.375 10.563 7.5 10.5h3.75c.469.031.719.281.75.75-.031.469-.281.719-.75.75H7.5c-1.687.031-3.11.61-4.266 1.734C2.11 14.891 1.531 16.313 1.5 18c.031 1.688.61 3.11 1.734 4.266C4.391 23.39 5.813 23.969 7.5 24h3.75c.469.031.719.281.75.75-.031.469-.281.719-.75.75H7.5c-2.125-.062-3.89-.797-5.297-2.203C.797 21.89.063 20.125 0 18m27 0c-.062 2.125-.797 3.89-2.203 5.297-1.406 1.406-3.172 2.14-5.297 2.203h-3.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h3.75c1.688-.031 3.11-.61 4.266-1.734C24.89 21.109 25.469 19.688 25.5 18c-.031-1.687-.61-3.11-1.734-4.266C22.609 12.61 21.188 12.031 19.5 12h-3.75c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75h3.75c2.125.063 3.89.797 5.297 2.203C26.203 14.11 26.937 15.875 27 18m-19.875-.75h12.75c.469.031.719.281.75.75-.031.469-.281.719-.75.75H7.125c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkSimpleXlRegularIcon);
export default ForwardRef;

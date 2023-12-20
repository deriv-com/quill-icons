import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBookmarkBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5.5c.02-.417.167-.77.438-1.062A1.63 1.63 0 0 1 1.5 4v13.781l4.063-2.875a.751.751 0 0 1 .875 0l4.062 2.875V5.5h-9V4h9c.417.02.77.167 1.063.438.27.291.416.645.437 1.062v13.75c0 .292-.135.51-.406.656a.802.802 0 0 1-.781-.031L6 16.438l-4.812 3.437a.802.802 0 0 1-.782.031A.782.782 0 0 1 0 19.25z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkBoldIcon);
export default ForwardRef;

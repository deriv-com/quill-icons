import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedVideoCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 6.125c-.234.016-.36.14-.375.375v6c.016.234.14.36.375.375h6c.234-.016.36-.14.375-.375v-6c-.016-.234-.14-.36-.375-.375zM.25 6.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h6c.422.016.773.164 1.055.445.28.282.43.633.445 1.055V12.5a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445h-6a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 12.5zm12.375 5.508V6.992L10 8.164V6.922l2.438-1.078a.879.879 0 0 1 .398-.094c.25 0 .46.094.633.281.187.172.281.39.281.657v5.648c0 .25-.094.46-.281.633a.826.826 0 0 1-.633.281c-.14 0-.274-.023-.399-.07L10 12.078v-1.242z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoCaptionBoldIcon);
export default ForwardRef;

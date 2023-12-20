import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSevenCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 8 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.25 4.625c.016-.234.14-.36.375-.375h6.75c.14 0 .25.063.328.188a.398.398 0 0 1 0 .375l-6 9.75c-.14.187-.312.234-.516.14-.187-.14-.226-.312-.117-.515L6.695 5H.625c-.234-.016-.36-.14-.375-.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenCaptionRegularIcon);
export default ForwardRef;

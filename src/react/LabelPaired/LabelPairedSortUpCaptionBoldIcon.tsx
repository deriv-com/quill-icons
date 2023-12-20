import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSortUpCaptionBoldIcon = (
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
        d='M4 5.54 1.914 7.624h4.172zm-.54-1.08A.782.782 0 0 1 4 4.25c.203 0 .383.07.54.21l3 3c.218.25.272.524.163.821A.768.768 0 0 1 7 8.75H1a.768.768 0 0 1-.703-.469c-.11-.297-.055-.57.164-.82z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpCaptionBoldIcon);
export default ForwardRef;

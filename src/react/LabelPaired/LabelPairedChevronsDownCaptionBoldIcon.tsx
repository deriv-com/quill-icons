import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedChevronsDownCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m5.602 14.398-4.5-4.5c-.22-.265-.22-.53 0-.796.265-.22.53-.22.796 0L6 13.203l4.102-4.101c.265-.22.53-.22.796 0 .22.265.22.53 0 .796l-4.5 4.5c-.265.22-.53.22-.796 0m-4.5-9c-.22-.265-.22-.53 0-.796.265-.22.53-.22.796 0L6 8.703l4.102-4.101c.265-.22.53-.22.796 0 .22.265.22.53 0 .796l-4.5 4.5c-.265.22-.53.22-.796 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownCaptionBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedXmarkCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.086 6.71 5.296 9.5l2.79 2.79c.219.265.219.53 0 .796-.266.219-.531.219-.797 0L4.5 10.296l-2.79 2.79c-.265.219-.53.219-.796 0-.219-.266-.219-.531 0-.797L3.704 9.5.913 6.71c-.219-.265-.219-.53 0-.796.266-.219.531-.219.797 0L4.5 8.704l2.79-2.79c.265-.219.53-.219.796 0 .219.266.219.531 0 .797'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkCaptionBoldIcon);
export default ForwardRef;

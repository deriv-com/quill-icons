import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedOneXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.125 8.625V26.25h3.75c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-9.75C.438 28.438.063 28.063 0 27.375c.063-.687.438-1.062 1.125-1.125h3.75V10.64l-3.187 1.922c-.594.313-1.11.204-1.547-.328-.282-.625-.157-1.14.375-1.546l4.875-3c.375-.22.765-.235 1.172-.047.375.218.562.547.562.984'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlBoldIcon);
export default ForwardRef;

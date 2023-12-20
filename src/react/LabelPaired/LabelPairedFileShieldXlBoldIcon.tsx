import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileShieldXlBoldIcon = (
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
        d='M3 27.75h11.578c.5.688 1.11 1.313 1.828 1.875C16 29.875 15.531 30 15 30H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V9c.031-.844.328-1.547.89-2.11C1.454 6.329 2.157 6.032 3 6h7.781c.813 0 1.516.297 2.11.89l4.218 4.22c.594.593.891 1.312.891 2.156v2.437l-2.25.89V13.5H12c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078V8.25H3c-.469.031-.719.281-.75.75v18c.031.469.281.719.75.75m16.828-11.156a.996.996 0 0 1 .844 0l5.625 2.25c.437.187.672.531.703 1.031.031 1.031-.14 2.188-.516 3.469-.343 1.281-.968 2.515-1.875 3.703-.937 1.187-2.25 2.14-3.937 2.86a.996.996 0 0 1-.844 0c-1.687-.72-3-1.673-3.937-2.86-.907-1.188-1.532-2.422-1.875-3.703-.375-1.282-.547-2.438-.516-3.469.031-.5.266-.844.703-1.031zm4.875 4.031-4.453-1.781v8.812c1.563-.843 2.688-1.922 3.375-3.234.656-1.281 1.016-2.547 1.078-3.797'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldXlBoldIcon);
export default ForwardRef;

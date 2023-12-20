import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCircleCheckXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3 27.75h12c.469-.031.719-.281.75-.75V13.5H12c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078V8.25H3c-.469.031-.719.281-.75.75v18c.031.469.281.719.75.75M3 6h7.781c.813 0 1.516.297 2.11.89l4.218 4.22c.594.593.891 1.312.891 2.156V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V9c.031-.844.328-1.547.89-2.11C1.454 6.329 2.157 6.032 3 6m10.547 12.563L8.53 23.53a1.085 1.085 0 0 1-.797.328c-.312 0-.578-.109-.796-.328l-2.485-2.484c-.437-.531-.437-1.063 0-1.594.531-.437 1.063-.437 1.594 0l1.687 1.688 4.22-4.172c.53-.438 1.062-.438 1.593 0 .437.531.437 1.062 0 1.593'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleCheckXlBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileChartColumnXlBoldIcon = (
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
        d='M2.25 27c.031.469.281.719.75.75h12c.469-.031.719-.281.75-.75V13.5H12c-.437 0-.797-.14-1.078-.422-.281-.281-.422-.64-.422-1.078V8.25H3c-.469.031-.719.281-.75.75zM3 6h7.781c.813 0 1.516.297 2.11.89l4.218 4.22c.594.593.891 1.312.891 2.156V27c-.031.844-.328 1.547-.89 2.11-.563.562-1.266.859-2.11.89H3c-.844-.031-1.547-.328-2.11-.89C.329 28.546.032 27.843 0 27V9c.031-.844.328-1.547.89-2.11C1.454 6.329 2.157 6.032 3 6m7.125 13.125v6c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-6C7.938 18.438 8.313 18.063 9 18c.688.063 1.063.438 1.125 1.125m4.125 1.5v4.5c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-4.5c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125M6 22.125v3c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-3c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnXlBoldIcon);
export default ForwardRef;

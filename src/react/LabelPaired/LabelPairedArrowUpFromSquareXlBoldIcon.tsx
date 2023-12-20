import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpFromSquareXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m12.797 6.328 5.25 5.25c.437.531.437 1.063 0 1.594-.531.437-1.063.437-1.594 0l-3.328-3.328v11.531c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V9.844l-3.328 3.328c-.531.437-1.063.437-1.594 0-.437-.531-.437-1.063 0-1.594l5.25-5.25c.531-.437 1.063-.437 1.594 0M3.375 7.5h.375c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-.375c-.687.063-1.062.438-1.125 1.125v15.75c.063.688.438 1.063 1.125 1.125h17.25c.688-.062 1.063-.437 1.125-1.125v-15.75c-.062-.687-.437-1.062-1.125-1.125h-.375c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125h.375c.969.031 1.766.36 2.39.984.626.625.954 1.422.985 2.391v15.75c-.031.969-.36 1.766-.984 2.39-.625.626-1.422.954-2.391.985H3.375c-.969-.031-1.766-.36-2.39-.984C.358 28.39.03 27.594 0 26.625v-15.75c.031-.969.36-1.766.984-2.39.625-.626 1.422-.954 2.391-.985'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareXlBoldIcon);
export default ForwardRef;

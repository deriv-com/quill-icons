import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPersonChalkboardXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 30 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 10.5c-.844-.031-1.5-.406-1.969-1.125-.375-.75-.375-1.5 0-2.25C7.5 6.406 8.156 6.031 9 6c.844.031 1.5.406 1.969 1.125.375.75.375 1.5 0 2.25C10.5 10.094 9.844 10.469 9 10.5m-.656 3.75H8.25v6h1.5v-6zM8.25 28.875c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V16.5l-2.016 3.563c-.406.562-.921.703-1.546.421-.563-.406-.704-.922-.422-1.547L4.78 14.11a4.194 4.194 0 0 1 1.5-1.546A3.934 3.934 0 0 1 8.344 12H15V8.25c.031-.625.25-1.156.656-1.594A2.447 2.447 0 0 1 17.25 6h10.5c.625.031 1.156.25 1.594.656.406.438.625.969.656 1.594v10.5a2.446 2.446 0 0 1-.656 1.594A2.446 2.446 0 0 1 27.75 21h-10.5a2.446 2.446 0 0 1-1.594-.656A2.446 2.446 0 0 1 15 18.75V16.5h2.25v2.25h10.5V8.25h-10.5V12h1.125c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H12v14.625c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V22.5h-1.5z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardXlBoldIcon);
export default ForwardRef;

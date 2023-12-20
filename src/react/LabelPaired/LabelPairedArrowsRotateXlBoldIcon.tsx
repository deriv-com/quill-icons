import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowsRotateXlBoldIcon = (
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
        d='M23.25 15.375c-.062.688-.437 1.063-1.125 1.125h-6.75c-.687-.062-1.062-.437-1.125-1.125.063-.687.438-1.062 1.125-1.125H19.406l-2.437-2.437C15.594 10.469 13.937 9.78 12 9.75c-1.719.031-3.25.5-4.594 1.406a8.255 8.255 0 0 0-3 3.61c-.312.625-.797.828-1.453.609-.625-.344-.828-.844-.61-1.5a10.286 10.286 0 0 1 3.798-4.594C7.859 8.125 9.813 7.531 12 7.5c2.531.031 4.719.938 6.563 2.719L21 12.656V8.625c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125zM1.875 19.5h5.25c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H4.594l2.437 2.438c1.375 1.343 3.032 2.03 4.969 2.062 1.719-.031 3.25-.5 4.594-1.406a8.256 8.256 0 0 0 3-3.61c.312-.593.797-.78 1.453-.562.625.312.828.797.61 1.453-.844 1.906-2.11 3.438-3.798 4.594-1.718 1.156-3.672 1.75-5.859 1.781-2.531-.031-4.719-.937-6.562-2.719L3 23.344v2.531c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-5.25c.063-.687.438-1.062 1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateXlBoldIcon);
export default ForwardRef;

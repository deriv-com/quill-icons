import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCompressXlBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 21 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.5 8.625v5.25c-.062.688-.437 1.063-1.125 1.125h-5.25C.438 14.938.063 14.563 0 13.875c.063-.687.438-1.062 1.125-1.125H5.25V8.625c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125M1.125 21h5.25c.688.063 1.063.438 1.125 1.125v5.25c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V23.25H1.125C.438 23.188.063 22.813 0 22.125c.063-.687.438-1.062 1.125-1.125M15.75 8.625v4.125h4.125c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125h-5.25c-.687-.062-1.062-.437-1.125-1.125v-5.25c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125M14.625 21h5.25c.688.063 1.063.438 1.125 1.125-.062.688-.437 1.063-1.125 1.125H15.75v4.125c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125v-5.25c.063-.687.438-1.062 1.125-1.125'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressXlBoldIcon);
export default ForwardRef;

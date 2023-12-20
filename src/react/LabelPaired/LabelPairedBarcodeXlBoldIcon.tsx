import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBarcodeXlBoldIcon = (
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
        d='M1.125 7.5c.688.063 1.063.438 1.125 1.125v18.75c-.062.688-.437 1.063-1.125 1.125C.438 28.438.063 28.063 0 27.375V8.625C.063 7.938.438 7.563 1.125 7.5m4.125 0c.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V8.25c.031-.469.281-.719.75-.75m3.375 0c.688.063 1.063.438 1.125 1.125v18.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V8.625c.063-.687.438-1.062 1.125-1.125m5.25 0c.688.063 1.063.438 1.125 1.125v18.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125V8.625c.063-.687.438-1.062 1.125-1.125m7.875 1.125c.063-.687.438-1.062 1.125-1.125.688.063 1.063.438 1.125 1.125v18.75c-.062.688-.437 1.063-1.125 1.125-.687-.062-1.062-.437-1.125-1.125zm-3-.375c.031-.469.281-.719.75-.75.469.031.719.281.75.75v19.5c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeXlBoldIcon);
export default ForwardRef;

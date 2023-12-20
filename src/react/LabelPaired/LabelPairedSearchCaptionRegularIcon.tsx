import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSearchCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 8.375c0-.75-.187-1.437-.562-2.062a4.063 4.063 0 0 0-1.5-1.5 4.098 4.098 0 0 0-2.063-.563c-.719 0-1.406.188-2.062.563-.641.375-1.141.875-1.5 1.5A3.934 3.934 0 0 0 .75 8.375c0 .75.188 1.438.563 2.063.359.624.859 1.124 1.5 1.5a4.098 4.098 0 0 0 2.062.562c.719 0 1.406-.187 2.063-.562a4.063 4.063 0 0 0 1.5-1.5A3.934 3.934 0 0 0 9 8.375m-.96 3.703c-.876.75-1.93 1.14-3.165 1.172-1.375-.031-2.523-.508-3.445-1.43C.508 10.898.03 9.75 0 8.375.031 7 .508 5.852 1.43 4.93 2.352 4.008 3.5 3.53 4.875 3.5c1.375.031 2.523.508 3.445 1.43.922.922 1.399 2.07 1.43 3.445-.031 1.234-.422 2.29-1.172 3.164l3.305 3.328c.156.172.156.344 0 .516-.172.156-.344.156-.516 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchCaptionRegularIcon);
export default ForwardRef;

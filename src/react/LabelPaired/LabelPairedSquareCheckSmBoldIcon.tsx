import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedSquareCheckSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.125 5.938c-.273.018-.42.164-.437.437v8.75c.018.273.164.42.437.438h8.75c.273-.019.42-.165.438-.438v-8.75c-.019-.273-.165-.42-.438-.437zm-1.75.437c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23zm9.215 3.09-3.5 3.5c-.31.255-.62.255-.93 0l-1.75-1.75c-.255-.31-.255-.62 0-.93.31-.255.62-.255.93 0l1.285 1.285L8.66 8.535c.31-.255.62-.255.93 0 .255.31.255.62 0 .93'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckSmBoldIcon);
export default ForwardRef;

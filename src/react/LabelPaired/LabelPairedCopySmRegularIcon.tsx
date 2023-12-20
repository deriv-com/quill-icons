import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCopySmRegularIcon = (
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
        d='M10.875 13.375a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V6.922a.364.364 0 0 0-.137-.3l-1.86-1.86a.364.364 0 0 0-.3-.137H6.5a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v7c0 .255.082.465.246.629a.852.852 0 0 0 .629.246zm1.367-7.383c.255.255.383.565.383.93V12.5c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H6.5c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-7c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h2.953c.365 0 .675.128.93.383zM2.125 7.25h1.75v.875h-1.75a.852.852 0 0 0-.629.246A.852.852 0 0 0 1.25 9v7c0 .255.082.465.246.629a.852.852 0 0 0 .629.246H6.5a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629v-.875h.875V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H2.125c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V9c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopySmRegularIcon);
export default ForwardRef;

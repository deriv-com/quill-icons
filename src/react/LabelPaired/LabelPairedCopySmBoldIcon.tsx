import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCopySmBoldIcon = (
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
        d='M10.875 12.938c.273-.019.42-.165.438-.438V6.922l-1.86-1.86H5.625c-.273.019-.42.165-.437.438v7c.018.273.164.42.437.438zm-5.25 1.312c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-7c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h3.828c.365 0 .675.128.93.383l1.86 1.86c.254.254.382.564.382.929V12.5c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52zm-3.5-7H3v1.313h-.875c-.273.018-.42.164-.437.437v7c.018.273.164.42.437.438h5.25c.273-.019.42-.165.438-.438v-.875h1.312V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-5.25c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V9c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopySmBoldIcon);
export default ForwardRef;

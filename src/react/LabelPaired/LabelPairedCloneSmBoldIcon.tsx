import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCloneSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 16.438h6.125c.273-.019.42-.165.438-.438v-1.75h1.312V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52C.19 16.903.018 16.493 0 16V9.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52H3.5v1.313H1.75c-.273.018-.42.164-.437.437V16c.018.273.164.42.437.438m4.375-4.375h6.125c.273-.019.42-.165.438-.438V5.5c-.019-.273-.165-.42-.438-.437H6.125c-.273.018-.42.164-.437.437v6.125c.018.273.164.42.437.438m-1.75-.438V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h6.125c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v6.125c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H6.125c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneSmBoldIcon);
export default ForwardRef;

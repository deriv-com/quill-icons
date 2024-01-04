import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCloneSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.75 16.438h6.125c.273-.019.42-.165.438-.438v-1.75h1.312V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H1.75c-.492-.018-.902-.191-1.23-.52C.19 16.902.018 16.492 0 16V9.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52H3.5v1.313H1.75c-.273.018-.42.164-.438.437V16c.019.273.165.42.438.438Zm4.375-4.375h6.125c.273-.019.42-.165.438-.438V5.5c-.019-.273-.165-.42-.438-.438H6.125c-.273.019-.42.165-.438.438v6.125c.019.273.165.42.438.438Zm-1.75-.438V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h6.125c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v6.125c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H6.125c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23Z'
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

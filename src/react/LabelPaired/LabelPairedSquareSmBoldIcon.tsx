import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSquareSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M10.875 5.938h-8.75c-.273.018-.42.164-.438.437v8.75c.019.273.165.42.438.438h8.75c.273-.019.42-.165.438-.438v-8.75c-.019-.273-.165-.42-.438-.438Zm-8.75-1.313h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v8.75c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23v-8.75c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareSmBoldIcon);
export default ForwardRef;

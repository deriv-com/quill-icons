import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTabletScreenSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M10.875 4.625h-8.75a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v7h10.5v-7a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246Zm.875 8.75H1.25V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h8.75a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629v-2.625ZM2.125 3.75h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52Zm3.063 11.375c.018-.273.164-.42.437-.438h1.75c.273.019.42.165.438.438-.019.273-.165.42-.438.438h-1.75c-.273-.019-.42-.165-.438-.438Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTabletScreenSmRegularIcon);
export default ForwardRef;

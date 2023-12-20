import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileScreenButtonSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8.125 4.625h-5.25a.852.852 0 0 0-.629.246A.852.852 0 0 0 2 5.5v7h7v-7a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246M9 13.375H2V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h5.25a.852.852 0 0 0 .629-.246A.852.852 0 0 0 9 16zM2.875 3.75h5.25c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-5.25c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52m1.313 11.375c.018-.273.164-.42.437-.437h1.75c.273.018.42.164.438.437-.019.273-.165.42-.438.438h-1.75c-.273-.019-.42-.165-.437-.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonSmRegularIcon);
export default ForwardRef;

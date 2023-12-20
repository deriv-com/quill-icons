import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedVideoSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.875 6.375a.852.852 0 0 0-.629.246A.852.852 0 0 0 1 7.25v7c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h7a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629v-7a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246zm-1.75.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h7c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v7c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-7c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23zm14.191 7.738L11.5 13.43v-.985l3.254 1.778c.018.018.046.027.082.027.091 0 .146-.055.164-.164V7.414a.193.193 0 0 0-.164-.164c-.037 0-.064.01-.082.027L11.5 9.055V8.07l2.816-1.558c.164-.091.338-.137.52-.137.292 0 .538.1.738.3.2.201.301.447.301.74v6.67c0 .293-.1.539-.3.74-.201.2-.447.3-.74.3-.181 0-.355-.046-.519-.137'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoSmRegularIcon);
export default ForwardRef;

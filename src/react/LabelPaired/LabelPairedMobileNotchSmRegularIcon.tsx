import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMobileNotchSmRegularIcon = (
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
        d='M7.25 4.625v.438a.852.852 0 0 1-.246.628.852.852 0 0 1-.629.247h-1.75a.852.852 0 0 1-.629-.247.852.852 0 0 1-.246-.628v-.438h-.875a.852.852 0 0 0-.629.246A.852.852 0 0 0 2 5.5V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h5.25a.852.852 0 0 0 .629-.246A.852.852 0 0 0 9 16V5.5a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246zm-.875 0h-1.75v.438h1.75zm-5.25.875c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h5.25c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-5.25c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchSmRegularIcon);
export default ForwardRef;

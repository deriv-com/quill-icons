import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedCalendarSmRegularIcon = (
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
        d='M3.438 3.75c.273.018.419.164.437.438V5.5h5.25V4.188c.018-.274.164-.42.438-.438.273.018.419.164.437.438V5.5h.875c.492.018.902.191 1.23.52.329.328.502.738.52 1.23V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52h-8.75c-.492-.018-.902-.191-1.23-.52-.329-.328-.502-.738-.52-1.23V7.25c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52H3V4.188c.018-.274.164-.42.438-.438M11.75 9H1.25v7c0 .255.082.465.246.629a.852.852 0 0 0 .629.246h8.75a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629zm-.875-2.625h-8.75a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629v.875h10.5V7.25a.852.852 0 0 0-.246-.629.852.852 0 0 0-.629-.246'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCalendarSmRegularIcon);
export default ForwardRef;

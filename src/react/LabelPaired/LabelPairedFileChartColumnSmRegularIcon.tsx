import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileChartColumnSmRegularIcon = (
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
        d='M9 16.875a.852.852 0 0 0 .629-.246.852.852 0 0 0 .246-.629V9H6.813a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93V4.626H2a.852.852 0 0 0-.629.246.852.852 0 0 0-.246.629V16c0 .255.082.465.246.629a.852.852 0 0 0 .629.246zm-2.187-8.75h3.062a.73.73 0 0 0-.137-.191L6.566 4.762a.406.406 0 0 0-.191-.11v3.036c.018.273.164.419.438.437M2 3.75h4.266c.364 0 .674.128.93.383l3.171 3.172c.255.255.383.565.383.93V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H2c-.492-.018-.902-.191-1.23-.52C.44 16.903.268 16.493.25 16V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52m3.938 6.563v5.25c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437v-5.25c.018-.274.164-.42.437-.438.273.018.42.164.438.438m2.625 1.75v3.5c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437v-3.5c.018-.274.164-.42.437-.438.273.018.42.164.438.438m-5.25 1.75v1.75c-.019.273-.165.419-.438.437-.273-.018-.42-.164-.437-.437v-1.75c.018-.274.164-.42.437-.438.273.018.42.164.438.438'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnSmRegularIcon);
export default ForwardRef;

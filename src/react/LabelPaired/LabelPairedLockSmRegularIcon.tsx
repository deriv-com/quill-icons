import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLockSmRegularIcon = (
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
        d='M3.875 7.25V9h5.25V7.25c-.018-.747-.273-1.367-.766-1.86-.492-.492-1.112-.747-1.859-.765-.747.018-1.367.273-1.86.766-.492.492-.747 1.112-.765 1.859M3 9V7.25c.018-.984.355-1.814 1.012-2.488.674-.657 1.504-.994 2.488-1.012.984.018 1.814.355 2.488 1.012.657.674.994 1.504 1.012 2.488V9h.438c.62.018 1.139.228 1.558.629.401.42.61.939.629 1.559v4.374c-.018.62-.228 1.14-.629 1.56-.42.4-.939.61-1.559.628H2.564c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558v-4.376c.018-.62.228-1.139.629-1.558.42-.401.939-.61 1.559-.629zm-1.75 2.188v4.374c.018.365.146.675.383.93.255.237.565.365.93.383h7.874c.365-.018.675-.146.93-.383.237-.255.365-.565.383-.93v-4.374a1.427 1.427 0 0 0-.383-.93 1.427 1.427 0 0 0-.93-.383H2.564a1.427 1.427 0 0 0-.93.383 1.427 1.427 0 0 0-.383.93'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockSmRegularIcon);
export default ForwardRef;

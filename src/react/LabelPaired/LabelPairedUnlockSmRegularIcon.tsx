import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedUnlockSmRegularIcon = (
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
        d='M3.875 7.25V9h6.563c.62.018 1.139.228 1.558.629.401.42.61.939.629 1.559v4.374c-.018.62-.228 1.14-.629 1.56-.42.4-.939.61-1.559.628H2.564c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558v-4.376c.018-.62.228-1.139.629-1.558.42-.401.939-.61 1.559-.629H3V7.25c.018-.984.355-1.814 1.012-2.488.674-.657 1.504-.994 2.488-1.012.802.018 1.504.255 2.105.71a3.55 3.55 0 0 1 1.258 1.806c.055.255-.045.428-.3.52-.274.054-.456-.037-.547-.274a2.57 2.57 0 0 0-.93-1.367 2.794 2.794 0 0 0-1.586-.52c-.747.018-1.367.273-1.86.766-.492.492-.747 1.112-.765 1.859M1.25 11.188v4.374c.018.365.146.675.383.93.255.237.565.365.93.383h7.874c.365-.018.675-.146.93-.383.237-.255.365-.565.383-.93v-4.374a1.427 1.427 0 0 0-.383-.93 1.427 1.427 0 0 0-.93-.383H2.564a1.427 1.427 0 0 0-.93.383 1.427 1.427 0 0 0-.383.93'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUnlockSmRegularIcon);
export default ForwardRef;

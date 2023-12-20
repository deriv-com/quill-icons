import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedWalletSmRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.188 4.625h10.5c.273.018.419.164.437.438-.018.273-.164.419-.437.437h-10.5a1.427 1.427 0 0 0-.93.383 1.427 1.427 0 0 0-.383.93v7.875c.018.364.146.674.383.93.255.236.565.364.93.382h9.625c.364-.018.674-.146.93-.383.236-.255.364-.565.382-.93V8.564a1.427 1.427 0 0 0-.383-.93 1.427 1.427 0 0 0-.93-.383h-8.75c-.273-.018-.419-.164-.437-.437.018-.274.164-.42.438-.438h8.75c.62.018 1.139.228 1.558.629.401.42.61.939.629 1.559v6.124c-.018.62-.228 1.14-.629 1.56-.42.4-.939.61-1.559.628H2.188c-.62-.018-1.14-.228-1.56-.629-.4-.42-.61-.939-.628-1.558V6.812c.018-.62.228-1.139.629-1.558.42-.401.939-.61 1.559-.629m8.312 7.656c-.401-.036-.62-.255-.656-.656.036-.401.255-.62.656-.656.401.036.62.255.656.656-.036.401-.255.62-.656.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSmRegularIcon);
export default ForwardRef;

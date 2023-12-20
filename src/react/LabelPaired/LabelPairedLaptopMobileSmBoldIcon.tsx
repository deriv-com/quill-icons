import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedLaptopMobileSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M3.75 5.063c-.273.018-.42.164-.437.437v7h6.562v1.75H1.563a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.383-.93c.018-.273.164-.419.438-.437H2v-7c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h8.75c.492.018.902.191 1.23.52.329.328.502.738.52 1.23v.875h-1.312V5.5c-.019-.273-.165-.42-.438-.437zm7 3.5c.018-.365.146-.675.383-.93.255-.237.565-.365.93-.383h4.374c.365.018.675.146.93.383.237.255.365.565.383.93v7.874a1.427 1.427 0 0 1-.383.93 1.427 1.427 0 0 1-.93.383h-4.375a1.427 1.427 0 0 1-.93-.383 1.427 1.427 0 0 1-.382-.93zm1.313 0v7.874h4.374V8.563z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMobileSmBoldIcon);
export default ForwardRef;

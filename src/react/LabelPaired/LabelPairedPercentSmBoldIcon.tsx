import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPercentSmBoldIcon = (
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
        d='m10.34 6.84-8.75 8.75c-.31.255-.62.255-.93 0-.255-.31-.255-.62 0-.93l8.75-8.75c.31-.255.62-.255.93 0 .255.31.255.62 0 .93m-7.027.41c-.019.492-.237.875-.657 1.148a1.395 1.395 0 0 1-1.312 0C.924 8.125.706 7.742.687 7.25c.019-.492.237-.875.657-1.148a1.395 1.395 0 0 1 1.312 0c.42.273.638.656.656 1.148m7 7c-.019.492-.238.875-.657 1.148a1.394 1.394 0 0 1-1.312 0c-.42-.273-.638-.656-.656-1.148.018-.492.236-.875.656-1.148a1.394 1.394 0 0 1 1.312 0c.42.273.638.656.656 1.148'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentSmBoldIcon);
export default ForwardRef;

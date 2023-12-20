import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardSmFillIcon = (
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
        d='M1.45 15.809c-.292.218-.611.255-.958.109-.31-.164-.474-.428-.492-.793v-8.75c.018-.365.182-.629.492-.793.347-.146.666-.11.957.11l4.676 3.91v2.296zM7 13.375v-7c.018-.365.182-.629.492-.793.347-.146.666-.11.957.11l5.25 4.374c.2.183.301.41.301.684 0 .273-.1.501-.3.684l-5.25 4.375c-.292.218-.611.255-.958.109-.31-.164-.474-.428-.492-.793z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardSmFillIcon);
export default ForwardRef;

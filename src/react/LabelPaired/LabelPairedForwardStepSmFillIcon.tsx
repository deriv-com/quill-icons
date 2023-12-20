import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepSmFillIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.574 15.809c-.291.218-.61.255-.957.109-.31-.164-.474-.428-.492-.793v-8.75c.018-.365.182-.629.492-.793.347-.146.666-.11.957.11l5.25 4.374.301.274V6.375c0-.255.082-.465.246-.629A.852.852 0 0 1 8 5.5c.255 0 .465.082.629.246a.852.852 0 0 1 .246.629v8.75a.852.852 0 0 1-.246.629A.852.852 0 0 1 8 16a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629V11.16l-.3.274z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmFillIcon);
export default ForwardRef;

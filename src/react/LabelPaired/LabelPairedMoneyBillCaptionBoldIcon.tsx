import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMoneyBillCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.875 6.125A1.515 1.515 0 0 1 2.43 7.18c-.282.28-.633.43-1.055.445v3.75c.422.016.773.164 1.055.445.28.282.43.633.445 1.055h8.25c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445v-3.75a1.515 1.515 0 0 1-1.055-.445 1.515 1.515 0 0 1-.445-1.055zM.25 6.5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h10.5c.422.016.773.164 1.055.445.28.282.43.633.445 1.055v6a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H1.75a1.515 1.515 0 0 1-1.055-.445A1.515 1.515 0 0 1 .25 12.5zM7 7.25c.406 0 .781.102 1.125.305s.617.476.82.82c.203.36.305.734.305 1.125a2.255 2.255 0 0 1-1.125 1.945A2.172 2.172 0 0 1 7 11.75c-.406 0-.781-.102-1.125-.305A2.255 2.255 0 0 1 4.75 9.5a2.255 2.255 0 0 1 1.125-1.945A2.172 2.172 0 0 1 7 7.25'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoneyBillCaptionBoldIcon);
export default ForwardRef;

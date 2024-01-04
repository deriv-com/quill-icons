import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedHorizontalRuleCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 9.5c.031-.344.219-.531.563-.563h13.874c.344.032.532.22.563.563-.031.344-.219.531-.563.563H.563C.219 10.03.03 9.842 0 9.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleCaptionBoldIcon);
export default ForwardRef;

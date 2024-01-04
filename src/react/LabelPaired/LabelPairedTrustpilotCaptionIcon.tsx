import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrustpilotCaptionIcon = (
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
        d='m10.242 11.96-2.742.727 3.89 2.813-1.148-3.54Zm3.563-3.866L7.5 12.688 3.586 15.5l1.5-4.57-3.914-2.836H6L7.5 3.5l1.477 4.594h4.828Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrustpilotCaptionIcon);
export default ForwardRef;

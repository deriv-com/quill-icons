import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFiveMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.531 5.375c.063-.23.219-.354.469-.375h6.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H2.406l-1.25 5H6c1.125.02 2.073.406 2.844 1.156.75.771 1.135 1.719 1.156 2.844-.02 1.125-.406 2.073-1.156 2.844C8.073 18.594 7.125 18.979 6 19H2.656a2.734 2.734 0 0 1-1.469-.406 2.623 2.623 0 0 1-1-1.125l-.124-.25c-.126-.271-.053-.49.218-.657.292-.125.51-.052.656.22l.157.25c.333.624.854.947 1.562.968H6c.854-.02 1.563-.313 2.125-.875.563-.563.854-1.27.875-2.125-.02-.854-.313-1.563-.875-2.125-.563-.563-1.27-.854-2.125-.875H.5a.504.504 0 0 1-.406-.188.624.624 0 0 1-.094-.437l1.531-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveMdRegularIcon);
export default ForwardRef;

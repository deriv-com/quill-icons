import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedDealProtectionSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.766 7.086h2.597c.465 0 .875.082 1.258.246.383.137.711.383.984.684.274.3.493.683.63 1.148.136.465.218.984.218 1.586 0 .629-.082 1.148-.219 1.613a2.908 2.908 0 0 1-.629 1.149c-.273.3-.601.52-.984.683a3.128 3.128 0 0 1-1.258.246H2.766V7.086Zm2.597 6.289c.547 0 .985-.164 1.313-.52.328-.328.52-.847.52-1.503v-1.176c0-.656-.192-1.176-.52-1.504-.328-.356-.766-.52-1.313-.52H3.941v5.223h1.422Zm4.567 1.04v-7.33h3.144c.684 0 1.203.22 1.586.603.356.41.547.957.547 1.613 0 .683-.191 1.203-.547 1.613-.383.41-.902.602-1.586.602h-1.969v2.898H9.93Zm1.175-3.938h1.915c.3 0 .52-.082.683-.247.164-.164.246-.382.246-.683v-.492c0-.301-.082-.52-.246-.684-.164-.164-.383-.246-.683-.246h-1.915v2.352Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealProtectionSmRegularIcon);
export default ForwardRef;

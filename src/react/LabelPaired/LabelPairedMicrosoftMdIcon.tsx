import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedMicrosoftMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5h6.719v6.719H0V5Zm7.281 0H14v6.719H7.281V5ZM0 12.281h6.719V19H0v-6.719Zm7.281 0H14V19H7.281v-6.719Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftMdIcon);
export default ForwardRef;

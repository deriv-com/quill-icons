import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartLineUpDownMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1 5.5v11c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h13c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-13c-.708-.02-1.302-.26-1.781-.719C.26 17.802.02 17.208 0 16.5v-11c.02-.313.188-.48.5-.5.313.02.48.188.5.5ZM11.5 7c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h3c.313.02.48.188.5.5v3c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V7.719l-4.656 4.625c-.23.208-.459.208-.688 0L6.5 10.219l-2.656 2.625c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l3-3A.416.416 0 0 1 6.5 9c.146 0 .26.052.344.156L9 11.281 13.281 7H11.5Zm0 9c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h1.781l-2.125-2.156.688-.688L14 14.281V12.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v3c-.02.313-.188.48-.5.5h-3Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartLineUpDownMdRegularIcon);
export default ForwardRef;

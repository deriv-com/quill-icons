import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowUpFromBracketMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='m7.344 4.156 4 4c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L7.5 5.719V14.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V5.719L3.344 8.844c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l4-4c.23-.208.459-.208.688 0ZM1 14.5v3c.02.417.167.77.438 1.063.291.27.645.416 1.062.437h9a1.63 1.63 0 0 0 1.063-.438A1.63 1.63 0 0 0 13 17.5v-3c.02-.313.188-.48.5-.5.313.02.48.188.5.5v3c-.02.708-.26 1.302-.719 1.781-.479.459-1.073.698-1.781.719h-9c-.708-.02-1.302-.26-1.781-.719C.26 18.802.02 18.208 0 17.5v-3c.02-.313.188-.48.5-.5.313.02.48.188.5.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketMdRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCompressMdRegularIcon = (
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
        d='M5 5.5v4c-.02.313-.188.48-.5.5h-4c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5H4V5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5ZM.5 14h4c.313.02.48.188.5.5v4c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V15H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5ZM10 5.5V9h3.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-4c-.313-.02-.48-.188-.5-.5v-4c.02-.313.188-.48.5-.5.313.02.48.188.5.5ZM9.5 14h4c.313.02.48.188.5.5-.02.313-.188.48-.5.5H10v3.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-4c.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressMdRegularIcon);
export default ForwardRef;

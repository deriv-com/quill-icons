import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarcodeMdRegularIcon = (
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
        d='M0 5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13Zm2 0c.02-.313.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13ZM4.5 5c.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13c.02-.313.188-.48.5-.5Zm2.5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13ZM9.5 5c.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13c.02-.313.188-.48.5-.5Zm2.5.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13Zm3.5-.5c.313.02.48.188.5.5v13c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-13c.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeMdRegularIcon);
export default ForwardRef;

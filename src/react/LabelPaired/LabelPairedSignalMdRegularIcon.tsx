import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSignalMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M18.5 4.5v15c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-15c.02-.313.188-.48.5-.5.313.02.48.188.5.5ZM14 7c.313.02.48.188.5.5v12c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-12c.02-.313.188-.48.5-.5Zm-3.5 3.5v9c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-9c.02-.313.188-.48.5-.5.313.02.48.188.5.5ZM6 13c.313.02.48.188.5.5v6c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-6c.02-.313.188-.48.5-.5Zm-4 3c.313.02.48.188.5.5v3c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-3c.02-.313.188-.48.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalMdRegularIcon);
export default ForwardRef;

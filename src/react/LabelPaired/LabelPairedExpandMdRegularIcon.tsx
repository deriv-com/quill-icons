import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedExpandMdRegularIcon = (
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
        d='M4.5 5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H1v3.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-4c.02-.313.188-.48.5-.5h4ZM0 14.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5V18h3.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-4c-.313-.02-.48-.188-.5-.5v-4ZM13.5 5c.313.02.48.188.5.5v4c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5V6H9.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h4Zm-.5 9.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v4c-.02.313-.188.48-.5.5h-4c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5H13v-3.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExpandMdRegularIcon);
export default ForwardRef;

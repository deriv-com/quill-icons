import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowLeftToLineMdRegularIcon = (
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
        d='M0 17.5v-11c.02-.313.188-.48.5-.5.313.02.48.188.5.5v11c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5Zm3.156-5.844 4-4c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L4.719 11.5H13.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H4.719l3.125 3.156c.208.23.208.459 0 .688-.23.208-.459.208-.688 0l-4-4c-.208-.23-.208-.459 0-.688Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineMdRegularIcon);
export default ForwardRef;

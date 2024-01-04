import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightArrowLeftMdRegularIcon = (
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
        d='m13.844 8.344-3 3c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688L12.281 8.5H.5C.187 8.48.02 8.312 0 8c.02-.313.188-.48.5-.5h11.781l-2.125-2.156c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l3 3c.208.23.208.459 0 .688Zm-10.688 11-3-3c-.208-.23-.208-.459 0-.688l3-3c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L1.719 15.5H13.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5H1.719l2.125 2.156c.208.23.208.459 0 .688-.23.208-.459.208-.688 0Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightArrowLeftMdRegularIcon);
export default ForwardRef;

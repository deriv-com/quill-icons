import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedArrowRightMdRegularIcon = (
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
        d='m13.844 12.344-5.5 5.5c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l4.625-4.656H.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h11.781L7.656 6.844c-.208-.23-.208-.459 0-.688.23-.208.459-.208.688 0l5.5 5.5c.208.23.208.459 0 .688Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightMdRegularIcon);
export default ForwardRef;

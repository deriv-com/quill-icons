import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsLeftMdRegularIcon = (
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
        d='m1.656 11.656 6-6c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L2.719 12l5.625 5.656c.208.23.208.459 0 .688-.23.208-.459.208-.688 0l-6-6c-.208-.23-.208-.459 0-.688Zm12-6c.23-.208.459-.208.688 0 .208.23.208.459 0 .688L8.719 12l5.625 5.656c.208.23.208.459 0 .688-.23.208-.459.208-.688 0l-6-6c-.208-.23-.208-.459 0-.688l6-6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftMdRegularIcon);
export default ForwardRef;

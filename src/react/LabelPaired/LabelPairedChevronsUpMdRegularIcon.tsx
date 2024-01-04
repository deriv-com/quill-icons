import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronsUpMdRegularIcon = (
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
        d='m8.344 5.656 6 6c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L8 6.719l-5.656 5.625c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l6-6c.23-.208.459-.208.688 0Zm6 12c.208.23.208.459 0 .688-.23.208-.459.208-.688 0L8 12.719l-5.656 5.625c-.23.208-.459.208-.688 0-.208-.23-.208-.459 0-.688l6-6c.23-.208.459-.208.688 0l6 6Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpMdRegularIcon);
export default ForwardRef;

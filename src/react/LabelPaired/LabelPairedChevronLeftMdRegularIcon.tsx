import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronLeftMdRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M.656 12.344q-.312-.345 0-.688l6-6q.345-.312.688 0 .312.345 0 .688L1.719 12l5.625 5.656q.312.345 0 .688-.345.312-.688 0z' />
    </g>
    <defs>
      <clipPath id='1d0ffda1f809e8c0900506fa46bdacfb__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftMdRegularIcon);
export default ForwardRef;

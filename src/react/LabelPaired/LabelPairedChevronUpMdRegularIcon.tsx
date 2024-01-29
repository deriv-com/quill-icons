import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpMdRegularIcon = (
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
    <g>
      <path d='M7.656 7.656q.345-.312.688 0l6 6q.312.345 0 .688-.345.312-.688 0L8 8.719l-5.656 5.625q-.345.312-.688 0-.312-.345 0-.688z' />
    </g>
    <defs>
      <clipPath id='140ca09cfbffa81ac83fac19a83b2e5b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpMdRegularIcon);
export default ForwardRef;

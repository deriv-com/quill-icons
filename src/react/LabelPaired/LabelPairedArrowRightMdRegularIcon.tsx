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
    <g>
      <path d='m13.844 12.344-5.5 5.5q-.345.312-.688 0-.312-.345 0-.688l4.625-4.656H.5q-.469-.03-.5-.5.031-.469.5-.5h11.781L7.656 6.844q-.312-.345 0-.688.345-.312.688 0l5.5 5.5q.312.345 0 .688' />
    </g>
    <defs>
      <clipPath id='3a4a904e7652b9ecfaadca0795726ddf__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowRightMdRegularIcon);
export default ForwardRef;

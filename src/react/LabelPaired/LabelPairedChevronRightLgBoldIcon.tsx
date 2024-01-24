import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronRightLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M12.164 14.836q.548.664 0 1.328l-7.5 7.5q-.664.547-1.328 0-.547-.664 0-1.328l6.836-6.836-6.836-6.836q-.547-.664 0-1.328.664-.548 1.328 0z' />
    </g>
    <defs>
      <clipPath id='4e000c91d07e68238eff48f9c7b1f22b__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightLgBoldIcon);
export default ForwardRef;

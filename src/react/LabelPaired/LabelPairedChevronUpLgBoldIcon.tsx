import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.336 9.836q.664-.547 1.328 0l7.5 7.5q.547.664 0 1.328-.664.547-1.328 0L10 11.828l-6.836 6.836q-.664.547-1.328 0-.547-.664 0-1.328z' />
    </g>
    <defs>
      <clipPath id='9c3c173a94e7421d2764c1ae176074d6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpLgBoldIcon);
export default ForwardRef;

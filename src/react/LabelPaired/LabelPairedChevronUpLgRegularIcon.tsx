import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChevronUpLgRegularIcon = (
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
      <path d='M9.57 10.07q.43-.39.86 0l7.5 7.5q.39.43 0 .86-.43.39-.86 0L10 11.398 2.93 18.43q-.43.39-.86 0-.39-.43 0-.86z' />
    </g>
    <defs>
      <clipPath id='c8745fab95dc6ba444ff6646c440667e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpLgRegularIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardLgRegularIcon = (
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
      <path d='M1.484 15.5 10 21.672V9.328zM10.078 8q.508 0 .82.352.352.312.352.82v4.023l6.875-4.96Q18.438 8 18.828 8q.508 0 .82.352.352.312.352.82v12.656q0 .508-.352.82-.312.352-.82.352-.39 0-.703-.234l-6.875-4.961v4.023q0 .508-.352.82-.312.352-.82.352-.39 0-.703-.234L.391 16.242A.86.86 0 0 1 0 15.5q0-.468.39-.742l8.985-6.524Q9.688 8 10.078 8m1.172 8.242 7.5 5.43V9.328l-7.5 5.43z' />
    </g>
    <defs>
      <clipPath id='1bea609703bb1a51db6d26c420e6aebe__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardLgRegularIcon);
export default ForwardRef;

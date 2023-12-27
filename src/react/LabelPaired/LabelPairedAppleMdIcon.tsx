import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedAppleMdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g>
      <path d='M9.969 12.406c-.042.125.031.5.219 1.125.187.646.75 1.23 1.687 1.75-.125.396-.344.886-.656 1.469a7.446 7.446 0 0 1-1.125 1.531c-.438.438-.906.677-1.406.719a2.8 2.8 0 0 1-1.126-.281c-.354-.167-.78-.26-1.28-.282-.522.021-.97.125-1.345.313-.333.146-.666.23-1 .25-.52-.02-1.01-.27-1.468-.75a7.762 7.762 0 0 1-1.188-1.625C.948 16 .708 15.49.563 15.094c-.292-.875-.438-1.719-.438-2.531.042-1.396.427-2.438 1.156-3.126.709-.687 1.521-1.041 2.438-1.062.52.042 1.031.167 1.531.375.354.146.646.23.875.25.167-.02.417-.094.75-.219.27-.104.583-.208.938-.312a3.096 3.096 0 0 1 1.062-.125c1.167.104 2.052.573 2.656 1.406-1.062.625-1.583 1.51-1.562 2.656ZM8.188 7.281c-.626.73-1.344 1.084-2.157 1.063-.041-.875.219-1.625.782-2.25.27-.292.593-.542.968-.75A2.818 2.818 0 0 1 8.938 5c.041.188.03.48-.032.875-.083.417-.323.885-.719 1.406Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleMdIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedForwardStepMdRegularIcon = (
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
      <path d='M8 6.5q.031-.469.5-.5.47.031.5.5v11q-.03.47-.5.5-.469-.03-.5-.5v-4.25l-5.594 4.563a.8.8 0 0 1-.531.187.85.85 0 0 1-.625-.25.85.85 0 0 1-.25-.625V6.875q0-.375.25-.625A.85.85 0 0 1 1.875 6q.312 0 .531.188L8 10.75zm-6 .656v9.688L7.969 12z' />
    </g>
    <defs>
      <clipPath id='7b160d018d2df9bdc497acdca33a427e__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepMdRegularIcon);
export default ForwardRef;

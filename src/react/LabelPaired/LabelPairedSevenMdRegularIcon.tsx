import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenMdRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5.5c.02-.313.188-.48.5-.5h9a.49.49 0 0 1 .438.25.531.531 0 0 1 0 .5l-8 13c-.188.25-.417.313-.688.188-.25-.188-.302-.417-.156-.688L8.594 6H.5c-.313-.02-.48-.188-.5-.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenMdRegularIcon);
export default ForwardRef;

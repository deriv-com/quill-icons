import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedDerivSmIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m11.844 4.215 2.734-.465-1.914 10.938c-.3 1.695-1.914 3.062-3.637 3.062H6.95c-2.351 0-3.91-1.887-3.5-4.21l.192-1.013c.41-2.324 2.625-4.238 4.976-4.238h2.488l.739-4.074Zm-1.778 10.09.602-3.5H8.48c-1.066 0-2.05.875-2.242 1.914l-.11.629c-.19 1.039.52 1.886 1.56 1.886h1.285c.52 0 .984-.41 1.093-.93Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivSmIcon);
export default ForwardRef;

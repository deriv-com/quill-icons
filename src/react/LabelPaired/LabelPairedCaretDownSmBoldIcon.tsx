import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCaretDownSmBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m4.5 12.746 2.434-2.434H2.066L4.5 12.747Zm.629 1.258a.912.912 0 0 1-.629.246.912.912 0 0 1-.629-.246l-3.5-3.5c-.255-.292-.319-.61-.191-.957A.896.896 0 0 1 1 9h7c.383.018.656.2.82.547.128.346.064.665-.191.957l-3.5 3.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmBoldIcon);
export default ForwardRef;

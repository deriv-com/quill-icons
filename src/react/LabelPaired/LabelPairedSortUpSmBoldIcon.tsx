import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSortUpSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M4.5 6.129 2.066 8.563h4.868L4.5 6.128ZM3.871 4.87a.913.913 0 0 1 .629-.246c.237 0 .447.082.629.246l3.5 3.5c.255.292.319.61.191.957a.896.896 0 0 1-.82.547H1a.896.896 0 0 1-.82-.547c-.128-.346-.064-.665.191-.957l3.5-3.5Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpSmBoldIcon);
export default ForwardRef;

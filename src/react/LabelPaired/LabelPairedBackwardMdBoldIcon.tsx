import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M9 6.938v3.093l5.531-3.875A.89.89 0 0 1 15.062 6c.271 0 .49.094.657.281a.836.836 0 0 1 .281.657v10.125c0 .27-.094.49-.281.656a.836.836 0 0 1-.656.281.986.986 0 0 1-.532-.156L9 13.969v3.094c0 .27-.094.49-.281.656a.836.836 0 0 1-.656.281.914.914 0 0 1-.563-.188L.312 12.595A.688.688 0 0 1 0 12c0-.25.104-.448.313-.594L7.5 6.187A.914.914 0 0 1 8.063 6c.27 0 .49.094.656.281A.836.836 0 0 1 9 6.938Zm0 4.937v.25L14.5 16V8.031L9 11.875ZM2.031 12 7.5 15.969V8.03L2.031 12Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardMdBoldIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSevenSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M.125 5.281c.036-.4.255-.62.656-.656H8.22c.255 0 .446.11.574.328.11.219.11.438 0 .656L2.23 16.547c-.237.328-.537.41-.902.246-.328-.237-.4-.538-.219-.902L7.07 5.937H.781c-.4-.036-.62-.255-.656-.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenSmBoldIcon);
export default ForwardRef;

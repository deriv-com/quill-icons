import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBarsSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.375 6.156c.036-.4.255-.62.656-.656H11.97c.4.036.62.255.656.656-.037.401-.255.62-.656.657H1.03c-.4-.037-.62-.256-.656-.657Zm0 4.375c.036-.4.255-.62.656-.656H11.97c.4.036.62.255.656.656-.037.401-.255.62-.656.656H1.03c-.4-.036-.62-.255-.656-.656Zm12.25 4.375c-.037.401-.255.62-.656.656H1.03c-.4-.036-.62-.255-.656-.656.036-.4.255-.62.656-.656H11.97c.4.037.62.255.656.656Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsSmBoldIcon);
export default ForwardRef;

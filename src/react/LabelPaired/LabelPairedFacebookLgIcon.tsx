import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedFacebookLgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M19.688 15.5c-.053 2.474-.834 4.583-2.344 6.328-1.51 1.745-3.45 2.826-5.82 3.242v-6.758h2.265l.43-2.812h-2.696v-1.836a1.4 1.4 0 0 1 .313-1.016c.234-.312.651-.468 1.25-.468h1.21V9.797c-.025-.026-.246-.065-.663-.117a12.787 12.787 0 0 0-1.485-.078c-1.12 0-2.005.325-2.656.976-.65.651-.99 1.576-1.015 2.774V15.5H6.016v2.813h2.46v6.757c-2.37-.416-4.31-1.497-5.82-3.242C1.146 20.083.365 17.974.312 15.5c.027-1.797.47-3.425 1.329-4.883a9.671 9.671 0 0 1 3.476-3.476C6.576 6.28 8.203 5.839 10 5.812c1.797.027 3.425.47 4.883 1.329a9.672 9.672 0 0 1 3.476 3.476c.86 1.458 1.302 3.086 1.328 4.883Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookLgIcon);
export default ForwardRef;

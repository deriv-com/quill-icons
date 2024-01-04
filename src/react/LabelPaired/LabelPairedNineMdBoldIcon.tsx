import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedNineMdBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M1.5 10c.02 1 .365 1.823 1.031 2.469C3.177 13.135 4 13.479 5 13.5c1.042-.02 1.896-.396 2.563-1.125l.156-.188c.52-.645.781-1.374.781-2.187-.02-1-.365-1.823-1.031-2.469C6.823 6.865 6 6.521 5 6.5c-1 .02-1.823.365-2.469 1.031C1.865 8.177 1.521 9 1.5 10Zm3.938 4.969c-.146.02-.292.031-.438.031-1.417-.042-2.594-.531-3.531-1.469C.53 12.594.042 11.417 0 10c.042-1.417.531-2.594 1.469-3.531C2.406 5.53 3.583 5.042 5 5c1.417.042 2.594.531 3.531 1.469C9.47 7.406 9.958 8.583 10 10c-.02 1.333-.458 2.458-1.313 3.375l-4.343 5.344c-.334.333-.688.375-1.063.125-.333-.334-.375-.688-.125-1.063l2.281-2.812Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineMdBoldIcon);
export default ForwardRef;

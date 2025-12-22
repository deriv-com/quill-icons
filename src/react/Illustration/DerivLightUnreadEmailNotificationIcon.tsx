import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightUnreadEmailNotificationIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 102 102'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#7f9fa79ea6b396ba2c8ea57f939ba28c__a)'>
      <path
        fill='#85ACB0'
        d='M.09 49.01v43.317L28.048 70.99zM88.63 49.01v43.317L60.674 70.99zM4.518 101.909h79.685a4.44 4.44 0 0 0 4.427-4.427v-.642L44.405 62.044.09 96.84v.642a4.44 4.44 0 0 0 4.427 4.427'
      />
      <path
        fill='#85ACB0'
        d='M84.203 39.933H4.518A4.44 4.44 0 0 0 .09 44.36v.642l44.314 34.795L88.63 45.002v-.642a4.44 4.44 0 0 0-4.427-4.427'
        opacity={0.6}
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#FF444F'
        d='M77.563 48.787c13.447 0 24.348-10.9 24.348-24.348S91.011.091 77.563.091s-24.348 10.9-24.348 24.348 10.9 24.348 24.348 24.348'
        style={{
          mixBlendMode: 'multiply',
        }}
      />
      <path
        fill='#fff'
        d='M75.793 35.064V21.296h-5.335v-3.254c.753.022 1.46-.044 2.17-.155.707-.11 1.327-.376 1.88-.708a4.75 4.75 0 0 0 1.417-1.328c.377-.554.642-1.218.753-2.037h3.43v21.228h-4.315z'
      />
    </g>
    <defs>
      <clipPath id='7f9fa79ea6b396ba2c8ea57f939ba28c__a'>
        <path fill='#fff' d='M0 0h102v102H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightUnreadEmailNotificationIcon);
export default ForwardRef;
